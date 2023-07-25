import { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

import useCompositeContext from 'src/hooks/useCompositeContext';
import LoadingAnimation from './LoadingAnimation';

import './Composites.css'

const API_URL = 
    `https://capsinterviews.azurewebsites.net/api/composites?code=${process.env.REACT_APP_API_KEY}`

export type TComposites = {
    compositeId: number;
    compositeCode: string;
    compositeName: string;
}

function Composites() {

    const { composites, setComposites } = useCompositeContext()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

		fetch(API_URL) 
			.then(res => res.json())
			.then(data => setComposites(data))
			.catch(err => console.log(err))
            .finally(() => setIsLoading(false))

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

    return (
        <>
            <header className="content-title">
                Composites
            </header>

            <main>
                
                { isLoading && <LoadingAnimation />}

                { !isLoading && (
                    <table className='composite-list-table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Code</th>
                                <th>Name</th>
                                <th/>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {composites.map((c, idx) => (
                                <tr key={idx}>
                                    <td>{ c.compositeId }</td>
                                    <td>{ c.compositeCode }</td>
                                    <td>{ c.compositeName }</td>
                                    <td>
                                        <Link to={`/composites?id=${c.compositeId}`}>
                                            <button className="view-details">
                                                View Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

            </main>
        </>
    )
}

export default Composites