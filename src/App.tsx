import { useEffect } from 'react';

import DashboardLayout from './components/DashboardLayout';

import './App.css';

const API_URL = 'https://capsinterviews.azurewebsites.net/api/composites?code=pn489yjzOHYDc'

function App() {

	useEffect(() => {
		// TODO: Replace with Caps URL
		// TODO: Do TypeScript types?
		fetch(API_URL) 
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(err => console.log(err))
	}, [])

    return (
		<DashboardLayout>
			<h1>Hello World</h1>
		</DashboardLayout>
	);
}

export default App;
