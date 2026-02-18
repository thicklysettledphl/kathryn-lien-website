import cv from "@/data/cv";
import styles from "./page.module.css";

export const metadata = {
  title: "CV — Kathryn Lien",
  description: "Curriculum vitae for sculptor Kathryn Lien.",
};

export default function CVPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className="type-section-header">Curriculum Vitae</h1>
          <p className={styles.subheading}>
            {cv.name} — {cv.location}
          </p>
        </header>

        <hr className="rule" />

        <div className={styles.body}>
          {cv.sections.map((section) => (
            <div key={section.label} className={styles.section}>
              <div className={styles.labelCol}>
                <span className="type-label">{section.label}</span>
              </div>
              <div className={styles.contentCol}>
                {section.entries.map((entry, i) => (
                  <div key={i} className={styles.entry}>
                    {entry.year && (
                      <span className={styles.year}>{entry.year}</span>
                    )}
                    <div className={styles.entryText}>
                      <p className={styles.description}>{entry.description}</p>
                      {entry.location && (
                        <p className="type-meta">{entry.location}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
