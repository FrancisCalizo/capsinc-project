import './About.css'

function About() {
    return (
        <>
            <header className="content-title">
                About
            </header>

            <main className="about-main">
                <section>
                    <h3>Tech Stack</h3>

                    <p>TypeScript, React.js, HTML5, CSS3, Charts.js</p>
                </section>

                <section>
                    <h3>Nice-to-haves</h3>

                    <ul>
                        <li>Table Sorting</li>
                        <li>Table Filtering</li>
                        <li>Table Pagination</li>
                        <li>Accurate y-axis values for charts</li>
                        <li>Folder structure can be more clear</li>
                    </ul>
                </section>
            </main>
        </>
    )
}

export default About