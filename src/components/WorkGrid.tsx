"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import works from "@/data/works";
import styles from "./WorkGrid.module.css";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function WorkGrid() {
  const [items, setItems] = useState(works);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    setItems(shuffle(works));
  }, []);

  const close = useCallback(() => setLightbox(null), []);

  // Lock body scroll and handle Escape when lightbox is open
  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close]);

  return (
    <>
      <section className={styles.grid}>
        {items.map((work) => {
          const hasCaption = work.title || work.year || work.medium || work.dimensions;
          return (
            <article
              key={work.id}
              className={styles.cell}
              onClick={() => setLightbox(work.image)}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={work.image}
                  alt={work.title || ""}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                  style={{ objectFit: "cover" }}
                />
              </div>
              {hasCaption && (
                <div className={styles.caption}>
                  {work.title && <p className={styles.title}>{work.title}</p>}
                  {(work.year || work.medium) && (
                    <p className="type-meta">
                      {[work.year, work.medium].filter(Boolean).join(" — ")}
                    </p>
                  )}
                  {work.dimensions && (
                    <p className="type-meta">{work.dimensions}</p>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </section>

      {lightbox && (
        <div className={styles.lightbox} onClick={close}>
          <div className={styles.lightboxInner}>
            <Image
              src={lightbox}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
