import WorkGrid from "@/components/WorkGrid";
import styles from "../gallery.module.css";

export const metadata = {
  title: "Work — Kathryn Lien",
};

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <WorkGrid />
      </div>
    </div>
  );
}
