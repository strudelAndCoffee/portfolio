import lib from "../assets/lib/resume.json";
import styles from "../css/resume.module.css";
import "../css/global.css";
import { useLayoutEffect } from "react";
import { ResumeCard } from "../components/resume/ResumeCard";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
    else entry.target.classList.remove("show");
  });
});

function scrollEffect() {
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
}

export default function Resume() {
  useLayoutEffect(() => {
    scrollEffect();
  }, []);

  return (
    <section className={styles.resume}>
      <div className={styles.container}>
        {lib.docs.map((doc) => (
          <ResumeCard doc={doc} />
        ))}
      </div>
    </section>
  );
}
