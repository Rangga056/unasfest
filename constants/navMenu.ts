export const navMenu = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/activities",
    title: "activities",
    child: [
      {
        name: "Kompetisi Debat Bahasa Indonesia (KDBI)",
        href: `/activities/kdbi`,
      },
      {
        name: "English Debate Competition (EDC)",
        href: "/activities/edc",
      },
      {
        name: "Science Paper Competition (SPC)",
        href: "/activities/spc",
      },
      {
        name: "Short Movie Competition (SMC)",
        href: "/activities/smc",
      },
    ],
  },
  {
    path: "/gallery",
    title: "Gallery",
  },
  {
    path: "/sponsorship",
    title: "Sponsorship",
  },
  {
    path: "/about-us",
    title: "About Us",
  },
];
