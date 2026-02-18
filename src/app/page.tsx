import WorkGrid from "@/components/WorkGrid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <h1 className={`type-display ${styles.heroName}`}>
              Kathryn Lien
            </h1>
            <div className={styles.heroMeta}>
              <span className="type-label">Sculptor</span>
              <span className={styles.dot} aria-hidden="true">·</span>
              <span className="type-label">Philadelphia</span>
            </div>
          </div>
        </div>
      </header>

      <hr className="rule" />

      <section className={styles.gridSection}>
        <div className="container">
          <WorkGrid />
        </div>
      </section>
    </div>
  );
}
