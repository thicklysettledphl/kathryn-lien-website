export type WorkCategory = "installation" | "sculpture";

export interface Work {
  id: string;
  title: string;
  image: string;
  category: WorkCategory;
  year?: number;
  medium?: string;
  dimensions?: string;
}

const works: Work[] = [
  // ─── Installation ───────────────────────────────────────
  {
    id: "inst-01",
    title: "",
    image: "/images/work/2025-w-2.jpg",
    category: "installation",
  },
  {
    id: "inst-02",
    title: "",
    image: "/images/work/ceiling.jpg",
    category: "installation",
  },
  {
    id: "inst-03",
    title: "",
    image: "/images/work/2025-w-8.jpg",
    category: "installation",
  },
  {
    id: "inst-04",
    title: "",
    image: "/images/work/2025-w-21.jpg",
    category: "installation",
  },
  {
    id: "inst-05",
    title: "",
    image: "/images/work/2025-w-27.jpg",
    category: "installation",
  },
  {
    id: "inst-06",
    title: "",
    image: "/images/work/2025-w-28.jpg",
    category: "installation",
  },
  {
    id: "inst-07",
    title: "",
    image: "/images/work/2025-w-29.jpg",
    category: "installation",
  },
  {
    id: "inst-08",
    title: "",
    image: "/images/work/img-5074.jpg",
    category: "installation",
  },
  {
    id: "inst-09",
    title: "",
    image: "/images/work/img-5107.jpg",
    category: "installation",
  },
  {
    id: "inst-10",
    title: "",
    image: "/images/work/img-9895.jpg",
    category: "installation",
  },
  {
    id: "inst-11",
    title: "",
    image: "/images/work/kl-29.jpg",
    category: "installation",
  },
  {
    id: "inst-12",
    title: "",
    image: "/images/work/kl-36.jpg",
    category: "installation",
  },
  {
    id: "inst-13",
    title: "",
    image: "/images/work/kl-41.jpg",
    category: "installation",
  },
  {
    id: "inst-14",
    title: "",
    image: "/images/work/lawrence-01.jpg",
    category: "installation",
  },
  {
    id: "inst-15",
    title: "",
    image: "/images/work/lawrence-02.jpg",
    category: "installation",
  },
  {
    id: "inst-16",
    title: "",
    image: "/images/work/lawrence-03.jpg",
    category: "installation",
  },
  {
    id: "inst-17",
    title: "",
    image: "/images/work/lawrence-04.jpg",
    category: "installation",
  },
  {
    id: "inst-18",
    title: "",
    image: "/images/work/lawrence-05.jpg",
    category: "installation",
  },

  // ─── Sculpture ──────────────────────────────────────────
  {
    id: "sculpt-01",
    title: "",
    image: "/images/work/dsc9260.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-02",
    title: "",
    image: "/images/work/dsc9263.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-03",
    title: "",
    image: "/images/work/06-lien.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-04",
    title: "",
    image: "/images/work/2025-w-17.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-05",
    title: "",
    image: "/images/work/2025-w-35.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-06",
    title: "",
    image: "/images/work/2025-w-36.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-07",
    title: "",
    image: "/images/work/2025-w-37.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-08",
    title: "",
    image: "/images/work/2025-w-38.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-09",
    title: "",
    image: "/images/work/collection-1.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-10",
    title: "",
    image: "/images/work/collection-2.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-11",
    title: "",
    image: "/images/work/kl-18.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-12",
    title: "",
    image: "/images/work/kl-25.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-13",
    title: "",
    image: "/images/work/kl-251.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-14",
    title: "",
    image: "/images/work/kl-39.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-15",
    title: "",
    image: "/images/work/kl-45.jpg",
    category: "sculpture",
  },
];

export default works;
