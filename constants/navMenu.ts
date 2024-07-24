export const navMenu = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/activities",
    title: "Activities",
    child: [
      {
        name: "Kompetisi Debat Bahasa Indonesia",
        href: `/activities/kdbi`,
      },
      {
        name: "English Debate Competition",
        href: "/activities/edc",
      },
      {
        name: "Scientific Paper Competition",
        href: "/activities/spc",
      },
      {
        name: "Short Movie Competition",
        href: "/activities/smc",
      },
      {
        name: "International Seminar",
        href: "/activities/international-seminar",
      },
    ],
  },
  {
    path: "/gallery",
    title: "Gallery",
  },
  {
    path: "/partnership",
    title: "Partnership",
  },
  {
    path: "/about-us",
    title: "About Us",
  },
];
