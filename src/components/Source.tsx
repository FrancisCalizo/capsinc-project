import './Source.css'

function Source() {
    return (
        <>
            <header className="content-title">
                Source
            </header>

            <main className='source-main'>
                <div>
                    <span>
                        <strong>Demo Link:</strong>
                    </span> 
                    <a 
                        href="https://fc-capsinc-project.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://fc-capsinc-project.netlify.app/
                    </a>
                </div>

                <div>
                    <span>
                        <strong>Source Code:</strong>
                    </span>
                    <a 
                        href="https://github.com/FrancisCalizo/capsinc-project"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/FrancisCalizo/capsinc-project
                    </a>
                </div>
            </main>
        </>
    )
}

export default Source