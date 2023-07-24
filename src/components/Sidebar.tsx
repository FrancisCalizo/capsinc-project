import './Sidebar.css'

function Sidebar() {

    return (
        <aside className="dashboard-sidebar">
            <nav>
                <ul>
                    <li>
                        <a href="/">Composites</a>
                    </li>

                    <li>
                        <a href="/about">About</a>
                    </li>

                    <li>
                        <a href="/source">Source Code</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar