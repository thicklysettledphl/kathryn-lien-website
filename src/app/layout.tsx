import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kathryn Lien — Sculptor",
  description:
    "Kathryn Lien is a sculptor based in Philadelphia, PA. Her work spans bronze, steel, and cast materials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <footer
          style={{
            borderTop: "1px solid var(--color-border)",
            padding: "1.5rem var(--page-padding)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            letterSpacing: "0.05em",
          }}
        >
          <span>© {new Date().getFullYear()} Kathryn Lien</span>
          <a
            href="mailto:kathrynllien@gmail.com"
            style={{ color: "var(--color-gray-mid)" }}
          >
            kathrynllien@gmail.com
          </a>
        </footer>
      </body>
    </html>
  );
}
