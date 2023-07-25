import { Link } from "react-router-dom";

import './Sidebar.css'

function Sidebar() {

    return (
        <aside className="dashboard-sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Composites</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/source">Source</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar