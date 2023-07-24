import DashboardLayout from 'src/components/DashboardLayout';
import Composites from 'src/components/Composites';
import About from 'src/components/About';
import Source from 'src/components/Source'

import './App.css';

function App() {

    return (
		<DashboardLayout>

			{ window.location.pathname === "/" && <Composites /> }

			{ window.location.pathname === "/about" && <About /> }

			{ window.location.pathname === "/source" && <Source /> }

		</DashboardLayout>
	);
}

export default App;
