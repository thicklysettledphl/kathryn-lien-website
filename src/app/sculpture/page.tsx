import WorkGrid from "@/components/WorkGrid";
import styles from "../gallery.module.css";

export const metadata = {
  title: "Sculpture — Kathryn Lien",
};

export default function SculpturePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="type-section-header">Sculpture</h1>
        </div>
      </header>
      <div className="container">
        <WorkGrid category="sculpture" />
      </div>
    </div>
  );
}
