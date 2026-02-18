import WorkGrid from "@/components/WorkGrid";
import styles from "../gallery.module.css";

export const metadata = {
  title: "Installation — Kathryn Lien",
};

export default function InstallationPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="type-section-header">Installation</h1>
        </div>
      </header>
      <div className="container">
        <WorkGrid category="installation" />
      </div>
    </div>
  );
}
