export interface Work {
  id: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  image: string;
}

const works: Work[] = [
  {
    id: "work-01",
    title: "Untitled Form I",
    year: 2024,
    medium: "Bronze",
    dimensions: "18 × 12 × 9 in",
    image: "/images/work/work-01.jpg",
  },
  {
    id: "work-02",
    title: "Weight and Measure",
    year: 2024,
    medium: "Cast iron, steel",
    dimensions: "36 × 24 × 18 in",
    image: "/images/work/work-02.jpg",
  },
  {
    id: "work-03",
    title: "Threshold",
    year: 2023,
    medium: "Marble, bronze",
    dimensions: "48 × 16 × 16 in",
    image: "/images/work/work-03.jpg",
  },
  {
    id: "work-04",
    title: "Study for a Monument",
    year: 2023,
    medium: "Bronze, patina",
    dimensions: "24 × 14 × 10 in",
    image: "/images/work/work-04.jpg",
  },
  {
    id: "work-05",
    title: "Accumulation (Series)",
    year: 2022,
    medium: "Cast aluminum",
    dimensions: "Variable dimensions",
    image: "/images/work/work-05.jpg",
  },
  {
    id: "work-06",
    title: "Cartography of the Body",
    year: 2022,
    medium: "Steel, wax, pigment",
    dimensions: "60 × 40 × 30 in",
    image: "/images/work/work-06.jpg",
  },
];

export default works;
