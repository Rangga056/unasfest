// Contact Us
import kdbiContact from "@/public/assets/images/home/contactUs/kdbiContact.png";
import edcContact from "@/public/assets/images/home/contactUs/edcContact.png";
import scpContact from "@/public/assets/images/home/contactUs/spcContact.png";
import smcContact from "@/public/assets/images/home/contactUs/smcContact.png";
import semnasContact from "@/public/assets/images/home/contactUs/semnasContact.png";


// judges photos kdbi
import leonardus from "@/public/assets/images/competition/kdbi Leonardus Hans.jpg";
import purwo from "@/public/assets/images/competition/kdbi Purwo Besari.jpg";
import wahyu from "@/public/assets/images/competition/kdbi Prof. Dr. Wahyu Wibowo.png";

// judges photos edc
import fikri from "@/public/assets/images/competition/edc Adfikri Kevin Marvel.jpg";
import ahmad from "@/public/assets/images/competition/edc Ahmad Kushay.jpg";
import aditya from "@/public/assets/images/competition/edc Muhammad Aditya Muchtar.jpg";

// judges photos spc
import efriza from "@/public/assets/images/competition/spc Efriza, S.I.P., M.Si..jpg";
import fajar from "@/public/assets/images/competition/spc Fajar Harry Sampurno, MBA, Ph.D..jpg";

// judges photos smc
import jentoni from "@/public/assets/images/competition/sm jentoni.jpg";
import kusen from "@/public/assets/images/competition/sm kusen.jpg";
import Daniel from "@/public/assets/images/competition/smc Daniel Wisnu Wardhana.jpg";

// judges photos semnas
import adam from "@/public/assets/images/competition/semnas Adam Adiwinata.jpeg";
import eniyas from "@/public/assets/images/competition/semnas Eniya Listiani Dewi.jpeg";
import jason from "@/public/assets/images/competition/semnas Jason Amiri.jpeg";
import lizie from "@/public/assets/images/competition/semnas Lizie Daniella.jpeg";
import ovi from "@/public/assets/images/competition/semnas Ovi Lian Ding.jpeg";

//cover Image
import kdbiCover from "@/public/assets/images/competition/kdbiCover.jpg";
import edcCover from "@/public/assets/images/competition/edcCover.png";
import scpCover from "@/public/assets/images/competition/scpCover.png";
import smcCover from "@/public/assets/images/competition/smcCover.png";
import semnasCover from "@/public/assets/images/competition/semnasCover.png"
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
  timelinesSemnas,
} from "@/constants/Timeline";
import { Description } from "@radix-ui/react-dialog";
import exp from "constants";
export const Activities = [
  {
    path: "kdbi",
    title: "Kompetisi Debat Bahasa Indonesia",
    coverImage: kdbiCover,
    contact: kdbiContact,
    contactNumber: "https://wa.me/6288212435726",
    color: "#2A9763",
    description:
      "The English Debate Competition (EDC) is an English language debate competition where participants debate arguments and thoughts related to contemporary issues from various aspects, namely social, political, cultural, techindexlogical, ecoindexmic, energy, legal, health and so on. Therefore, the English Debate Competition (EDC) aims to improve participants' ability to speak in public, develop analytical and critical thinking skills, and strengthen their ability to argue using effective and persuasive language. The English Debate Competition (EDC) will be held with the theme 'Implementation of Techindexlogy in Blue Ecoindex...",
    timeline: timelinesKDBI,
    guideBook:
      "https://docs.google.com/document/d/1_KIlhlCgabnBLWvzCOBUlr344iLumPn9K3khqBNPSqU/edit?usp=drive_link",
    infiniteSlidingText: "INDONESIAN DEBATE",
    infiniteSlidingIcon: kdbiSlidingIcon,
    requirementsTitle: "Indonesian Debate Competition requirements",
    requirements: [
      {
        index: 1,
        detail:
          "Participants of the National Level UNAS FEST 2024 Competition are active students and registered in PDDikti (Pangkalan Data Pendidikan Tinggi).",
      },
      {
        index: 2,
        detail:
          "Participants registered on the official college website for International Universities from various study programs and State or Private Universities.",
      },
      {
        index: 3,
        detail:
          "Participants of the UNAS FEST 2024 National and International Competitions are required to comply with all the Rules of Procedure/Rules that exist in the UNAS FEST 2024 National and International Level activities.",
      },
      {
        index: 4,
        detail:
          "Participants of the UNAS FEST 2024 National and International Competitions are required to download and follow the regulations listed in the guidebook of each Competition.",
      },
      {
        index: 5,
        detail:
          "National and International Level UNAS FEST 2024 Competition Participants are required to attend the International Seminar.",
      },
      {
        index: 6,
        detail:
          "National and International participants of UNAS FEST 2024 participants who attend the Seminar location are not allowed to bring or use drugs/substances/sharp weapons/firearms at the Universitas Nasional.",
      },
      {
        index: 7,
        detail:
          "Participants of the UNAS FEST 2024 National and International Competitions who violate and do not comply with the Rules/Regulations in the UNAS FEST 2024 National and International Competitions, the committee has the right to disqualify participants.",
      },
      {
        index: 8,
        detail:
          "Matters that have not been regulated will be regulated later by the Universitas Nasional Student and Alumni Administration Bureau by the objective reality of UNAS FEST 2024 National and International Level activities.",
      },
    ],

    judgesData: [
      {
        index: 1,
        name: "Leonardus Hans Sebastian",
        image: leonardus,
        linkedin: "https://www.linkedin.com/in/leonardus-hans-sebastian/",
        lastEducation: "Student at Institut Teknologi Bandung",
        description:
          "Currently studying in Mining and Petroleum Engineering Faculty. Ambitious and fast learner. Have high-interest in event organizing and organitational works. Been in consultant/tech team for Pusat Prestasi Nasional (Puspresnas) by Kementrian Pendidikan dan Kebudayaan (Kemdikbud)",
        achievements: [
          "Champion of Top Challenge of Physics for Junior High School 2016",
          "2nd Runner Up of PINGFEST! IT Venture 2019",
          "Champion of Universitas Nasional Debating Championship 2022",
        ],
        experience: [
          {
            eTitle: "Freelancer - Tabulation Director",
            eTime: "June 2020 - Present",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail:
                "Serving as Tabulation Director in various Parliamentary Debating events. Including being in the Tab Team for Indonesian Government run events such as",
              dPoint: [
                "Universitas Nasional Debating Championship",
                "Kontes Debat Mahasiswa Indonesia",
                "Lomba Debat Bahasa Indonesia",
                "National Schools Debating Championship",
              ],
            },
          },
          {
            eTitle: "Student English Forum (SEF) ITB",
            eTime: "June 2022 - August 2023",
            eDesc: {
              dDetail: "President of the Student English Forum (SEF) ITB",
              dPoint: ["..."],
            },
          },
          {
            eTitle: "Student English Forum (SEF) ITB",
            eTime: "June 2022 - August 2023",
            eDesc: {
              dDetail:
                "Serving as Head of Training for Student English Forum ITB, a student organization that focus on competing in Parliamentary Debating Competition. I am responsible for:",
            },
            dPoint: [
              "Managing Training method for SEF's Active Member",
              "Creating Training related Event such as Summer Camp and Training Camp",
              "Managing Tournament Participation system by SEF's Members",
            ],
          },
          {
            eTitle: "SerMorpheus - Business Development Intern",
            eTime: "March 2022 - September 2022",
            eDesc: {
              dDetail: "...",
              dPoint: ["..."],
            },
          },
        ],
      },
      {
        index: 2,
        name: "Assc. Prof. Dr. Wahyu Wibowo",
        image: wahyu,
        linkedin: "",
        lastEducation: "Ph.D. in Philosophy at Gadjah Mada University",
        description:
          'PhD in Philosophy from Gadjah Mada University (UGM) Yogyakarta with a dissertation titled: "An Analytical Philosophy Study on Journalistic Language Expressions: Its Relevance for the Development of Press Ethics." Lecturer at Universitas Nasional, Jakarta, in the courses of Philosophy of Language, Philosophy of Science, Creative Writing, Writing Skills, and Journalism.',
        achievements: [
          "Recorded as an Indonesian literary figure of the 2000s generation",
          "Obtained Journalist Certification as a Senior Journalist from the Press Council (No. 092-WU/DP/V/2011, May 2011)",
        ],
        experience: [
          {
            eTitle: "Lecturer at Universitas Nasional",
            eTime: "1986 - Present",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail:
                "Lecturer at Universitas Nasional in the courses of Philosophy of Language, Philosophy of Science, Creative Writing, Writing Skills, and Journalism",
            },
          },
          {
            eTitle: "Dean of the Faculty of Literature at Universitas Nasional",
            eTime: "April 2019 - May 2013",
            place: "Jakarta, Indonesia",
          },
          {
            eTitle:
              "Member of the Evaluation Team for the Research Grant Program for Lecturers, Region III Higher Education Service Institutio",
            eTime: "2008 - Present",
            place: "Jakarta, Indonesia",
          },
          {
            eTitle:
              "Founder of the Betawi Study Center at Universitas Nasional",
            eTime: "2004",
            place: "Jakarta, Indonesia",
          },
          {
            eTitle:
              "Member of the Training Team for Scientific Article Writing for Lecturers throughout Indonesia",
            eTime: "2006 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Member of the Training Team for Scientific Article Writing for Lecturers throughout Indonesia, Directorate of Research and Community Service, Ministry of Research, Technology, and Higher Education of the Republic of Indonesia",
            },
          },
          {
            eTitle:
              "Member of the Evaluation Team (reviewer) for the Textbook Writing Grant Program for Lecturers",
            eTime: "2006 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Member of the Evaluation Team (reviewer) for the Textbook Writing Grant Program for Lecturers, Directorate of Research and Community Service, Ministry of Research, Technology, and Higher Education of the Republic of Indonesia",
            },
          },
          {
            eTitle:
              "Member of the Evaluation Team (reviewer) for the Book Incentive Program for Lecturers",
            eTime: "2006 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Member of the Evaluation Team (reviewer) for the Book Incentive Program for Lecturers, Directorate of Research and Community Service, Ministry of Research, Technology, and Higher Education of the Republic of Indonesia",
            },
          },
          {
            eTitle:
              "Deputy General Leader/Editor-in-Chief of Paron tabloid, Jakarta",
            eTime: "1993 - 2000",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Member of the Evaluation Team (reviewer) for the Book Incentive Program for Lecturers, Directorate of Research and Community Service, Ministry of Research, Technology, and Higher Education of the Republic of Indonesia",
            },
          },
        ],
      },
      {
        index: 3,
        name: "Purwo Besari",
        image: purwo,
        linkedin: "https://www.linkedin.com/in/purwobesari/?jobid=1234",
        lastEducation: "Educational Management at State University of Jakarta",
        description:
          "Purwo is passionate about education, with a keen interest in human development and the dynamics of social media content. His expertise in the learning and development sector is evidenced by his roles as a public speaker and tutor. Purwo is deeply invested in the realm of human development and aspires to simultaneously excel as a specialist in learning, training, and content creation.",
        achievements: [
          "Awardee of Bakti Nusa 9",
          "Participant in Asia University Summer Program",
          "1st Winner of Most Outstanding Student Selection in Faculty of Educationn",
          "1st Winner of National Education Debate Competition",
          "Speaker of Talkshow Hari Guru ke-73",
        ],
        experience: [
          {
            eTitle:
              "Learning Support Assistant - PT Bank Mandiri (Persero) Tbk.",
            eTime: "October 2022 - Present",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: [
                "Streamlining training program coordination by setting up and managing user accounts, courses, and schedules on the Learning Management System(LMS).",
                "Assisting trainers in delivering seamless courses by providing comprehensive support and meticulously preparing learning materials, resulting in an impressive 95% completion rate for all training programs initiated.",
                "Engaging with internal and external stakeholders, including third-party training providers, to ensure training needs are met.",
                "Addressing queries and concerns from staff regarding training opportunities and schedules. Achieved a 90% positive response rate from internal and external stakeholders regarding training coordination and support.",
              ],
            },
          },
          {
            eTitle: "English Tutor - Primagama",
            eTime: "April 2022 - September 2022",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: [
                "Collaborated with educators and subject-matter experts to design, refine, and update a comprehensive English curriculum tailored to basic and intermediate levels.",
                "Established evaluation criteria to measure curriculum effectiveness and learning outcomes for junior to high school student.",
              ],
            },
          },
          {
            eTitle: "Host Live Streamer - Matsuda Appareal",
            eTime: "March 2022 - June 2022",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: [
                "Executed daily live-stream in e-commerce apps (Shopee and TikTok) as well as on Instagram. Increased 50% of viewers on Shopee live in a month.",
                "Successfully created TikTok content with 57K views. (LINK: https://bit.ly/ Content- Matsuda).",
              ],
            },
          },
          {
            eTitle: "Government Relation Officer",
            eTime: "September 2021 - January 2022",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail: "...",

              dPoint: [
                "Cultivated and maintained relationships with government institutions, agencies, and other relevant stakeholders.",
                "Provided regular reports on government relations activities, outcomes, and future project.",
                "Organized English training for 200 tourism workers through a digital platform in NTB, Kalimantan Tengah, and Aceh in collaboration with BAKTI KOMINFO.",
                "Successfully achieved 80% satisfaction rate of Project Report by BAKTI KOMINFO.",
              ],
            },
          },
          {
            eTitle: "Subject Consultant of Indonesian",
            eTime: "January 2021 - September 2021",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail: "...",

              dPoint: [
                "Developed engaging, interactive, and effective learning materials, including lesson plans, modules, assessments, and supplemental resources.",
                "Created 5 lesson materials a week by gaining 10% learning objectives effectiveness.",
                "Delivered live teaching of Indonesian subjects to 7 to 12 grades including UTBK through AyoBlajar Apps.",
                "Achieved the most viewed video on AyoBlajar Apps from June to August, with 30 viewers every week.",
                "Honored as the most favorite tutor at AyoBlajar Content Award.",
              ],
            },
          },
          {
            eTitle: "Subject Consultant of Indonesian",
            eTime: "September 2020 - December 2020",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail: "...",

              dPoint: [
                "Delivered live teaching Indonesian subjects for junior and senior high school including UTBK through AyoBlajar Apps.",
                "Created Indonesian subject content on AyoBlajar social media such as TikTok and Instagram.",
              ],
            },
          },
          {
            eTitle: "English Tutor - LP3i LCC Rawamangun",
            eTime: "August 2020 - January 2021",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail: "...",

              dPoint: [
                "Responsible to teach English to 20 senior high school students both online and offline learning.",
                "Developed attractive learning media, supervised, and graded examinations, quizzes, and other assignments. Able to scale up student's understanding 50% better.",
                "Communicated necessary information regularly to students, colleagues, and parents regarding student progress and student needs.",
              ],
            },
          },
          {
            eTitle: "Learning Staff - PT TRIPUTRA AGRO PERSADA GROUP",
            eTime: "April 2020 - May 2020",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail: "...",

              dPoint: [
                "Provided mentor list and strategic partners and reviewed curriculum as well as syllabus for all training classes. Assigned for compiling 200 training databases in 2 weeks.",
                "Coordinated with other divisions to support training needs such as the payroll division on training budget and recruitment division on training need analysis (TNA).",
              ],
            },
          },
          {
            eTitle: "Pusat Pengembangan SDM Perhubungan Darat Kemenhub",
            eTime: "Auguts 2018 - November 2018",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail: "...",

              dPoint: [
                "Provided training administrative support and module to be evaluated in a monthly meeting. Selected as moderator or MC in a monthly meeting.",
                "Reviewed and edited training report before presented to management level. Compiled 150 training databases in 3 weeks.",
              ],
            },
          },
        ],
      },
    ],
    faqs: [
      {
        question:
          "How do I register for the Indonesian Language Debate Competition (KDBI)?",
        answer: [
          "Open your web browser and visit the CATURNAWA website (link)",
          'Scroll down the page until you find the "Indonesian Language Debate Competition" section',
          'Click the "Register Now" button',
          "Fill out the registration form and complete all the required information",
          "Review the entered data",
          "Then you can make the payment by clicking the payment button",
        ],
      },
      {
        question:
          "What is the registration fee for the Indonesian Language Debate Competition (KDBI)?",
        answer: [
          "Early Bird: Rp 300,000/Team (July 23-28, 2024)",
          "Phase 1: Rp 400,000/Team (July 29 - August 11, 2024)",
          "Phase 2: Rp 450,000/Team (August 12-23, 2024)",
        ],
      },
      {
        question:
          "When is the registration deadline for the Indonesian Language Debate Competition (KDBI)?",
        answer:
          "The registration deadline for the Indonesian Language Debate Competition (KDBI) is August 23, 2024",
      },
      {
        question: "When will the winners be announced?",
        answer:
          "The winners will be announced on October 17, 2024, after the final round sessions.",
      },
      {
        question: "Where can I see the winner announcement?",
        answer:
          "The winner announcement will be available on the website (link caturnawa).",
      },
    ],
  },

  {
    path: "edc",
    title: "English Debate Competition",
    coverImage: edcCover,
    contact: edcContact,
    contactNumber: "https://wa.me/6285716931400",
    color: "#004AAD",
    description:
      "The English Debate Competition (EDC) is an English language debate competition where participants debate arguments and thoughts related to contemporary issues from various aspects, namely social, political, cultural, techindexlogical, ecoindexmic, energy, legal, health and so on. Therefore, the English Debate Competition (EDC) aims to improve participants' ability to speak in public, develop analytical and critical thinking skills, and strengthen their ability to argue using effective and persuasive language. The English Debate Competition (EDC) will be held with the theme 'Implementation of Techindexlogy in Blue Ecoindex...",
    timeline: timelinesEDC,
    guideBook:
      "https://docs.google.com/document/d/1NNuG7aHoR2e0OaZkGOIGWG4fpxtbyE9hkt1Bvq2E5ns/edit?usp=drive_link",
    infiniteSlidingText: "ENGLISH DEBATE",
    infiniteSlidingIcon: edcSlidingIcon,
    requirementsTitle: "English Debate Competition requirements",
    requirements: [
      {
        index: 1,
        detail:
          "Participants of the National Level UNAS FEST 2024 Competition are active students and registered in PDDikti (Pangkalan Data Pendidikan Tinggi).",
      },
      {
        index: 2,
        detail:
          "Participants registered on the official college website for International Universities from various study programs and State or Private Universities.",
      },
      {
        index: 3,
        detail:
          "Participants of the UNAS FEST 2024 National and International Competitions are required to comply with all the Rules of Procedure/Rules that exist in the UNAS FEST 2024 National and International Level activities.",
      },
      {
        index: 4,
        detail:
          "Participants of the UNAS FEST 2024 National and International Competitions are required to download and follow the regulations listed in the guidebook of each Competition.",
      },
      {
        index: 5,
        detail:
          "National and International Level UNAS FEST 2024 Competition Participants are required to attend the International Seminar.",
      },
      {
        index: 6,
        detail:
          "National and International participants of UNAS FEST 2024 participants who attend the Seminar location are not allowed to bring or use drugs/substances/sharp weapons/firearms at the Universitas Nasional.",
      },
      {
        index: 7,
        detail:
          "Participants of the UNAS FEST 2024 National and International Competitions who violate and do not comply with the Rules/Regulations in the UNAS FEST 2024 National and International Competitions, the committee has the right to disqualify participants.",
      },
      {
        index: 8,
        detail:
          "Matters that have not been regulated will be regulated later by the Universitas Nasional Student and Alumni Administration Bureau by the objective reality of UNAS FEST 2024 National and International Level activities.",
      },
    ],

    judgesData: [
      {
        index: 1,
        name: "Adfikri Kevin Marvel",
        image: fikri,
        linkedin: "https://www.linkedin.com/in/marvelkevin/?jobid=1234",
        lastEducation:
          "Bachelor of Arts - BA, International Relations and Affairs",
        description:
          "Working at the Ministry of Foreign Affairs of the Republic of Indonesia since February 2019, previously a competitive parliamentary debater from Universitas Indonesia who has won national and international tournaments, represented Indonesia in multiple international competitions, including a full-sponsorship from the Indonesian government to the World University Debating Championship 2019 in Cape Town, competing against more than 250 teams from elite universities worldwide, advancing to the elimination rounds in the English as a Second Language (ESL) category, and securing the title of World's 6th Best EFL speaker in the same tournament. Interested in vast arrays of issues, such as: International Relations, Philosophy, US Politics, UK Politics, BRI, Economics, social issues, etc.",
        achievements: [
          "Grandfinalist and 2nd Overall Best Speaker of Universitas Nasional Debating Championship",
          "Champion and 4th Best Speaker of ALSA UI E-Comp Debate Competition",
          "ESL Quarterfinalist and 3rd Best EFL Speaker of Australasian Intervarsity Debating Championship 2018",
          "Semifinalist of World Universities Debating Championship 2018 in EFL Category",
          "Quarterfinalist, 6th Best Speaker, and Best Reply Speaker of Indonesia Varsity English Debate",
        ],
        experience: [
          {
            eTitle:
              "Diplomat - Ministry of Foreign Affairs of the Republic of Indonesia",
            eTime: "November 2019 - Present",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail:
                "Currently working at the Directorate of ASEAN External Cooperation, Directorate General of ASEAN Cooperation with the diplomatic rank of Third Secretary. Assigned to handle issues between ASEAN and Dialogue Partners, specifically East Asia countries. Managed various issues from negotiating documents, statements by the Foreign Minister and President, to the convening of the ASEAN-Indo-Pacific Forum 2023, a flagship event under Indonesia's ASEAN Chairmanship.",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Diplomat in Training - Ministry of Foreign Affairs of the Republic of Indonesia",
            eTime: "February 2019 - November 2019",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail:
                "Undergoing diplomatic school (Sekdilu XLI) as a part of the recruitment process. During this period, I interned for a month in the Directorate for Diplomatic Facilities, taking care of requests from Foreign Missions and coordinating them with relevant stakeholders.",
              dPoint: [
                "Managed various issues from negotiating documents, statements by the Foreign Minister and President, to the convening of the ASEAN-Indo-Pacific Forum 2023, a flagship event under Indonesia's ASEAN Chairmanship.",
              ],
            },
          },
          {
            eTitle: "Ministry of Education and Culture Republic of Indonesia",
            eTime: "September 2020 - October 2020",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail:
                "Chosen to adjudicate the two biggest national competitions for varsity and high school levels respectively. Four teams out of over 200 participating in NUDC would be selected via NUDC to represent Indonesia in WUDC (World Universities Debating Championship) 2021 in Seoul, and the top 15 speakers of NSDC would compete for spots in Team Indonesia for WSDC (World Schools Debating Championship).",
              dPoint: [
                "Managed various issues from negotiating documents, statements by the Foreign Minister and President, to the convening of the ASEAN-Indo-Pacific Forum 2023, a flagship event under Indonesia's ASEAN Chairmanship.",
              ],
            },
          },
          {
            eTitle:
              "Coach for Indonesia's Official Delegation for World Universities Debating Championship 2020 Bangkok",
            eTime: "October 2019 - October 2019",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail:
                "As an alumna of Indonesia's official delegation for WUDC 2019 in Cape Town selected through NUDC (National Universities Debating Championship), I was requested to coach the next year's official delegation for 4 sessions in October 2019.",
            },
          },
          {
            eTitle:
              "Vice President/Head of Training and Development - EDS UI (English Debating Society Universitas Indonesia)",
            eTime: "December 2016 - December 2017",
            place: "West Java Province, Indonesia",
            eDesc: {
              dPoint: [
                "Managed learning resources for English Debating Society Universitas Indonesia",
                "Communicated with campus officials about delegation proposals",
                "Handled schedules for regular practices",
                "Held internal competitions to select delegations",
                "Chose coaches for various delegations",
                "Communicated with institutions holding various competitions regarding registration, payment, etc.",
              ],
            },
          },
          {
            eTitle:
              "Director of UNSC IMUN - UI MUN Club (Universitas Indonesia Model United Nations Club)",
            eTime: "November 2016 - November 2017",
            place: "West Java Province, Indonesia",
            eDesc: {
              dPoint: [
                "In charge of choosing topics for the United Nations Security Council",
                "Assessed delegates' performance during the council",
                "Communicated with the substance team of Indonesia MUN",
              ],
            },
          },
          {
            eTitle:
              "Assistant Director of UNICEF IMUN - UI MUN Club (Universitas Indonesia Model United Nations Club)",
            eTime: "November 2015 - November 2016",
            place: "West Java Province, Indonesia",
            eDesc: {
              dPoint: [
                "In charge of choosing the topic to be discussed and making the study guide for the UNICEF council",
                "Assessed delegates' performance",
                "Communicated with the substance team",
              ],
            },
          },
          {
            eTitle: "Official Representative of Universitas Indonesia",
            eTime: "November 2015 - July 2016",
            place: "Kuala Lumpur, Malaysia",
            eDesc: {
              dPoint: [
                "In charge of choosing the topic to be discussed and making the study guide for the UNICEF council",
                "Assessed delegates' performance",
                "Communicated with the substance team",
              ],
            },
          },
        ],
      },
      {
        index: 2,
        name: "Ahmad Kushay",
        linkedin: "https://www.linkedin.com/in/ahmad-kushay-9a57a8104/?jobid=1234",
        image: ahmad,
        lastEducation:
          "Bachelor's degree, Chemistry - Institut Teknologi Bandung (ITB)",
        description:
          "I am interested in research, teaching, public speaking, and critical thinking, which mainly manifests in my active participation in parliamentary debating, joining various competitions, teaching at numerous institutions, and initiating efforts to proliferate debating across Indonesia.",
        achievements: [
          "Debating Achievements (2 regional, 21 national, and 2 international competitions in total)",
          "ITB's Most Outstanding Student Award (3 times)",
          "Finalist of Airlangga Creativepreneur (ACTION) Business Case Competition",
          "Champion of Indonesian National Round of International Humanitarian Law Moot Court Competition 2023",
        ],
        experience: [
          {
            eTitle: "Self Employed Debate Coach",
            eTime: "August 2017 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "As debate coach, my job is to provide debate club members with tutelage in the art of coming up with a well-elaborated idea and delivering it in a convincing manner. It comes in the form of :.",
              dPoint: [
                "Matter-sharing of rudimentary concepts of various topics such as criminal justice system, international relations, economy, art, politics & governance, etc,",
                "Speaking drills to deliver arguments with effective wording and compelling rhetorics,",
                "Teamwork practice to ensure that every debate team are able to cover each other's weaknesses and collaborate cohesively.",
              ],
            },
          },
          {
            eTitle: "President - Student English Forum (SEF) ITB",
            eTime: "May 2018 - May 2019",
            place: "Bandung Area, West Java, Indonesia",
            eDesc: {
              dDetail:
                "Student English Forum ITB is ITB's debate club and one of Indonesia's varsity debating powerhouses. SEF ITB participates in various national and international debating competitions often winning titles. SEF ITB also provides coaching services to other universities or high schools in Indonesia. Apart from debating-related activities, SEF ITB also provides translation services and is often trusted by ITB to represent ITB in international conferences. My contributions are:",
              dPoint: [
                "Coordinate practice of members, ensuring absence of conflict and sustained growth in preparation of competitions.",
                "Constantly in touch and represent SEF ITB with internal ITB elements such as UPT Bahasa ITB, Lembaga Kemahasiswaan ITB, and Kabinet Keluarga Mahasiswa ITB.",
                "Establish communications with other institutions for cooperation opportunities such as joint practices, participation in competitions, etc.",
              ],
            },
          },
          {
            eTitle: "Head of Matter and Curriculum Division",
            eTime: "April 2017 - May 2018",
            place: "Bandung Area, West Java, Indonesia",
            eDesc: {
              dDetail:
                "Student English Forum ITB is ITB's debate club and one of Indonesia's varsity debating powerhouses. SEF ITB participates in various national and international debating competitions often winning titles. SEF ITB also provides coaching services to other universities or high schools in Indonesia. Apart from debating-related activities, SEF ITB also provides translation services and is often trusted by ITB to represent ITB in international conferences. My contributions are :",
              dPoint: [
                "Compiling learning materials from various sources and simplifying it so that it would be easier for other members to study.",
                "Designing individualized practice methods for every member participating in a competition.",
              ],
            },
          },
          {
            eTitle: "English Lecturer - Institut Teknologi Bandung",
            eTime: "August 2018 - November 2018",
            place: "Bandung Area, West Java, Indonesia",
            eDesc: {
              dDetail:
                "UPT Bahasa ITB is an operational wing of ITB that provides various classes that aims to improve language proficiency. My responsibilities were to lead two classes of around 10-15 people each in English conversation. There were no strict curriculum on the class and the way it is run is left to the lecturers, as long as it achieves the goal of making all class participants proactive in conversing and expressing their opinion. Lessons on grammar and English language theory was also included although it is secondary in nature.",
              dPoint: [],
            },
          },
          {
            eTitle: "English Lecturer - Institut Teknologi Bandung",
            eTime: "August 2018 - November 2018",
            place: "Bandung Area, West Java, Indonesia",
            eDesc: {
              dDetail:
                "GO-Academy is GO-JEK's initiative that aims to bridge the gap between engineering fresh graduates' skills and the demand of the industry. The skills includes:",
              dPoint: [
                "Cooperation & negotiation skills",
                "A non-rigid problem solving mindset",
                "Learning enthusiasm and perseverance",
              ],
            },
          },
        ],
      },
      {
        index: 3,
        name: "Muhamad Aditya Muchtar",
        image: aditya,
        linkedin: "https://www.linkedin.com/in/muchaditya/?jobid=1234",
        lastEducation:
          "Master of Engineering, Industrial Engineering - University of Indonesia",
        description:
          "Professional Consultant focusing on Customer Experience (CX), Project Management, and Digital Transformation areas. Having experience in working for various industries such as FMCG, Automotive, Manufacturing, and Multi-Finance companies. Supported by a strong engineering educational background to sustain comprehensive logical thinking and sharp problem-solving skills. Please refer to my profile for details. My DM is always open for any discussion related to professional matters.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        experience: [
          {
            eTitle: "Customer Experience Consultant - ABeam Consulting",
            eTime: "October 2023 - Present",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail:
                "Analyze, optimize, and enhance the end-to-end customer journey, ensuring seamless interactions and satisfaction by implementing strategies that align with business goals and elevate the overall customer experience (CX).",
              dPoint: [],
            },
          },
          {
            eTitle: "Project Management Consultant - ABeam Consulting",
            eTime: "April 2023 - November 2023",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail:
                "Advise organizations to successfully plan, execute, and complete their Business Process Improvement projects mostly related to Digital Transformation. Work closely with clients to identify their project goals, develop project plans, and oversee project execution from start to finish.",
              dPoint: [],
            },
          },
          {
            eTitle: "Project Management Analyst - ABeam Consulting",
            eTime: "November 2021 - April 2023",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail:
                "Advise organizations to successfully plan, execute, and complete their Business Process Improvement projects mostly related to Digital Transformation. Work closely with clients to identify their project goals, develop project plans, and oversee project execution from start to finish.",
              dPoint: [],
            },
          },
          {
            eTitle: "Customer Development - Nutrifood",
            eTime: "November 2019 - July 2020",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail:
                "Supervised customer engagement strategy based on data insights, analyzed market trends, and monitored brands marketing activity to achieve engagement targets.",
              dPoint: [],
            },
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I register for the English Debate Competition (EDC)?",
        answer: [
          "Open your web browser and visit the CATURNAWA website (link)",
          'Scroll down the page until you find the "English Debate Competition" section',
          'Click the "Register Now" button',
          "Fill out the registration form and complete all the required information",
          "Review the entered data",
          "Then you can make the payment by clicking the payment button",
        ],
      },
      {
        question:
          "What is the registration fee for the English Debate Competition (EDC)?",
        answer: [
          "Early Bird: IDR 350,000/Team (July 23-28, 2024)",
          "Phase 1: IDR 500,000/Team (July 29 - August 11, 2024)",
          "Phase 2: IDR 550,000/Team (August 12-23, 2024)",
        ],
      },
      {
        question:
          "When is the registration deadline for the English Debate Competition (EDC)?",
        answer:
          "The registration deadline for the English Debate Competition is August 23, 2024",
      },
      {
        question: "When will the winners be announced?",
        answer:
          "The winners will be announced on October 17, 2024, after the final round sessions.",
      },
      {
        question: "Where can I see the winner announcement?",
        answer:
          "The winner announcement will be available on the website (link caturnawa).",
      },
    ],
  },

  {
    path: "spc",
    title: "Scientific Paper Competition",
    coverImage: scpCover,
    contact: scpContact,
    contactNumber: "https://wa.me/6282298067962",
    color: "#E27817",
    description:
      "The English Debate Competition (EDC) is an English language debate competition where participants debate arguments and thoughts related to contemporary issues from various aspects, namely social, political, cultural, techindexlogical, ecoindexmic, energy, legal, health and so on. Therefore, the English Debate Competition (EDC) aims to improve participants' ability to speak in public, develop analytical and critical thinking skills, and strengthen their ability to argue using effective and persuasive language. The English Debate Competition (EDC) will be held with the theme 'Implementation of Techindexlogy in Blue Ecoindex...",
    timeline: timelinesSPC,
    guideBook:
      "https://drive.google.com/drive/folders/1TVhm_ayI7emGH-VVc2UvkRuB7yqldqcE?usp=drive_link",
    infiniteSlidingText: "SCINTIFIC PAPER",
    infiniteSlidingIcon: spcSlidingIcon,
    requirementsTitle: "Scientific Paper Competition requirements",

    requirements: [
      {
        index: 1,
        detail:
          "Participants of the National Level UNAS FEST 2024 Competition are active students and registered in PDDikti (Pangkalan Data Pendidikan Tinggi).",
      },
      {
        index: 2,
        detail:
          "Participants registered on the official college website for International Universities from various study programs and State or Private Universities.",
      },
      {
        index: 3,
        detail:
          "Participants of the UNAS FEST 2024 National and International Competitions are required to comply with all the Rules of Procedure/Rules that exist in the UNAS FEST 2024 National and International Level activities.",
      },
      {
        index: 4,
        detail:
          "Participants of the UNAS FEST 2024 National and International Competitions are required to download and follow the regulations listed in the guidebook of each Competition.",
      },
      {
        index: 5,
        detail:
          "National and International Level UNAS FEST 2024 Competition Participants are required to attend the International Seminar.",
      },
      {
        index: 6,
        detail:
          "National and International participants of UNAS FEST 2024 participants who attend the Seminar location are not allowed to bring or use drugs/substances/sharp weapons/firearms at the Universitas Nasional.",
      },
      {
        index: 7,
        detail:
          "Participants of the UNAS FEST 2024 National and International Competitions who violate and do not comply with the Rules/Regulations in the UNAS FEST 2024 National and International Competitions, the committee has the right to disqualify participants.",
      },
      {
        index: 8,
        detail:
          "Matters that have not been regulated will be regulated later by the Universitas Nasional Student and Alumni Administration Bureau by the objective reality of UNAS FEST 2024 National and International Level activities.",
      },
    ],

    judgesData: [
      {
        index: 1,
        name: "Efriza, S.I.P., M.Si.",
        image: efriza,
        lastEducation:
          "Master's degree in Political Science from the Institute of Social and Political Sciences Jakarta (IISIP)",
        description:
          "Efriza, S.I.P., M.Si. is a graduate of the Bachelor's program in Political Science from Universitas Nasional and holds a Master's degree in Political Science from the Institute of Social and Political Sciences Jakarta (IISIP). Currently, Efriza serves as a Permanent Lecturer in Government Science at Universitas Pamulang's Off-Campus Study Program (UNPAM PSDKU) in Serang, Banten, since March 2022, and also as a Permanent Lecturer in Political Science at the College of Government Science Abdi Negara (STIP-AN) since October 2016.\n\n Efriza has authored 13 books, including 'Sociology of Power: Theory and Development' (2023), 'Introduction to Politics: An Empirical and Scientific Study' (2021), and 'Political Science: From Political Science to Government Systems' (2009).",
        achievements: ["...", "..."],
        experience: [
          {
            eTitle: "Lecturer in Government Science at Universitas Pamulang.",
            eTime: "March 2022 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Lecturer in Political Science at the College of Government Science Abdi Negara (STIP-AN).",
            eTime: "October 2016 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Analyze, optimize, and enhance the end-to-end customer journey, ensuring seamless interactions and satisfaction by implement xing strategies that align with business goals and elevate the overall customer experience (CX).",
              dPoint: [],
            },
          },
          {
            eTitle: "Lecturer at Bung Karno University",
            eTime: "September 2017 - 2023",
            place: "Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: [],
            },
          },
          {
            eTitle: "Lecturer at Pembangunan Nasional Veteran University",
            eTime: "February 2019 - August 2019",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Reviewer for Populis Journal (Sinta 4) at Nasional University",
            eTime: "...",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Principal Researcher (Political Analyst) at Citra Institute",
            eTime: "2011 - present",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: [],
            },
          },
          {
            eTitle: "Founder of Yayasan Studi Cendekia Indonesia (YSCI)",
            eTime: "2022 - present",
            place: "Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: [],
            },
          },
        ],
      },
      {
        index: 2,
        name: "Fajar Harry Sampurno, MBA, Ph.D.",
        image: fajar,
        lastEducation:
          "Executive education focused on Disruptive Innovation of University of Cambridge.",
        description:
          "A former senior government official with experience leading various state-owned manufacturing and strategic defense industries. He has a strong academic background, ranging from Monash University to executive education focused on Disruptive Innovation from the University of Cambridge. He has extensive experience, including serving as Chief Executive Officer/President of PT. Barata Indonesia. Additionally, he held the position of Deputy Minister of Mining, Strategic Industries & Media at the Ministry of State-Owned Enterprises from July 2015 to November 2019. In this role, he assisted the Minister of SOEs in formulating policies and synchronizing the implementation of strategic business initiatives, competitiveness, performance, and sustainable development for state-owned enterprises in the sectors of Mining, Oil & Gas, Strategic Industries, Security Printing, Perum Peruri, Publishing & Printing.",
        achievements: ["..."],
        experience: [
          {
            eTitle: "Lecturer in Government Science at Universitas Pamulang.",
            eTime: "March 2022 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: [],
            },
          },
        ],
      },
      {
        index: 3,
        name: "Prof. Dr. Eng. Eniya Listiani Dewi",
        image: eniyas,
        lastEducation: "Master's degree from Waseda University. Japan",
        description:
          "Prof. Dr. Eng. Eniya Listiani Dewi is one of Indonesia's prominent female scientists. She is an alumna of Waseda University in Japan, having completed her Bachelor's, Master's, and Doctoral degrees there. She pursued her undergraduate program with a scholarship from the Science and Technology Advance Industrial Development (STAID) of the Ministry of Research and Technology. Eniya has made a significant invention: the zinc-air fuel cell (ZAFC), a generator that produces electricity using metal and oxygen as fuel.",
        achievements: ["..."],
        experience: [
          {
            eTitle: "Lecturer in Government Science at Universitas Pamulang.",
            eTime: "March 2022 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: [],
            },
          },
        ],
      },
    ],
    faqs: [
      {
        question:
          "How do I register for the Scientific Paper Competition (SPC)?",
        answer: [
          "Open your web browser and visit the CATURNAWA website (link)",
          'Scroll down the page until you find the "Scientific Paper Competition" section',
          'Click the "Register Now" button',
          "Fill out the registration form and complete all the required information",
          "Review the entered data",
          "Then you can make the payment by clicking the payment button",
        ],
      },
      {
        question:
          "What is the registration fee for the Scientific Paper Competition (SPC)?",
        answer: [
          "Phase 1 (July 23 - August 11, 2024)",
          "General: Rp 170,000",
          "Unviersitas Nasional Students: Rp 85,000",
          "Phase 2 (August 12 - August 23, 2024)",
          "General: Rp 200,000",
          "Universitas Nasional Students: Rp 100,000",
        ],
      },
      {
        question:
          "When is the registration deadline for the Scientific Paper Competition (SPC)?",
        answer: [
          "The registration deadline for the Scientific Paper Competition is August 23, 2024",
        ],
      },
      {
        question: "When will the winners be announced?",
        answer:
          "The winners will be announced on October 17, 2024, after the final round sessions.",
      },
      {
        question: "Where can I see the winner announcement?",
        answer:
          "The winner announcement will be available on the website (link caturnawa).",
      },
    ],
  },

  {
    path: "smc",
    title: "Short Movie Competition",
    coverImage: smcCover,
    contact: smcContact,
    contactNumber: "https://wa.me/6285719219401",
    color: "#C02424",
    description:
      "The English Debate Competition (EDC) is an English language debate competition where participants debate arguments and thoughts related to contemporary issues from various aspects, namely social, political, cultural, techindexlogical, ecoindexmic, energy, legal, health and so on. Therefore, the English Debate Competition (EDC) aims to improve participants' ability to speak in public, develop analytical and critical thinking skills, and strengthen their ability to argue using effective and persuasive language. The English Debate Competition (EDC) will be held with the theme 'Implementation of Techindexlogy in Blue Ecoindex...",
    timeline: timelinesSMC,
    guideBook:
      "https://drive.google.com/file/d/1HLcDNcXdUthmkEFbPJmistrydr2L63Tj/view?usp=drive_link",
    infiniteSlidingText: "SHORT MOVIE",
    infiniteSlidingIcon: smcSlidingIcon,
    requirementsTitle: "Short Movie Competition requirements",

    requirements: [
      {
        index: 1,
        detail:
          "Participants of the National Level UNAS FEST 2024 Competition are active students and registered in PDDikti (Pangkalan Data Pendidikan Tinggi).",
      },
      {
        index: 2,
        detail:
          "Participants registered on the official college website for International Universities from various study programs and State or Private Universities.",
      },
      {
        index: 3,
        detail:
          "Participants of the UNAS FEST 2024 National and International Competitions are required to comply with all the Rules of Procedure/Rules that exist in the UNAS FEST 2024 National and International Level activities.",
      },
      {
        index: 4,
        detail:
          "Participants of the UNAS FEST 2024 National and International Competitions are required to download and follow the regulations listed in the guidebook of each Competition.",
      },
      {
        index: 5,
        detail:
          "National and International Level UNAS FEST 2024 Competition Participants are required to attend the International Seminar.",
      },
      {
        index: 6,
        detail:
          "National and International participants of UNAS FEST 2024 participants who attend the Seminar location are not allowed to bring or use drugs/substances/sharp weapons/firearms at the Universitas Nasional.",
      },
      {
        index: 7,
        detail:
          "Participants of the UNAS FEST 2024 National and International Competitions who violate and do not comply with the Rules/Regulations in the UNAS FEST 2024 National and International Competitions, the committee has the right to disqualify participants.",
      },
      {
        index: 8,
        detail:
          "Matters that have not been regulated will be regulated later by the Universitas Nasional Student and Alumni Administration Bureau by the objective reality of UNAS FEST 2024 National and International Level activities.",
      },
    ],

    judgesData: [
      {
        index: 1,
        name: "Jentoni Pakpahan",
        image: jentoni,
        linkedin : "https://www.linkedin.com/in/jentoni-pakpahan-609a85169/?jobid=1234",
        lastEducation: "Universitas Nasional",
        description: "",
        achievements: [],
        experience: [
          {
            eTitle: "Line Producer - MNC Picture",
            eTime: "October 2020 - Present",
            place: "Jakarta, Indonesia",
          },
          {
            eTitle: "Assistant Producer",
            eTime: "April 2015 - October 2020",
            place: "Jakarta, Indonesia",
          },
        ],
      },
      {
        index: 2,
        name: "Kusen Dony Hermansyah",
        image: kusen,
        linedin : "",
        lastEducation:
          "postgraduate program at the Indonesian Institute of the Arts in Surakarta.",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        experience: [
          {
            eTitle:
              "Lecturer in Documentary Film, Jakarta State Polytechnic of Creative Media",
            place: "Indonesia",
          },
          {
            eTitle:
              "Lecturer in World Film History and Fundamentals of Film Art, Jakarta Institute of the Arts",
            place: "Indonesia",
          },
          {
            eTitle:
              "Deputy Dean I of the Faculty of Film & Television, Jakarta Institute of the Arts",
            place: "Indonesia",
          },
          {
            eTitle: "Member of the Jakarta Arts and Culture Foundation (YSBJ)",
            place: "Indonesia",
          },
          {
            eTitle: "Film Editor, since 1994",
            place: "Indonesia",
          },
        ],
      },
      {
        index: 3,
        name: "Raden Wardana",
        image: Daniel,
        linkedin : "https://www.linkedin.com/in/raden-wardana-a737992b9/?jobid=1234",
        lastEducation:
          "Master's degree, Film/Video dan Fotografi at Bond University",
        description:
          "I have been involved in the world of broadcasting, cinematography, and photography for nearly 25 years. Some of my experiences in broadcasting include producing several TV programs at Triwarsana Production House (Helmi Yahya). I have been involved in a production house that I founded for almost 5 years since 2003. I worked as a product specialist at Canon Indonesia for almost 3 years. Photography and videography are my majors in teaching at several universities, such as Universitas Mercubuana, Universitas Sahid, Sekolah Tinggi Media Komunikasi Trisakti, and Universitas Nasional, since 2011 until now. Since 2021, I have built a company in the audio-visual field that collaborates with more than 150 digital platforms such as Spotify, Apple Music, YouTube Music, and others.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        experience: [
          {
            eTitle:
              "Chief Operational Officer - NextArt.id (PT. Aksara Dimensi Perkasa)",
            eTime: "August 2021 - Present",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "An International Music Aggregator Company",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Vice Chairman of Academic Affairs - Trisakti School of Media and Communication",
            eTime: "February 2018 - May 2020",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "Developing university curriculum",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Secretary of the Communication Science Study Program - Nasional University (UNAS)",
            eTime: "January 2014 - January 2018",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail:
                "Managing Lecturers for Each Course, Managing Transfer Students",
              dPoint: [],
            },
          },
          {
            eTitle: "Lecture - Mercu Buana University",
            eTime: "April 2011 - May 2015",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail:
                "Teaching Cinematography, Videography, and Photography Courses",
              dPoint: [],
            },
          },
          {
            eTitle: "Lecture - Sahid University",
            eTime: "January 2012 - January 2013",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail:
                "Teaching Cinematography, Videography, and Photography Courses",
              dPoint: [],
            },
          },
          {
            eTitle: "Technical Support - Canon Indonesia",
            eTime: "January 2008 - January 2011",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail:
                "Provided technical support for photography and videography.",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Production Assistant - PT. Cakrawala Andalas Televisi ( ANTV )",
            eTime: "January 2008 - January 2011",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail:
                "Managed pre-production, production, and post-production of broadcasts.",
              dPoint: [],
            },
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I register for the Short Movie Competition (SMC)?",
        answer: [
          "Open your web browser and visit the CATURNAWA website (link)",
          'Scroll down the page until you find the "Short Movie Competition" section',
          'Click the "Register Now" button',
          "Fill out the registration form and complete all the required information",
          "Review the entered data",
          "Then you can make the payment by clicking the payment button",
        ],
      },
      {
        question:
          "What is the registration fee for the Short Movie Competition (SMC)?",
        answer: [
          "The registration fee for the Short Movie Competition is Rp 00,000",
        ],
      },
      {
        question:
          "When is the registration deadline for the Short Movie Competition (SMC)?",
        answer: [
          "The registration deadline for the Short Movie Competition is August 23, 2024",
        ],
      },
      {
        question: "When will the winners be announced?",
        answer:
          "The winners will be announced on October 17, 2024, after the final round sessions.",
      },
      {
        question: "Where can I see the winner announcement?",
        answer:
          "The winner announcement will be available on the website (link caturnawa).",
      },
    ],
  },

  {
    path: "international-seminar",
    title: "international seminar",
    coverImage: semnasCover,
    contact: semnasContact,
    contactNumber: "https://wa.me/6288219445100",
    color: "#853EB6",
    description:
      "The English Debate Competition (EDC) is an English language debate competition where participants debate arguments and thoughts related to contemporary issues from various aspects, namely social, political, cultural, techindexlogical, ecoindexmic, energy, legal, health and so on. Therefore, the English Debate Competition (EDC) aims to improve participants' ability to speak in public, develop analytical and critical thinking skills, and strengthen their ability to argue using effective and persuasive language. The English Debate Competition (EDC) will be held with the theme 'Implementation of Techindexlogy in Blue Ecoindex...",
    timeline: timelinesSemnas,
    guideBook: "",
    infiniteSlidingText: "SHORT MOVIE",
    infiniteSlidingIcon: smcSlidingIcon,
    requirementsTitle: "Short Movie Competition requirements",

    requirements: [
      {
        index: 1,
        detail:
          "Participants of the National Level UNAS FEST 2024 Competition are active students and registered in PDDikti (Pangkalan Data Pendidikan Tinggi).",
      },
      {
        index: 2,
        detail:
          "Participants of the UNAS FEST 2024 International Seminar at National and International Levels are required to register through the link listed on the poster and join the WhatsApp group listed.",
      },
      {
        index: 3,
        detail:
          "Participants of the UNAS FEST 2024 International Seminar are expected to arrive on time.",
      },
      {
        index: 4,
        detail:
          "Participants of the UNAS FEST 2024 International Seminar are required to use the Zoom background that has been determined during the International Seminar.",
      },
      {
        index: 5,
        detail:
          "Participants are required to wear an alma mater jacket and dress neatly & politely when the UNAS FEST 2024 International Seminar are being held.",
      },
      {
        index: 6,
        detail:
          "Participants are required to maintain politeness and civility during the UNAS FEST International Seminar Year 2024.",
      },
      {
        index: 7,
        detail:
          "Participants are prohibited from making any disturbances during the UNAS FEST 2024 International Seminar.",
      },
      {
        index: 8,
        detail:
          "Participants are allowed to ask questions in the question-and-answer session that has been determined by the speaker or moderator.",
      },
      {
        index: 9,
        detail:
          "Participants are required to follow the series of UNAS FEST International Seminar 2024 events that take place until completion.",
      },
      {
        index: 10,
        detail:
          "National and International participants of UNAS FEST 2024 International Seminar who attend the Seminar location are not allowed to bring or use drugs/substances/sharp weapons/firearms at the Universitas Nasional.",
      },
      {
        index: 11,
        detail:
          "Matters that have not been regulated will be regulated later by the Universitas Nasional Student and Alumni Bureau by the objective reality of UNAS FEST 2024 National and International Level activities.",
      },
    ],

    judgesData: [
      {
        index: 1,
        name: "Adam Adiwinata",
        image: adam,
        linkedin : "https://www.linkedin.com/in/adam-adiwinata-9028135b/?jobid=1234",
        lastEducation:
          "MASTER, Renewable and Clean Energy - University of Dayton",

        description:
          "User graduated from the University of Indonesia majoring in Mechanical Engineering focusing on energy conversion and has a master's degree in renewable and clean energy from the University of Dayton, Ohio. During their master's study, their focus was on energy efficiency, and they were part of the Building Energy Center at the University of Dayton, where they conducted energy audits for commercial buildings and manufacturers in the Dayton, Ohio area. They assisted customers by assessing energy usage, identifying, and calculating energy-saving opportunities. I am currently working as technical adviser for HEAT Gmbh and managing energy efficiency project all around Indonesia.",
        achievements: ["..."],
        experience: [
          {
            eTitle:
              "International Renewable Energy Agency (IRENA) Consultant, ASEAN Energy Transition Outlook",
            eTime: "March 2020 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "IRENA's focal point for the collaboration and engagement with all ASEAN Member States on potential of renewable energy, energy efficiency, and other related energy transition technologies for Asean Member States",
              dPoint: [
                "Lead on ground communications with ASEAN counterparts in developing ASEAN Renewables outlook as well as Indonesia Energy Transition Outlook and Malaysia Energy Transition Outlook",
                "Integral in development of 3 Outlooks (1 Regional and 2 Country reports) in Southeast ASIA region.",
              ],
            },
          },
          {
            eTitle:
              "Technical Project Manager - Heat International/ Carbonbase GmbH",
            eTime: "June 2015 - March 2020",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Technical Project Manager for the Green Chiller Indonesia Project with GIZ and the Ministry of Energy and Mineral Resources Indonesia, focusing on promoting energy efficiency practices in Indonesia's cooling systems for both Air Conditioning and Refrigeration.",
              dPoint: [
                "Technical advisor for safety feasibility and program development of Solar Ice Machine for fishermen community in remote island in East Nusa Tenggara.",
                "Technical project manager for Green Chiller pilot projects from preparation, implementation, measurement, and verification.",
                "Lead the implementation of 7 Green chiller projects in commercial and industrial sectors all over Indonesia.",
                "Lead the certification for the safety installation of the pilot projects, ensuring compliance with European safety standards.",
                "Conducted analysis and optimization of pilot projects.",
                "Conducted business analysis for RAC sectors and assessed the climate impact of the sector based on the development of government’s policy.",
                "Supported the compilation of RAC inventory according to IPCC Tier 2 methodology.",
                "Provided policy advice for the Green Chiller project on developing MEPS and labeling for RAC subsectors, and developing RAC safety standards for flammable refrigerants according to international standards.",
                "Contributed to the RAC sector integration into NDCs.",
                "Conducted training and certification for technicians community on safety installation on flammable refrigerant.",
                "Supported the development of 3 National Standards of Indonesia on utilization of natural refrigerant.",
                "Involved in project development, coordination, and negotiation with stakeholders.",
              ],
            },
          },
          {
            eTitle: "Energy Engineer - Synergy Efficiency Solutions",
            eTime: "June 2015 - March 2020",
            place: "Indonesia",
            eDesc: {
              dDetail: "Project Manager, and Energy Engineer",
              dPoint: [
                "Energy efficiency engineer with competencies in conducting energy audit on HVAC system, process chillers, pumps, fans, hot water, electric motors, and lighting.",
                "Managed USAID-ICED Pilot Project Energy Conservation Sekolah Harapan Ibu in Jakarta, successfully reducing energy costs by up to 30%. Provided training on energy efficiency implementation for students and teachers in Jakarta area during the event.",
                "Technical engineer in ESCO project of 4-star hotel in Jakarta, analyzing existing energy system’s performance and potential savings for the project.",
                "Conducted energy audit and assessments for energy efficiency implementations in hotels, commercial buildings, and manufactures in Java areas and Bali, Indonesia, helping clients cut their energy bills and improve their systems.",
                "Energy Engineer for WWF Energy Audit at Bali Nusa Dua Convention Center for Air Conditioning system.",
              ],
            },
          },
          {
            eTitle: "ERM: Environmental Resources Management Junior Consultant",

            eTime: "June 2015 - March 2020",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Energy Engineer Intern. I support the technical and management team of Korean clothing factory in Purwakarta Indonesia in pursuing LEED certification. I supported energy efficiency team for energy audit project for Oil and gas Companies in Indonesia. Project management member for all the project tender that I took part.",
              dPoint: [
                "Energy efficiency engineer with competencies in conducting energy audit on HVAC system, process chillers, pumps, fans, hot water, electric motors, and lighting.",
                "Managed USAID-ICED Pilot Project Energy Conservation Sekolah Harapan Ibu in Jakarta, successfully reducing energy costs by up to 30%. Provided training on energy efficiency implementation for students and teachers in Jakarta area during the event.",
                "Technical engineer in ESCO project of 4-star hotel in Jakarta, analyzing existing energy system’s performance and potential savings for the project.",
                "Conducted energy audit and assessments for energy efficiency implementations in hotels, commercial buildings, and manufactures in Java areas and Bali, Indonesia, helping clients cut their energy bills and improve their systems.",
                "Energy Engineer for WWF Energy Audit at Bali Nusa Dua Convention Center for Air Conditioning system.",
              ],
            },
          },
        ],
      },
      {
        index: 2,
        name: "Prof. Dr. Eng. Eniya Listiani Dewi",
        image: eniyas,
        linkedin : "https://www.linkedin.com/in/eniya-listiani-dewi-a17b6260/?jobid=1234",
        lastEducation: "Master's degree from Waseda University. Japan",

        description:
          "Prof. Dr. Eng. Eniya Listiani Dewi is one of Indonesia's prominent female scientists. She is an alumna of Waseda University in Japan, having completed her Bachelor's, Master's, and Doctoral degrees there. She pursued her undergraduate program with a scholarship from the Science and Technology Advance Industrial Development (STAID) of the Ministry of Research and Technology. Eniya has made a significant invention: the zinc-air fuel cell (ZAFC), a generator that produces electricity using metal and oxygen as fuel",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        experience: [
          {
            eTitle:
              "Professor - The National Research and Innovation Agency of The Republic of Indonesia",
            eTime: "September 2021 - Present",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail:
                "Fuel Cell, Hydrogen Production, Green Electricity, Biohydrogen",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Board Director - International Association for Hydrogen Energy",

            eTime: "January 2014 - Present",
            place: "MH. Thamrin 8, 10F, Jakarta",
            eDesc: {
              dDetail: "...",
              dPoint: [],
            },
          },

          {
            eTitle:
              "Deputy Chairperson for Information Energy and Material - The Agency for the Assessment and Application of Technology (BPPT)",

            eTime: "November 2018 - September",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Deputy Chairperson for Agroindustrial and Biotechnology - Badan Pengkajian dan Penerapan Teknologi",

            eTime: "November 2018 - September",
            place: "MH. Thamrin 8, 10F, Jakarta",
            eDesc: {
              dDetail: "...",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Director of Center for Materials Technology - Agency for the Assessment and Application of Technology (BPPT)",

            eTime: "July 2014 - September 2015",
            place: "224Bld. Kawasan Puspiptek Serpong",
            eDesc: {
              dDetail: "...",
              dPoint: [],
            },
          },
          {
            eTitle: "Head Division of Renewable Energy - TPSE",

            eTime: "February 2014 - July 2014",
            place: "Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: [],
            },
          },
        ],
      },
    ],
    judgesData2: [
      {
        index: 1,
        name: "Jason Amiri",
        image: jason,
        linkedin : "https://www.linkedin.com/in/jasonamiri/?jobid=1234",
        lastEducation:
          "Master of Science (M.Sc.), Mechanical Engineering - University of Tehran",
        description:
          "User graduated from the University of Indonesia majoring in Mechanical Engineering focusing on energy conversion and has a master's degree in renewable and clean energy from the University of Dayton, Ohio. During their master's study, their focus was on energy efficiency, and they were part of the Building Energy Center at the University of Dayton, where they conducted energy audits for commercial buildings and manufacturers in the Dayton, Ohio area. They assisted customers by assessing energy usage, identifying, and calculating energy-saving opportunities. I am currently working as technical adviser for HEAT Gmbh and managing energy efficiency project all around Indonesia.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        experience: [
          {
            eTitle: "Lecturer in Government Science at Universitas Pamulang.",
            eTime: "March 2022 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: ["...", "...", "..."],
            },
          },
        ],
      },
      {
        index: 2,
        name: "Judge kdbi 2",
        image: lizie,
        linkedin : "https://www.linkedin.com/in/lizie-daniela-tentler-prola-175b0934/?jobid=1234",
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        experience: [
          {
            eTitle: "Lecturer in Government Science at Universitas Pamulang.",
            eTime: "March 2022 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: ["...", "...", "..."],
            },
          },
        ],
      },
      {
        index: 3,
        name: "Judge kdbi 3",
        image: ovi,
        linkedin : "https://www.linkedin.com/in/olding/?jobid=1234",
        lastEducation: "University of Indonesia",
        description:
          "Exercitation est laboris consectetur tempor officia irure sint est incididunt eiusmod. Adipisicing consectetur officia sunt ex exercitation sunt velit magna occaecat anim et tempor. Et commodo incididunt velit ut ad do do. Minim adipisicing esse Lorem aliqua. Consequat exercitation proident quis et. Officia aliqua ipsum duis et deserunt amet et.",
        achievements: [
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Mollit quis sint ad pariatur aliquip anim amet.",
          "Mollit quis sint ad pariatur aliquip anim amet. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        experience: [
          {
            eTitle: "Lecturer in Government Science at Universitas Pamulang.",
            eTime: "March 2022 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail: "...",
              dPoint: ["...", "...", "..."],
            },
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the theme for the International Seminar?",
        answer:
          'The theme for the UNAS FEST 2024 International Seminar is "Exploring the Potential of Renewable Energy Through Technology Innovation to Achieve Global Green Momentum". This theme encompasses three sub-themes is Energy Transition Policy Towards Global Green Momentum, Technology Integration in Renewable Energy Exploration, and Climate Change Mitigation by Utilizing Technology Innovation.',
      },
      {
        question: "How do I register for the International Seminar?",
        answer:
          "You can register for the International Seminar by clicking on the registration link provided on the UNAS FEST 2024 event poster.",
      },
      {
        question: "Is there a registration fee for the International Seminar?",
        answer:
          "No, there is no registration fee for the International Seminar.",
      },
      {
        question: "Where will the International Seminar be held?",
        answer:
          "The International Seminar will be held both offline at Universitas Nasional and online via Zoom room which will be provided after registration.",
      },
      {
        question:
          "What are the benefits I will get as a participant of the International Seminar.",
        answer: [
          "Gain insights related to the seminar theme",
          "Get networking opportunities",
          "Enhance critical thinking skills",
        ],
      },
      {
        question:
          "Will participants of the International Seminar receive a certificate?",
        answer:
          "Yes, all participants will receive an E-Certificate sent via email to the same address provided during registration.",
      },
    ],
  },
];
