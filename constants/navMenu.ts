export const navMenu = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/Competition",
      title: "Competition",
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
          name: "Lomba Karya Tulis Ilmiah",
          href: "/Competition/SPC",
        },
        {
          name: "Seminar Nasional",
          href: "/Competition/SEMNAS",
        },
        {
          name: "Short Movie",
          href: "/Competition/ShortMovie",
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
      path: "/tentang",
      title: "Tentang",
    },
  ];
  