export const navMenu = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/Activities",
      title: "Activities",
      child: [
        {
          name: "Kompetisi Debat Bahasa Indonesia (KDBI)",
          href: `/Competition/KDBI`,
        },
        {
          name: "English Debate Competition (EDC)",
          href: "/Competition/EDC",
        },
        {
          name: "Science Paper Competition (SPC)",
          href: "/Competition/SPC",
        },
        {
          name: "Seminar Nasional",
          href: "/Competition/SEMNAS",
        },
        {
          name: "Short Movie",
          href: "/Competition/SMC",
        },
      ],
    },
    {
      path: "/Gallery",
      title: "Gallery",
    },
    {
      path: "/sponsorship",
      title: "Sponsorship",
    },
    {
      path: "/About",
      title: "About",
    },
  ];
  