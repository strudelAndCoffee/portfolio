import styles from "../../css/resume.module.css";

interface ResumeCardProps {
  doc: string[];
}

export function ResumeCard({ doc }: ResumeCardProps) {
  return (
    <article className={`${styles.card} hidden`}>
      {doc.map((item) => (
        <p>{item}</p>
      ))}
    </article>
  );
}
