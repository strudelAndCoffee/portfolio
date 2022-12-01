import doc from '../assets/lib/resume.json';
import styles from '../css/resume.module.css';
import '../css/global.css';
import { useLayoutEffect } from 'react';

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show')
        else entry.target.classList.remove('show')
    })
})

function scrollEffect() {
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach(el => observer.observe(el))
}

export default function Resume() {

    useLayoutEffect(() => {
        scrollEffect()
    },[])

    return (
        <section className={styles.resume}>
            <div className={styles.container}>
                <article className={`${styles.card} hidden`}>
                    {doc['Languages'].map(ln => (
                        <p>{ln}</p>
                    ))}
                </article>
                <article className={`${styles.card} hidden`}>
                    {doc['Frameworks'].map(fw => (
                        <p>{fw}</p>
                    ))}
                </article>
                <article className={`${styles.card} hidden`}>
                    {doc['Front End'].map(ss => (
                        <p>{ss}</p>
                    ))}
                </article>
                <article className={`${styles.card} hidden`}>
                    {doc['Server Side'].map(ss => (
                        <p>{ss}</p>
                    ))}
                </article>
                <article className={`${styles.card} hidden`}>
                    {doc['Databases'].map(ss => (
                        <p>{ss}</p>
                    ))}
                </article>
                <article className={`${styles.card} hidden`}>
                    {doc['Deployment'].map(ss => (
                        <p>{ss}</p>
                    ))}
                </article>
                <article className={`${styles.card} hidden`}>
                    {doc['DevOps'].map(ss => (
                        <p>{ss}</p>
                    ))}
                </article>
                <article className={`${styles.card} hidden`}>
                    {doc['Acronym Soup'].map(ss => (
                        <p>{ss}</p>
                    ))}
                </article>
            </div>
        </section>
    )
}