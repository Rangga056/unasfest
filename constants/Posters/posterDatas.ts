import english from "@/public/assets/images/home/posters/english2.png";
import indo from "@/public/assets/images/home/posters/indo2.png";
import movie from "@/public/assets/images/home/posters/movie2.png";
import SCP from "@/public/assets/images/home/posters/SCP2.png";

export const postersData = [
  {
    index: 1,
    image: english.src,
    name: "English Poster",
    path: "/activities/edc",
  },
  {
    index: 2,
    image: indo.src,
    name: "Indonesia Poster",
    path: "/activities/kdbi",
  },
  {
    index: 3,
    image: movie.src,
    name: "Movie Poster",
    path: "/activities/smc",
  },
  {
    index: 4,
    image: SCP.src,
    name: "SCP Poster",
    path: "/activities/spc",
  },
];
