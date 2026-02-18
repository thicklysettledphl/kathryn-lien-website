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
            <Link href="/" className={styles.link}>
              Work
            </Link>
          </li>
          <li>
            <Link href="/cv" className={styles.link}>
              CV
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
