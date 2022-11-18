import doc from '../assets/lib/resume.json';

export default function Resume() {
    return (
        <section>
            <h2>Resume</h2>
            <div>
                {doc['Languages'].map(ln => (
                    <p>{ln}</p>
                ))}
            </div>
            <div>
                {doc['Frameworks'].map(fw => (
                    <p>{fw}</p>
                ))}
            </div>
            <div>
                {doc['Front End'].map(ss => (
                    <p>{ss}</p>
                ))}
            </div>
            <div>
                {doc['Server Side'].map(ss => (
                    <p>{ss}</p>
                ))}
            </div>
            <div>
                {doc['Databases'].map(ss => (
                    <p>{ss}</p>
                ))}
            </div>
            <div>
                {doc['Deployment'].map(ss => (
                    <p>{ss}</p>
                ))}
            </div>
            <div>
                {doc['DevOps'].map(ss => (
                    <p>{ss}</p>
                ))}
            </div>
            <div>
                {doc['Acronym Soup'].map(ss => (
                    <p>{ss}</p>
                ))}
            </div>
        </section>
    )
}