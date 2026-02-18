import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark}>
          Kathryn Lien
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href="/installation" className={styles.link}>
              Installation
            </Link>
          </li>
          <li>
            <Link href="/sculpture" className={styles.link}>
              Sculpture
            </Link>
          </li>
          <li>
            <Link href="/cv" className={styles.link}>
              CV
            </Link>
          </li>
          <li>
            <a
              href="https://thicklysettled.info"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Design
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
