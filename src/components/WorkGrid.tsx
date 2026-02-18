import Image from "next/image";
import works, { WorkCategory } from "@/data/works";
import styles from "./WorkGrid.module.css";

export default function WorkGrid({ category }: { category: WorkCategory }) {
  const filtered = works.filter((w) => w.category === category);

  return (
    <section className={styles.grid}>
      {filtered.map((work) => (
        <article key={work.id} className={styles.cell}>
          <div className={styles.imageWrap}>
            <Image
              src={work.image}
              alt={`${work.title}, ${work.year}`}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={styles.image}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.caption}>
            <p className={styles.title}>{work.title}</p>
            <p className="type-meta">
              {work.year} — {work.medium}
            </p>
            <p className="type-meta">{work.dimensions}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
