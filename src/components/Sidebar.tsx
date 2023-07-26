import { Link, useLocation } from "react-router-dom";

import './Sidebar.css'

type Paths = '/' | '/about' | '/source'

function Sidebar() {

    const { pathname } = useLocation()

    const getClasses = (p: Paths) => {
        if (p === pathname) {
            return 'selected'
        }

        return ''
    }

    return (
        <aside className="dashboard-sidebar">
            <nav>
                <ul>
                    <li className={getClasses('/')}>
                        <Link to="/">Composites</Link>
                    </li>

                    <li className={getClasses('/about')}>
                        <Link to="/about">About</Link>
                    </li>

                    <li className={getClasses('/source')}>
                        <Link to="/source">Source</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar