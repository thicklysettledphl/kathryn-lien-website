import Image from "next/image";
import works, { WorkCategory } from "@/data/works";
import styles from "./WorkGrid.module.css";

export default function WorkGrid({ category }: { category: WorkCategory }) {
  const filtered = works.filter((w) => w.category === category);

  return (
    <section className={styles.grid}>
      {filtered.map((work) => {
        const hasCaption = work.title || work.year || work.medium || work.dimensions;
        return (
          <article key={work.id} className={styles.cell}>
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
  );
}
