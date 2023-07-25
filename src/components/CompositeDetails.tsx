import { useEffect, useState } from 'react'

import { formatCurrency, formatDate, formatPercentage } from 'src/utils';

import './CompositeDetails.css'

const API_URL = 
    'https://capsinterviews.azurewebsites.net/api/composites/performance/'

function CompositeDetails() {

    // Get query param string "code"
    const x = window.location.search;
    const y = 'code=';
    const id = x.slice(x.indexOf(y) + y.length)

    const [performanceData, setPerformanceData] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)

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
    

    return (
        <>
            <header className="content-title">
                Composite Performance
            </header>

            <main>
                
                {/* TODO: Replace with loading gif */}
                { isLoading && <>Loading...</>}

                { !isLoading && (
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
            
            </main>
        </>
    )
}

export default CompositeDetails