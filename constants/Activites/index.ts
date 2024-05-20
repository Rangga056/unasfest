// Contact Us
import kdbiContact from "@/public/assets/images/home/contactUs/kdbiContact.png";
import edcContact from "@/public/assets/images/home/contactUs/edcContact.png";
import scpContact from "@/public/assets/images/home/contactUs/spcContact.png";
import smcContact from "@/public/assets/images/home/contactUs/smcContact.png";
import semnasContact from "@/public/assets/images/home/contactUs/semnasContact.png"

// judges photos
import anies from "@/public/assets/images/competition/anies.png";

//cover Image
import kdbiCover from "@/public/assets/images/competition/kdbiCover.png";
import edcCover from "@/public/assets/images/competition/edcCover.png";
import scpCover from "@/public/assets/images/competition/scpCover.png";
import smcCover from "@/public/assets/images/competition/smcCover.png";
//import icon buat infiniteSlidingIcon
import kdbiSlidingIcon from "@/public/assets/icons/megaphone.png";
import edcSlidingIcon from "@/public/assets/icons/smile-face.png";
import spcSlidingIcon from "@/public/assets/icons/book.png";
import smcSlidingIcon from "@/public/assets/icons/movie-clapper.png";
// import internationalSeminarIcon from "@/public/assets/icons/";

//timeline
import {
  timelinesEDC,
  timelinesKDBI,
  timelinesSPC,
  timelinesSMC,
  timelinesSemnas
} from "@/constants/Timeline";
export const Activities = [
  {
    path: "kdbi",
    title: "Kompetisi Debat Bahasa Indonesia",
    coverImage: kdbiCover,
    contact: kdbiContact,
    color: "#2A9763",
    description:
      "The English Debate Competition (EDC) is an English language debate competition where participants debate arguments and thoughts related to contemporary issues from various aspects, namely social, political, cultural, techindexlogical, ecoindexmic, energy, legal, health and so on. Therefore, the English Debate Competition (EDC) aims to improve participants' ability to speak in public, develop analytical and critical thinking skills, and strengthen their ability to argue using effective and persuasive language. The English Debate Competition (EDC) will be held with the theme 'Implementation of Techindexlogy in Blue Ecoindex...",
    timeline: timelinesKDBI,
    guideBook: "https://ufest.unas.ac.id/",
    infiniteSlidingText: "INDONESIAN DEBATE",
    infiniteSlidingIcon: kdbiSlidingIcon,
    requirementsTitle: "Indonesian Debate Competition requirements",
    requirements: [
      {
        index: 1,
        detail:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        index: 2,
        detail:
          "Active students of Bachelor and Diploma programs registered in PD-DIKTI  from various study programs and public and private universities..",
      },
      {
        index: 3,
        detail:
          "Debate participants are students who have never had a Bachelor (S1) / Applied Bachelor (D4) degree.",
      },
      {
        index: 4,
        detail:
          "Students follow the rules that have been determined and listed in the KDBI Unas Fest 2023 activity guidebook.",
      },
      {
        index: 5,
        detail:
          "Active students of Bachelor and Diploma programs registered in PD-DIKTI  from various study programs and public and private universities..",
      },
    ],
    judgesData: [
      {
        index: 1,
        name: "Judge kdbi 1",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.asdfasdf",
          "Mollit quis sint ad pariatur a sit amet, consectetur adipiscua.",
          "Mollit quis sint ad pariatur aliqasdfasdfuip anim amet.",
          "Mollit quis sint ad pariatur aliquip asdfasdfsit amet, consectetur adipiiqua.",
        ],
      },
      {
        index: 2,
        name: "Judge kdbi 2",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
      {
        index: 3,
        name: "Judge kdbi 3",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
      {
        index: 4,
        name: "Judge kdbi 3",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
    ],
    faqs: [
      {
        question: "What Is Unas Fest?",
        answer:
          "National University Festival 2023 (UNAS FEST 2023) is one of the annual activities held to enliven and celebrate the 74th Anniversary of National University. List of competitions",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
    ],
  },

  {
    path: "edc",
    title: "English Debate Competition",
    coverImage: edcCover,
    contact: edcContact,
    color: "#004AAD",
    description:
      "The English Debate Competition (EDC) is an English language debate competition where participants debate arguments and thoughts related to contemporary issues from various aspects, namely social, political, cultural, techindexlogical, ecoindexmic, energy, legal, health and so on. Therefore, the English Debate Competition (EDC) aims to improve participants' ability to speak in public, develop analytical and critical thinking skills, and strengthen their ability to argue using effective and persuasive language. The English Debate Competition (EDC) will be held with the theme 'Implementation of Techindexlogy in Blue Ecoindex...",
    timeline: timelinesEDC,
    guideBook: "https://ufest.unas.ac.id/",
    infiniteSlidingText: "ENGLISH DEBATE",
    infiniteSlidingIcon: edcSlidingIcon,
    requirementsTitle: "English Debate Competition requirements",
    requirements: [
      {
        index: 1,
        detail:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        index: 2,
        detail:
          "Active students of Bachelor and Diploma programs registered in PD-DIKTI  from various study programs and public and private universities..",
      },
      {
        index: 3,
        detail:
          "Debate participants are students who have never had a Bachelor (S1) / Applied Bachelor (D4) degree.",
      },
      {
        index: 4,
        detail:
          "Students follow the rules that have been determined and listed in the KDBI Unas Fest 2023 activity guidebook.",
      },
      {
        index: 5,
        detail:
          "Active students of Bachelor and Diploma programs registered in PD-DIKTI  from various study programs and public and private universities..",
      },
    ],
    judgesData: [
      {
        index: 1,
        name: "Judge kdbi 1",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
      {
        index: 2,
        name: "Judge kdbi 2",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
      {
        index: 3,
        name: "Judge kdbi 3",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
    ],
    faqs: [
      {
        question: "What Is Unas Fest?",
        answer:
          "National University Festival 2023 (UNAS FEST 2023) is one of the annual activities held to enliven and celebrate the 74th Anniversary of National University. List of competitions",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
    ],
  },

  {
    path: "spc",
    title: "Scientific Paper Competition",
    coverImage: scpCover,
    contact: scpContact,
    color: "#E27817",
    description:
      "The English Debate Competition (EDC) is an English language debate competition where participants debate arguments and thoughts related to contemporary issues from various aspects, namely social, political, cultural, techindexlogical, ecoindexmic, energy, legal, health and so on. Therefore, the English Debate Competition (EDC) aims to improve participants' ability to speak in public, develop analytical and critical thinking skills, and strengthen their ability to argue using effective and persuasive language. The English Debate Competition (EDC) will be held with the theme 'Implementation of Techindexlogy in Blue Ecoindex...",
    timeline: timelinesSPC,
    guideBook: "https://ufest.unas.ac.id/",
    infiniteSlidingText: "SCINTIFIC PAPER",
    infiniteSlidingIcon: spcSlidingIcon,
    requirementsTitle: "Scientific Paper Competition requirements",

    requirements: [
      {
        index: 1,
        detail:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        index: 2,
        detail:
          "Active students of Bachelor and Diploma programs registered in PD-DIKTI  from various study programs and public and private universities..",
      },
      {
        index: 3,
        detail:
          "Debate participants are students who have never had a Bachelor (S1) / Applied Bachelor (D4) degree.",
      },
      {
        index: 4,
        detail:
          "Students follow the rules that have been determined and listed in the KDBI Unas Fest 2023 activity guidebook.",
      },
      {
        index: 5,
        detail:
          "Active students of Bachelor and Diploma programs registered in PD-DIKTI  from various study programs and public and private universities..",
      },
    ],
    judgesData: [
      {
        index: 1,
        name: "Judge kdbi 1",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
      {
        index: 2,
        name: "Judge kdbi 2",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
      {
        index: 3,
        name: "Judge kdbi 3",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
    ],
    faqs: [
      {
        question: "What Is Unas Fest?",
        answer:
          "National University Festival 2023 (UNAS FEST 2023) is one of the annual activities held to enliven and celebrate the 74th Anniversary of National University. List of competitions",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
    ],
  },

  {
    path: "smc",
    title: "Short Movie Competition",
    coverImage: smcCover,
    contact: smcContact,
    color: "#C02424",
    description:
      "The English Debate Competition (EDC) is an English language debate competition where participants debate arguments and thoughts related to contemporary issues from various aspects, namely social, political, cultural, techindexlogical, ecoindexmic, energy, legal, health and so on. Therefore, the English Debate Competition (EDC) aims to improve participants' ability to speak in public, develop analytical and critical thinking skills, and strengthen their ability to argue using effective and persuasive language. The English Debate Competition (EDC) will be held with the theme 'Implementation of Techindexlogy in Blue Ecoindex...",
    timeline: timelinesSMC,
    guideBook: "https://ufest.unas.ac.id/",
    infiniteSlidingText: "SHORT MOVIE",
    infiniteSlidingIcon: smcSlidingIcon,
    requirementsTitle: "Short Movie Competition requirements",

    requirements: [
      {
        index: 1,
        detail:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        index: 2,
        detail:
          "Active students of Bachelor and Diploma programs registered in PD-DIKTI  from various study programs and public and private universities..",
      },
      {
        index: 3,
        detail:
          "Debate participants are students who have never had a Bachelor (S1) / Applied Bachelor (D4) degree.",
      },
      {
        index: 4,
        detail:
          "Students follow the rules that have been determined and listed in the KDBI Unas Fest 2023 activity guidebook.",
      },
      {
        index: 5,
        detail:
          "Active students of Bachelor and Diploma programs registered in PD-DIKTI  from various study programs and public and private universities..",
      },
    ],
    judgesData: [
      {
        index: 1,
        name: "Judge kdbi 1",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
      {
        index: 2,
        name: "Judge kdbi 2",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
      {
        index: 3,
        name: "Judge kdbi 3",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
    ],
    faqs: [
      {
        question: "What Is Unas Fest?",
        answer:
          "National University Festival 2023 (UNAS FEST 2023) is one of the annual activities held to enliven and celebrate the 74th Anniversary of National University. List of competitions",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
    ],
  },

  {
    path: "semnas",
    title: "international seminar",
    coverImage: smcCover,
    contact: semnasContact,
    color: "#853EB6",
    description:
      "The English Debate Competition (EDC) is an English language debate competition where participants debate arguments and thoughts related to contemporary issues from various aspects, namely social, political, cultural, techindexlogical, ecoindexmic, energy, legal, health and so on. Therefore, the English Debate Competition (EDC) aims to improve participants' ability to speak in public, develop analytical and critical thinking skills, and strengthen their ability to argue using effective and persuasive language. The English Debate Competition (EDC) will be held with the theme 'Implementation of Techindexlogy in Blue Ecoindex...",
    timeline: timelinesSemnas,
    guideBook: "https://ufest.unas.ac.id/",
    infiniteSlidingText: "SHORT MOVIE",
    infiniteSlidingIcon: smcSlidingIcon,
    requirementsTitle: "Short Movie Competition requirements",

    requirements: [
      {
        index: 1,
        detail:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        index: 2,
        detail:
          "Active students of Bachelor and Diploma programs registered in PD-DIKTI  from various study programs and public and private universities..",
      },
      {
        index: 3,
        detail:
          "Debate participants are students who have never had a Bachelor (S1) / Applied Bachelor (D4) degree.",
      },
      {
        index: 4,
        detail:
          "Students follow the rules that have been determined and listed in the KDBI Unas Fest 2023 activity guidebook.",
      },
      {
        index: 5,
        detail:
          "Active students of Bachelor and Diploma programs registered in PD-DIKTI  from various study programs and public and private universities..",
      },
    ],
    judgesData: [
      {
        index: 1,
        name: "Judge kdbi 1",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
      {
        index: 2,
        name: "Judge kdbi 2",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
      {
        index: 3,
        name: "Judge kdbi 3",
        image: anies,
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
    ],
    faqs: [
      {
        question: "What Is Unas Fest?",
        answer:
          "National University Festival 2023 (UNAS FEST 2023) is one of the annual activities held to enliven and celebrate the 74th Anniversary of National University. List of competitions",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
      {
        question: "When Does Unas Fest 2024 Start?",
        answer:
          "Students who register themselves on the registration link that has been listed on the UNAS FEST 2023 website.",
      },
    ],
  },

];

