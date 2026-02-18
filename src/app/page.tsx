import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image
        src="/images/hero.jpg"
        alt="Kathryn Lien"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}
