import { useEffect, useState } from 'react'

import { formatCurrency, formatDate, formatPercentage } from 'src/utils';
import useCompositeContext from 'src/hooks/useCompositeContext';
import LoadingAnimation from 'src/components/LoadingAnimation';
import ChartDetails from 'src/components/ChartDetails'

import './CompositeDetails.css'

const API_URL = 
    'https://capsinterviews.azurewebsites.net/api/composites/performance/'

type View = 'TABLE' | 'CHART';

function CompositeDetails() {

    const { composites } = useCompositeContext()

    // Get query param string "code"
    const x = window.location.search;
    const y = 'code=';
    const id = x.slice(x.indexOf(y) + y.length)
    const compositeInfo = composites.find(c => c.compositeId === Number(id))

    // TODO: Remove Any type
    const [performanceData, setPerformanceData] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [view, setView] = useState<View>('TABLE')

    useEffect(() => {
        const url = API_URL + `${id}?code=${process.env.REACT_APP_API_KEY}`

        setIsLoading(true)

        fetch(url) 
			.then(res => res.json())
			.then(data => setPerformanceData(data))
			.catch(err => console.log(err))
            .finally(() => setIsLoading(false))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const getClasses = (v: View) => {
        if (v === view) {
            return 'selected'
        }

        return ''
    }

    const handleButtonClick = (v: View) => setView(v)

    return (
        <>
            <header className="content-title">
                Composite Performance
            </header>

            <h3 className="sub-heading">
                { compositeInfo?.compositeName }
            </h3>

            <div className="display-buttons">
                <button 
                    onClick={() => handleButtonClick('TABLE')}
                    className={getClasses('TABLE')}
                >
                    Table View
                </button>
                <button
                onClick={() => handleButtonClick('CHART')}
                    className={getClasses('CHART')}
                >
                    Chart View
                </button>
            </div>

            <main>
                
                { isLoading && <LoadingAnimation />}

                { !isLoading && (
                    <>
                        {view === 'TABLE' && (
                            <table className='performance-list-table'>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Beginning Market Value</th>
                                        <th>End Market Value</th>
                                        <th>Asset Weight Gross %</th>
                                        <th>Asset Weight Net %</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {performanceData.map((p, idx) => (
                                        <tr key={idx}>
                                            <td>{ formatDate(p.PerfDate) }</td>
                                            <td>{ formatCurrency(p.bop_mv) }</td>
                                            <td>{ formatCurrency(p.eop_mv) }</td>
                                            <td>{ formatPercentage(p.awr_gr) }</td>
                                            <td>{ formatPercentage(p.awr_nr) }</td>
                                        </tr>
                                    ))}
                                </tbody>
                        </table>
                        )}

                        {view === 'CHART' && (
                            <ChartDetails data={ performanceData }/>
                        )}
                    </>
                )}
            
            </main>
        </>
    )
}

export default CompositeDetails