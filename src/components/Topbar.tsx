import './Topbar.css'

function Topbar() {

    const handleOnClick = (
        e: React.MouseEvent<HTMLUListElement> & { target: HTMLUListElement}
    ) => {
        const { target: { id } } = e;
        
        if (id !== 'composites') {
            alert('This link is just here styling purposes.')
        }
    }

    return (
        <header>
            <div className="text-logo">
                <strong>CompositeHub</strong>
            </div>

            <nav>
                <ul onClick={ handleOnClick }>
                    <li id="dashboard">Dashboard</li>
                    <li id="portfolios">Portfolios</li>
                    <li id="composites">Composites</li>
                </ul>
            </nav>
        </header>
    );
}

export default Topbar