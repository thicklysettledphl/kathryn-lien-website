export type WorkCategory = "installation" | "sculpture";

export interface Work {
  id: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  image: string;
  category: WorkCategory;
}

const works: Work[] = [
  {
    id: "inst-01",
    title: "Placeholder Installation I",
    year: 2024,
    medium: "Mixed media",
    dimensions: "Variable dimensions",
    image: "/images/work/inst-01.jpg",
    category: "installation",
  },
  {
    id: "inst-02",
    title: "Placeholder Installation II",
    year: 2023,
    medium: "Mixed media",
    dimensions: "Variable dimensions",
    image: "/images/work/inst-02.jpg",
    category: "installation",
  },
  {
    id: "inst-03",
    title: "Placeholder Installation III",
    year: 2022,
    medium: "Mixed media",
    dimensions: "Variable dimensions",
    image: "/images/work/inst-03.jpg",
    category: "installation",
  },
  {
    id: "sculpt-01",
    title: "Placeholder Sculpture I",
    year: 2024,
    medium: "Bronze",
    dimensions: "18 × 12 × 9 in",
    image: "/images/work/sculpt-01.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-02",
    title: "Placeholder Sculpture II",
    year: 2023,
    medium: "Cast iron, steel",
    dimensions: "36 × 24 × 18 in",
    image: "/images/work/sculpt-02.jpg",
    category: "sculpture",
  },
  {
    id: "sculpt-03",
    title: "Placeholder Sculpture III",
    year: 2022,
    medium: "Marble, bronze",
    dimensions: "48 × 16 × 16 in",
    image: "/images/work/sculpt-03.jpg",
    category: "sculpture",
  },
];

export default works;
