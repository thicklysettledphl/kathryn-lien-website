import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={`type-display ${styles.name}`}>Kathryn Lien</h1>
        <div className={styles.meta}>
          <span className="type-label">Artist</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span className="type-label">Philadelphia</span>
        </div>
      </div>
    </div>
  );
}
