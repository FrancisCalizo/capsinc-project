import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

import { formatCurrency, formatDate, formatPercentage } from 'src/utils';
import useCompositeContext from 'src/hooks/useCompositeContext';
import LoadingAnimation from 'src/components/LoadingAnimation';
import ChartDetails from 'src/components/ChartDetails'

import './CompositeDetails.css'

const API_URL = 
    'https://capsinterviews.azurewebsites.net/api/composites/performance/'

type View = 'TABLE' | 'CHART';

export interface IPerformanceData {
    Id: number,
    ixTenantClass: number,
    AssetClassName: string,
    PerfDate: string,
    bop_mv: number,
    eop_mv: number,
    awr_gr: number,
    awr_nr: number,
    eop_cf: number,
    eop_mf: number,
    eop_cb: number,
    eop_wd: number,
    NumberOfAccts: number,
}

function CompositeDetails() {

    const { composites } = useCompositeContext()
    const navigate = useNavigate()

    // Get query param string "code"
    const x = window.location.search;
    const y = 'code=';
    const id = x.slice(x.indexOf(y) + y.length)
    const compositeInfo = composites.find(c => c.compositeId === Number(id))

    const [performanceData, setPerformanceData] = useState<IPerformanceData[]>([])
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

    const handleChangeView = (v: View) => setView(v)

    const handleBackClick = () => navigate(-1)

    return (
        <>
            <button 
                className='back-button'
                onClick={handleBackClick}
            >
                &lt; Back to Composites List
            </button>

            <header className="content-title">
                Composite Performance
            </header>

            <h3 className="sub-heading">
                { compositeInfo?.compositeName }
            </h3>

            <div className="display-buttons">
                <button 
                    onClick={() => handleChangeView('TABLE')}
                    className={getClasses('TABLE')}
                >
                    Table View
                </button>
                <button
                    onClick={() => handleChangeView('CHART')}
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