import './Content.css'

interface ContentProps {
    children: React.ReactNode
}

function Content({ children }: ContentProps) {

    return (
        <div className="dashboard-content">
            { children }
        </div>
    );
}

export default Content