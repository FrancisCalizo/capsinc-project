import { useEffect } from 'react';

const API_URL = 'https://capsinterviews.azurewebsites.net/api/composites?code=pn489yjzOHYDc'

function Composites() {

    useEffect(() => {
		// TODO: Do TypeScript types?
        // TODO: Utilize headers for API key?
		fetch(API_URL) 
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(err => console.log(err))
	}, [])

    return (
        <div>Composites</div>
    )
}

export default Composites