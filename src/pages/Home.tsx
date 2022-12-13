import styles from '../css/home.module.css';

type HomeProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export default function Home({ setPage }: HomeProps) {
  return (
    <section className={styles.container}>
      <div className={styles.upper}>
        <h2>Full Stack Web Developer</h2>
        <p>React | TypeScript | Node | MERN</p>
      </div>
      <div className={styles.lower}>
        <div className={styles.card} onClick={() => setPage('port')}>
          Browse my portfolio
        </div>
        <div className={styles.card} onClick={() => setPage('resume')}>
          View my resume
        </div>
        <div className={styles.card} onClick={() => setPage('cont')}>
          Contact me
        </div>
      </div>
    </section>
  );
}
