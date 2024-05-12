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
          href: `/Activities/kdbi`,
        },
        {
          name: "English Debate Competition (EDC)",
          href: "/Activities/edc",
        },
        {
          name: "Science Paper Competition (SPC)",
          href: "/Activities/spc",
        },
        {
          name: "Short Movie Competition (SMC)",
          href: "/Activities/smc",
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

