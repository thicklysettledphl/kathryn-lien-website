export interface CVEntry {
  year: string;
  description: string;
  location?: string;
}

export interface CVSection {
  label: string;
  entries: CVEntry[];
}

export interface CVData {
  name: string;
  location: string;
  email: string;
  website: string;
  sections: CVSection[];
}

const cv: CVData = {
  name: "Kathryn Lien",
  location: "Philadelphia, PA",
  email: "kathrynllien@gmail.com",
  website: "www.kathrynlien.com",
  sections: [
    {
      label: "Professional Experience",
      entries: [
        {
          year: "2021–",
          description:
            "Associate Director of Fine Arts and Design, University of Pennsylvania",
          location: "Philadelphia, PA",
        },
        {
          year: "2022–",
          description: "Board Chair, Board of Directors, The Arts League",
          location: "Philadelphia, PA",
        },
        {
          year: "2016–2018",
          description: "Instructor, Virginia Commonwealth University Sculpture",
          location: "Richmond, VA",
        },
        {
          year: "2015",
          description:
            "Visual Arts Program Coordinator, Vermont Studio Center",
          location: "Johnson, VT",
        },
      ],
    },
    {
      label: "Education",
      entries: [
        {
          year: "2018",
          description:
            "MFA, Sculpture + Extended Media — Virginia Commonwealth University",
          location: "Richmond, VA",
        },
        {
          year: "2012",
          description: "BFA, Sculpture — University of Washington",
          location: "Seattle, WA",
        },
      ],
    },
    {
      label: "Selected Exhibitions",
      entries: [
        {
          year: "2025",
          description:
            "from above, I am a golden apple bobbing in a five-gallon bucket., The Arts League",
          location: "Philadelphia, PA",
        },
        {
          year: "2025",
          description: "First, then, next, finally, Vox Populi",
          location: "Philadelphia, PA",
        },
        {
          year: "2023",
          description: "Ornaphorism, Flux Factory",
          location: "New York, NY",
        },
        {
          year: "2020",
          description: "Geografia Relativa, guadalajara901210",
          location: "Mexico City, MX",
        },
        {
          year: "2019",
          description: "Architectural Bodies, Office Space 2",
          location: "New Brunswick, NJ",
        },
        {
          year: "2018",
          description:
            "By Toast I Mean Sugar, Southern Exposure Project Space",
          location: "St. Augustine, FL",
        },
        {
          year: "2018",
          description: "Always Already, The Anderson, Virginia Commonwealth University",
          location: "Richmond, VA",
        },
        {
          year: "2018",
          description: "of the crickets, The Anderson, Virginia Commonwealth University",
          location: "Richmond, VA",
        },
        {
          year: "2017",
          description:
            "In Consequence of Everything, Also, Random Access Space, Syracuse University",
          location: "Syracuse, NY",
        },
        {
          year: "2017",
          description: "Room Before, Visual Arts Center, University of Texas Austin",
          location: "Austin, TX",
        },
        {
          year: "2016",
          description: "Eight Hour Projects, The Galleries at Allegheny College",
          location: "Meadville, PA",
        },
        {
          year: "2015",
          description: "The Woodmere Annual, The Woodmere Art Museum",
          location: "Philadelphia, PA",
        },
        {
          year: "2015",
          description:
            "This is Where We Live Now, Gallery II, The Vermont Studio Center",
          location: "Johnson, VT",
        },
        {
          year: "2014",
          description: "White Girls, Blindfold Gallery",
          location: "Seattle, WA",
        },
        {
          year: "2014",
          description: "Longing, Gray Gallery",
          location: "Philadelphia, PA",
        },
        {
          year: "2012",
          description: "Of Place and Time, UW 3D4M Gallery",
          location: "Seattle, WA",
        },
        {
          year: "2012",
          description: "American Royalty, The Pine Box",
          location: "Seattle, WA",
        },
      ],
    },
    {
      label: "Publications",
      entries: [
        {
          year: "2024",
          description: '"dead one" Risograph Book',
        },
        {
          year: "2023",
          description: '"LACK" Risograph Book',
        },
        {
          year: "2019",
          description: '"Of the Crickets." VCU Scholar\'s Compass',
        },
        {
          year: "2017",
          description:
            '"Soap Egg Grapes." Haunt Journal of Art, vol. 4, pp. 22–25',
        },
      ],
    },
    {
      label: "Performances & Events",
      entries: [
        {
          year: "2020",
          description:
            "Fogs | Foams | Jellies with augustine zegers, Rillette on Toast (collaborative private Supper Club)",
          location: "Philadelphia, PA",
        },
        {
          year: "2019",
          description: "One, Rillette on Toast (collaborative private Supper Club)",
          location: "Philadelphia, PA",
        },
        {
          year: "2018",
          description:
            "Of the Crickets with Joy McMillian, Natasha Kuring, Keri Schnaumann, and Michelle Koppl (live choreographed performance)",
          location: "Richmond, VA",
        },
      ],
    },
    {
      label: "Residencies & Workshops",
      entries: [
        {
          year: "2026",
          description: "Penland Winter Residency, Penland School of Crafts",
          location: "Bakersville, NC",
        },
        {
          year: "2025",
          description:
            '"Get Your Flow On" Workshop, Penland School of Crafts',
          location: "Bakersville, NC",
        },
        {
          year: "2024",
          description:
            '"Reimagining Historical Furniture" Workshop, Haystack Mountain School of Crafts',
          location: "Deer Isle, ME",
        },
        {
          year: "2023",
          description:
            '"Coopered by Design" Workshop, Haystack Mountain School of Crafts',
          location: "Deer Isle, ME",
        },
        {
          year: "2022",
          description:
            '"Working in a Vacuum" Workshop, Penland School of Crafts',
          location: "Bakersville, NC",
        },
        {
          year: "2017",
          description: "Pollock-Krasner Fellow, Vermont Studio Center",
          location: "Johnson, VT",
        },
        {
          year: "2016",
          description: "The Make Your Own Loneliness Project",
          location: "Murrell's Inlet, SC",
        },
        {
          year: "2014",
          description: "Visual Artist in Residence, Vermont Studio Center",
          location: "Johnson, VT",
        },
        {
          year: "2014",
          description: '"Molds and Mayhem" Workshop, Pilchuck Glass School',
          location: "Stanwood, WA",
        },
      ],
    },
  ],
};

export default cv;
