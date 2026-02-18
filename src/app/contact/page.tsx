import styles from "./page.module.css";

export const metadata = {
  title: "Contact — Kathryn Lien",
  description: "Contact sculptor Kathryn Lien.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.inner}>
          <span className="type-label" style={{ color: "var(--color-accent)" }}>
            Get in touch
          </span>

          <h1 className={`type-display ${styles.heading}`}>
            Let&apos;s talk
          </h1>

          <a href="mailto:kathrynllien@gmail.com" className={styles.email}>
            kathrynllien@gmail.com
          </a>

          <div className={styles.location}>
            <span className="type-label">Based in</span>
            <p className={styles.locationText}>Philadelphia, PA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
