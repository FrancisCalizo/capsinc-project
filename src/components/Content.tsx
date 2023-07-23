import './Content.css'

interface ContentProps {
    children: React.ReactNode
}

function Content({ children }: ContentProps) {

    return (
        <main className="dashboard-content">
            { children }
        </main>
    );
}

export default Content