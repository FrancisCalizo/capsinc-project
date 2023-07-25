import { useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/components/DashboardLayout';
import CompositeDetails from 'src/components/CompositeDetails';
import CompositeContext from './context/CompositeContext';

import Composites from 'src/components/Composites';
import About from 'src/components/About';
import Source from 'src/components/Source'

import './App.css';

function App() {

	const routes = useRoutes([
		{ path: '/', element: <Composites /> },
		{ path: '/about', element: <About /> },
		{ path: '/source', element: <Source /> },
		{ path: '/composites', element: <CompositeDetails /> },
		{ path: '*', element: <h1>Page not found</h1> },
		])

    return (
		<CompositeContext>

			<DashboardLayout>

				{ routes }

			</DashboardLayout>

		</CompositeContext>
	);
}

export default App;
