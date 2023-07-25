import DashboardLayout from 'src/components/DashboardLayout';
import CompositeDetails from 'src/components/CompositeDetails';
import Composites from 'src/components/Composites';
import About from 'src/components/About';
import Source from 'src/components/Source'

import './App.css';

function App() {

	const determinePage = (location: Location) => {
		const { pathname } = location;

		let Page: JSX.Element;

		switch(pathname) {
			case "/about":
				Page = <About />
				break

			case "/source":
				Page = <Source />
				break

			case "/composites":
				Page = <CompositeDetails />
				break

			default:
				Page = <Composites />
				break
		}

		return Page
	}

	const Page = determinePage(window.location)

    return (
		<DashboardLayout>
			
			{ Page }

		</DashboardLayout>
	);
}

export default App;
