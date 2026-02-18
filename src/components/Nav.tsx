"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const links = [
  { label: "Work", href: "/work" },
  { label: "CV", href: "/cv" },
  { label: "Design", href: "https://thicklysettled.info", external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close menu on route change / resize
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <Link href="/" className={styles.wordmark} onClick={close}>
            Kathryn Lien
          </Link>

          {/* Desktop */}
          <ul className={styles.links}>
            {links.map(({ label, href, external }) =>
              external ? (
                <li key={label}>
                  <a
                    href={href}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                </li>
              ) : (
                <li key={label}>
                  <Link href={href} className={styles.link}>
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`${styles.bar} ${open ? styles.barOpen1 : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen2 : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen3 : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayVisible : ""}`}
        aria-hidden={!open}
      >
        <ul className={styles.overlayLinks}>
          {links.map(({ label, href, external }) =>
            external ? (
              <li key={label}>
                <a
                  href={href}
                  className={styles.overlayLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ) : (
              <li key={label}>
                <Link href={href} className={styles.overlayLink} onClick={close}>
                  {label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
