import { useEffect } from 'react';

import './App.css';

const URL = 'https://capsinterviews.azurewebsites.net/api/composites?code=pn489yjzOHYDc'

function App() {
	useEffect(() => {
		// TODO: Replace with Caps URL
		fetch('data/composites.json')
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(err => console.log(err))
	}, [])

    return (
		<div className="App">
			<h1>Hello World</h1>
		</div>
	);
}

export default App;
