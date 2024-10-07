// Contact Us
import kdbiContact from "@/public/assets/images/home/contactUs/kdbiContact.png";
import edcContact from "@/public/assets/images/home/contactUs/edcContact.png";
import scpContact from "@/public/assets/images/home/contactUs/spcContact.png";
import smcContact from "@/public/assets/images/home/contactUs/smcContact.png";
import semnasContact from "@/public/assets/images/home/contactUs/semnasContact.png";

// judges photos kdbi
import purwo from "@/public/assets/images/competition/kdbi Purwo Besari.jpg";
<<<<<<< HEAD
import leila from "@/public/assets/images/competition/KDBI LEILA.jpg";
import lasman from "@/public/assets/images/competition/KDBI LASMAN.jpg";
=======
import wahyu from "@/public/assets/images/competition/wahyu.png";
import irfan from "@/public/assets/images/competition/kdbi_irvan.jpg";
>>>>>>> 5366a1dfcad5a246f1c55da6065f63d939f7f6b7

// judges photos edc
import mouliza from "@/public/assets/images/competition/mouliza.jpeg";
import ahmad from "@/public/assets/images/competition/edc Ahmad Kushay.jpg";
import hezron from "@/public/assets/images/competition/edc hezron.jpg";

// judges photos spc
import efriza from "@/public/assets/images/competition/edc Efriza, S.I.P., M.Si..png";
import desfara from "@/public/assets/images/competition/Desfara.jpeg";
import tatang from "@/public/assets/images/competition/spc tatang.jpeg";

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
import kdbiCover from "@/public/assets/images/competition/kdbiCover.png";
import edcCover from "@/public/assets/images/competition/edcCover.png";
import scpCover from "@/public/assets/images/competition/scpCover.png";
import smcCover from "@/public/assets/images/competition/smcCover.jpg";
import semnasCover from "@/public/assets/images/competition/semnasCover.png";

//import icon buat infiniteSlidingIcon
import kdbiSlidingIcon from "@/public/assets/icons/megaphone.png";
import edcSlidingIcon from "@/public/assets/icons/smile-face.png";
import spcSlidingIcon from "@/public/assets/icons/book.png";
import smcSlidingIcon from "@/public/assets/icons/movie-clapper.png";
import internationalSeminarIcon from "@/public/assets/icons/semin.png";

//timeline
import {
  timelinesEDC,
  timelinesKDBI,
  timelinesSPC,
  timelinesSMC,
  timelinesSemnas,
} from "@/constants/Timeline";

export const Activities = [
  {
    path: "kdbi",
    caturnawa: "https://caturnawa.unasfest.com/",
    title: "Kompetisi Debat Bahasa Indonesia",
    coverImage: kdbiCover,
    contact: kdbiContact,
    contactNumber: "https://wa.me/6288212435726",
    color: "#2A9763",
    description:
      "Kompetisi Debat Bahasa Indonesia is a prestigious event where students debate on contemporary issues in the Indonesian language. This competition aims to develop participants analytical and public speaking skills, as well as their ability to engage in constructive discourse. Participants must construct coherent arguments, refute the opposing team's points, and convince the judges with their eloquence and reasoning. Topics cover a wide range of issues including national policy, social justice, and cultural debates. The competition is judged based on the clarity of arguments, effectiveness of rebuttals, and overall presentation. This event helps participants develop a deeper appreciation of national and social issues and enhances their ability to communicate effectively in the Indonesian language.",
    timeline: timelinesKDBI,
    guideBook:
      "https://drive.google.com/file/d/1b9t_vrDRriV510ZCixKa4GabgL3C_QM4/view?usp=sharing",
    infiniteSlidingText: "KDBI",
    infiniteSlidingIcon: kdbiSlidingIcon,
    requirementsTitle: "Kompetisi Debat Bahasa Indonesia Requirements",
    requirements: [
      {
        index: 1,
        detail:
          "The KDBI UNAS FEST 2024 National Level debate participants are active students registered in PDDikti (Pangkalan Data Pendidikan Tinggi).",
      },
      {
        index: 2,
        detail:
          "The KDBI UNAS FEST 2024 National Level participant team is required to register through the link listed on the poster and join the WhatsApp group listed on the UNAS FEST 2024 Website.",
      },
      {
        index: 3,
        detail:
          "The KDBI UNAS FEST 2024 National Level participant team is required to comply with all the Rules/Regulations in the KDBI UNAS FEST 2024 National Level activities.",
      },
      {
        index: 4,
        detail:
          "The KDBI UNAS FEST 2024 National Level participating team is required to download the KDBI UNAS FEST 2024 guidebook.",
      },
      {
        index: 5,
        detail:
          "The team participating in KDBI UNAS FEST 2024 National Level is required to attend the International Seminar.",
      },
      {
        index: 6,
        detail:
          "The KDBI UNAS FEST 2024 National participants are prohibited from bringing or using drugs/substances/sharp weapons/firearms when attending KDBI UNAS FEST 2024 at Universitas Nasional.",
      },
      {
        index: 7,
        detail:
          "The committee has the right to disqualify the KDBI UNAS FEST 2024 National Level participant team that violates and does not comply with the Rules/Regulations in the KDBI UNAS FEST 2024 National Level.",
      },
      {
        index: 8,
        detail:
          "Matters that have not been regulated will be regulated later by the Universitas Nasional Student and Alumni Administration Bureau in accordance with the objective reality of KDBI UNAS FEST 2024 National Level activities.",
      },
    ],

    judgesData: [
      {
        index: 1,
        name: "Laila Amalia Khaerani, S.Pd",
        image: leila,
        linkedin: "", 
        lastEducation:
          "Bachelor's Degree in History Education, State University of Jakarta ",
        description:
          "Is a graduate of History Education at the State University of Jakarta. Has an outstanding record in various national debate competitions, such as being the chief judge of the Jakarta State University Hysteric national debate competition 2023, the chief judge of the Gunadarma University Leipzig national debate competition 2023, the chief judge of the Tetralogy national debate competition SMAN 58 Jakarta 2023, the chief judge of the Jakarta State University KIPK debate competition 2023, the invitation judge of the UNJ National Debate Competition 2023, the judge of the UNJ CNDC national debate competition 2023, the invitation judge of the UNSRI CNC national debate competition 2021, invitation judge of FYG UIN Jakarta national debate competition 2021, Independent GCE UNMUL judge 2021, National KDMI UNJ Institution judge 2021, 1st place winner of FESTKA UNM debate competition 2023, 1st place winner of Esa Unggul national debate competition 2023, 1st place winner of UNTAN National Education Fair debate competition 2022, 1st place in the UNJ KDMI competition 2022, 1st place in the national debate competition at the State University of Malang Rhetoric Festival 2021, 1st place in the Sociology Fair debate competition at Andalas University 2021, 5 best speakers in the PIF debate competition at Andalas University 2021, and 3rd place in the UNJ KDMI selection 2021.",
          achievements: [
            "1st place in FESTKA UNM Debate Competition, 2023",
            "1st place in Esa Unggul National Debate Competition, 2023",
            "3rd place in Pertiwi IDN Debate Competition, 2023",
            "4th place in Fastweak X Debate Competition, 2023",
            "Top 10 Best Speaker in Fastweak X Debate Competition, 2023",
            "1st place in National Education Fair Debate Competition at UNTAN, 2022",
            "1st place in KDMI UNJ Debate Competition, 2022",
            "2nd Best Speaker in KDMI UNJ Debate Competition, 2022",
            "UNJ Delegate for KDMI, 2022",
            "3rd place in FEBI Debate Competition, 2022",
            "Best Speaker in Fastweek Debate Competition, 2022",
        ],        
        experience: [
          {
            eTitle: "Chief Judge - Hysteric National Debate Competition, Jakarta State University",
            eTime: "2023",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Chief Judge - Leipzig National Debate Competition, Gunadarma University",
            eTime: "2023",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Chief Judge - Tetralogy National Debate Competition, SMAN 58 Jakarta",
            eTime: "2023",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Chief Judge - KIPK Debate Competition, Jakarta State University",
            eTime: "2023",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Invitation Judge - National Debate Competition, Jakarta State University",
            eTime: "2023",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Judge - CNDC National Debate Competition, Jakarta State University",
            eTime: "2023",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Invitation Judge - HCG National Debate Competition, Jakarta State University",
            eTime: "2022",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Invitation Judge - Hysteric Debate Competition, Jakarta State University",
            eTime: "2022",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Judge - Pilar Politik National Debate Competition, UIN Jakarta",
            eTime: "2022",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Invitation Judge - CNC National Debate Competition, UNSRI",
            eTime: "2021",
            place: "Palembang, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Invitation Judge - FYG National Debate Competition, UIN Jakarta",
            eTime: "2021",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Independent Judge - GCE Debate Competition, UNMUL",
            eTime: "2021",
            place: "Samarinda, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
        ],        
      },
      {
        index: 2,
<<<<<<< HEAD
        name: "Prof. Dr. Wahyu Wibowo",
        image: lasman,
=======
        name: "Irfan Mursyid Setyawan, S.H.",
        image: irfan,
>>>>>>> 5366a1dfcad5a246f1c55da6065f63d939f7f6b7
        linkedin: "",
        lastEducation: "Bachelor of Law at Universitas Negeri Semarang",
        description:
          'He is a Bachelor of Laws graduate who has experience as a judge of the Indonesian Language Debate Competition for the Scientific Week of the Sekolah Tinggi Akutansi Negara (STAN) 2022, experienced as a presenter of the Universitas Wahid Hasyim (UNWAHAS) Faculty of Law Student Basic Management Skills Training 2022 and has won 2nd place in the Sam Ratulangi Law Fair II Debat Hukum dan Konstitusi (LDHK) Universitas Sam Ratulangi (UNSRAT) National Legal Debate Competition 2021. He is also the author of a book entitled "Bunga Rampai Sinergi Perubahan: Knitting Asa from the Conservation Campus".',
        achievements: [
          "Jury of Indonesian Debate Competition Pekan Ilmiah Perguruan Tinggi Kedinasan STAN 2022",
          "Speaker at Basic Student Management Skills Training, Faculty of Law UNWAHAS 2022",
          "TOP 8 in National Law Election Enforcement Debate Competition II BAWASLU 2022",
          "2nd Place in National Legal Debate Competition Sam Ratulangi Law Fair II LDHK UNSRAT 2021",
          "Author of a chapter in the book 'Bunga Rampai Sinergi Perubahan: Merajut Asa Dari Kampus Konservasi' (2021)",
        ],
        experience: [
          {
            eTitle: "Legal Officer at PT Square Gate One",
            eTime: "Nov 2023 - Present",
            place: "Tangerang, Indonesia",
            eDesc: {
              dDetail:
                "Responsible for drafting contracts, reviewing legal documents, and managing legal risks in a fintech environment.",
            },
          },
          {
            eTitle: "Legal Officer at PT Pembayaran Lintas Usaha Sukses",
            eTime: "Nov 2023 - Present",
            place: "Tangerang, Indonesia",
            eDesc: {
              dDetail:
                "Ensures regulatory compliance and provides legal consultation for the fintech industry.",
            },
          },
          {
            eTitle: "Legal Intern at Broto Hastono & Associates",
            eTime: "Jul 2022 - Sept 2022",
            place: "Semarang, Indonesia",
            eDesc: {
              dDetail:
                "Assisted in drafting legal documents, provided client support, and handled case representation at legal institutions.",
            },
          },
          {
            eTitle: "Chairman of UKM Debat FH UNNES",
            eTime: "Jan 2022 - Dec 2022",
            place: "Semarang, Indonesia",
            eDesc: {
              dDetail:
                "Led the student debate organization, organized national debate competitions, and managed annual work programs.",
            },
          },
          {
            eTitle: "Vice Minister of Strategic Studies at BEM KM UNNES",
            eTime: "Feb 2021 - Jan 2022",
            place: "Semarang, Indonesia",
            eDesc: {
              dDetail:
                "Developed strategic work programs and conducted research on human rights and democracy.",
            },
          },
        ],
      },
      {
        index: 3,
        name: "Purwo Besari, S.Pd.",
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
              dDetail: "",
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
              dDetail: "",
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
              dDetail: "",
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
              dDetail: "",

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
              dDetail: "",

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
              dDetail: "",

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
              dDetail: "",

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
              dDetail: "",

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
              dDetail: "",

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
          "How do I register for the Kompetisi Debat Bahasa Indonesia (KDBI)?",
        answer: [
          "Open your web browser and visit caturnawa.unasfest.com",
          'Scroll down the page until you find the "Kompetisi Debat Bahasa Indonesia" section',
          'Click the "Register Now" button',
          "Fill out the registration form and complete all the required information",
          "Review the entered data",
          "Then you can make the payment by clicking the payment button",
        ],
      },
      {
        question:
          "What is the registration fee for the Kompetisi Debat Bahasa Indonesia (KDBI)?",
        answer: [
          "Early Bird (July 23 - July 28 , 2024)",
          "General: Rp300.000,-/team",
          "Universitas Nasional Students: Free",
          "Phase 1 (July 29 - August 11, 2024)",
          "General: Rp400.000,-/team",
          "Universitas Nasional Students: Free",
          "Phase 2 (August 12 - August 23, 2024)",
          "General: Rp450.000,-/team",
          "Universitas Nasional Students: Free",
        ],
      },
      {
        question:
          "When is the registration deadline for the Kompetisi Debat Bahasa Indonesia (KDBI)?",
        answer:
          "The registration deadline for the Kompetisi Debat Bahasa Indonesia (KDBI) is September 7, 2024",
      },
      {
        question: "When will the winners be announced?",
        answer:
          "The winners will be announced on October 17, 2024, after the final round day 2 sessions.",
      },
      {
        question: "Where can I see the winner announcement?",
        answer:
          "The winner announcement will be available on caturnawa.unasfest.com.",
      },
    ],
  },

  {
    path: "edc",
    caturnawa: "https://caturnawa.unasfest.com/",
    title: "English Debate Competition",
    coverImage: edcCover,
    contact: edcContact,
    contactNumber: "https://wa.me/6285716931400",
    color: "#004AAD",
    description:
      "The English Debate Competition is an intellectual contest designed to enhance participants public speaking, critical thinking, and persuasive skills. Participants engage in structured arguments on diverse topics, ranging from social issues to global politics. Each team is given a motion and must present a well-reasoned case, counter the opposition's points, and aim to persuade the judges with their rhetoric and oratory skills. Judges evaluate teams based on their arguments, rebuttals, delivery, and overall presentation. This competition not only fosters a deeper understanding of global issues but also encourages participants to articulate their thoughts clearly and confidently.",
    timeline: timelinesEDC,
    guideBook:
      "https://drive.google.com/file/d/1jQ2CLjQS8SR3y7A2DPONJ81AW2bFV31M/view?usp=sharing",
    infiniteSlidingText: "EDC",
    infiniteSlidingIcon: edcSlidingIcon,
    requirementsTitle: "English Debate Competition Requirements",
    requirements: [
      {
        index: 1,
        detail:
          "The EDC UNAS FEST 2024 National and International Level debate participants are active students registered in PDDikti (Pangkalan Data Pendidikan Tinggi) for State or Private Universities in Indonesia and registered on the official college website for International Universities.",
      },
      {
        index: 2,
        detail:
          "The EDC UNAS FEST 2024 National and International Level participant team is required to register through the link listed on the poster and join the WhatsApp group listed on the UNAS FEST 2024 Website.",
      },
      {
        index: 3,
        detail:
          "The EDC UNAS FEST 2024 National and International Level participant team is required to comply with all the Rules/Regulations in the EDC UNAS FEST 2024 International Level activities.",
      },
      {
        index: 4,
        detail:
          "The EDC UNAS FEST 2024 National and International Level participating team is required to download the EDC UNAS FEST 2024 guidebook.",
      },
      {
        index: 5,
        detail:
          "The team participating in EDC UNAS FEST 2024 National and International Level is required to attend the International Seminar.",
      },
      {
        index: 6,
        detail:
          "The EDC UNAS FEST 2024 National and International participants are prohibited from bringing or using drugs/substances/sharp weapons/firearms when attending EDC UNAS FEST 2024 at Universitas Nasional.",
      },
      {
        index: 7,
        detail:
          "The committee has the right to disqualify the EDC UNAS FEST 2024 International Level participant team that violates and does not comply with the Rules/Regulations in the EDC UNAS FEST 2024 National and International Level.",
      },
      {
        index: 8,
        detail:
          "Matters that have not been regulated will be regulated later by the Universitas Nasional Student and Alumni Administration Bureau in accordance with the objective reality of EDC UNAS FEST 2024 National and International Level activities.",
      },
    ],

    judgesData: [
      {
        index: 1,
        name: "Mouliza Kristhopher Donna Sweinstani, S.IP, M.IP.",
        image: mouliza,
        linkedin:
          "https://www.linkedin.com/in/mouliza-kristhopher-donna-sweinstani-a3ba6470",
        lastEducation:
          "First Research Expert at Indonesian Institute of Sciences (LIPI)",
        description:
          "I am currently serves as the head of the Political Party Studies research team at the Political Research Center of BRIN (Indonesian National Research and Innovation Agency). Apart from being a researcher, I am also a Lecturer at Department of Government Studies Indonesian Open University (UT) and a Practitioner Lecturer from the Ministry of Education, focusing on Democracy, Election, and Political Parties, in several universities in Indonesia. Several publications on electoral studies, political parties, the role of women in politics, and youth in politics have been published in national and international reputable journals, books, as well as in the mainstream mass media. I am also one of the founders of a youth organisation called the Indonesian Youth Political Institute, established in 2014.",
        achievements: [
          "One of the 'The Best Electoral Literature' from the National Library of Indonesia",
          "Winner of the MG Prize LPDP Ministry of Finance Award in the field of Politics, Law, and Peace",
          "Copyright Holder of the Political Party Institutionalization Index Instrument",
        ],
        experience: [
          {
            eTitle: "Election Violation Analyst - Bawaslu RI",
            eTime: "January 2017 - December 2017",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Researcher at Research Center for Politics BRIN/LIPI",
            eTime: "2018 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Tutor in Departemen of Government Studies Indonesia Open Univeristy",
            eTime: "2021 - Present",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Practitioner Lecturer in Departemen of Political Science Universitas Nasional",
            eTime: "2024 - Present",
            place: "Jakarta Raya, Indonesia",
            eDesc: {
              dDetail: "",
            },
          },
        ],
      },
      {
        index: 2,
        name: "Ahmad Kushay S.H, S.Si.",
        linkedin:
          "https://www.linkedin.com/in/ahmad-kushay-9a57a8104/?jobid=1234",
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
                "As debate coach, my job is to provide debate club members with tutelage in the art of coming up with a well-elaborated idea and delivering it in a convincing manner. It comes in the from of :",
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
        name: "Hezron Kowardi",
        image: hezron,
        linkedin: "https://www.linkedin.com/in/hezron-kowardi-b27b19206",
        lastEducation: "University of Indonesia Faculty of Psychology",
        description:
          "Hezron Kowardi is an undergraduate psychology student at the Universitas Indonesia. He has a background in various leadership roles, including as President of the English Debating Society (EDS UI). Hezron has interned as an Internal Recruiter at Monroe Consulting Group and in HR Recruitment at Akulaku Indonesia. Hezron has a keen interest in human resources, social welfare, and mental health issues. Hezron has also won awards in international debate competitions.",
        achievements: [
          "President of EDS UI 2023.",
          "Grand Finalist in the English as a Foreign Language (EFL) category at the World Universities Debating Championships 2024 in Ho Chi Minh, Vietnam. This tournament is one of the largest in the world with over 800 participants from around the globe.",
          "Semifinalist in the English as a Secondary Language (ESL) category at the Australasian Intervarsity Debating Championships 2023 in Krabi, Thailand. Australs is one of the largest debate tournaments in the world after WUDC.",
          "Member of the Official Delegation from the Universitas Indonesia.",
          "First Break and Runner-Up Champion at the UTM AP International Debating Championship 2023, the first virtual edition of the UTM API series.",
        ],
        experience: [],
      },
    ],
    faqs: [
      {
        question: "How do I register for the English Debate Competition (EDC)?",
        answer: [
          "Open your web browser and visit caturnawa.unasfest.com",
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
          "Early Bird (July 23 - July 28 , 2024)",
          "General: Rp350.000,-/team",
          "Universitas Nasional Students: Free",
          "Phase 1 (July 29 - August 11, 2024)",
          "General: Rp500.000,-/team",
          "Universitas Nasional Students: Free",
          "Phase 2 (August 12 - August 23, 2024)",
          "General: Rp550.000,-/team",
          "Universitas Nasional Students: Free",
        ],
      },
      {
        question:
          "When is the registration deadline for the English Debate Competition (EDC)?",
        answer:
          "The registration deadline for the English Debate Competition is September 7, 2024",
      },
      {
        question: "When will the winners be announced?",
        answer:
          "The winners will be announced on October 17, 2024, after the final round day 2 sessions.",
      },
      {
        question: "Where can I see the winner announcement?",
        answer:
          "The winner announcement will be available on the website caturnawa.unasfest.com.",
      },
    ],
  },

  {
    path: "spc",
    caturnawa: "https://caturnawa.unasfest.com/",
    title: "Scientific Paper Competition",
    coverImage: scpCover,
    contact: scpContact,
    contactNumber: "https://wa.me/6282298067962",
    color: "#E27817",
    description:
      "The Scientific Paper Competition is an academic contest where participants present their research findings on various scientific topics. This competition is designed to promote scientific inquiry, rigorous research, and the dissemination of knowledge. Participants submit papers that are evaluated on originality, methodology, analysis, and contribution to the field. The competition provides a platform for young researchers to showcase their work, receive feedback from experts, and be recognition for their contributions. Participants have the opportunity to present their findings in a formal setting, engage in discussions with peers and judges, and enhance their understanding of scientific research processes.",
    timeline: timelinesSPC,
    guideBook:
      "https://drive.google.com/file/d/1H30ygWmjcE2GKZtEpsrHtQbNQnQ7m9eO/view?usp=sharing",
    infiniteSlidingText: "SCIENTIFIC PAPER COMPETITION",
    infiniteSlidingIcon: spcSlidingIcon,
    requirementsTitle: "Scientific Paper Competition Requirements",

    requirements: [
      {
        index: 1,
        detail:
          "Participants of the National Level UNAS FEST 2024 Competition are active students and registered in PDDikti (Pangkalan Data Pendidikan Tinggi).",
      },
      {
        index: 2,
        detail:
          "Participants registered on the official college website for Universitas Nasional from various study programs and State or Private Universities.",
      },
      {
        index: 3,
        detail:
          "Participants of the UNAS FEST 2024 National Competitions are required to comply with all the Rules of Procedure/Rules that exist in the UNAS FEST 2024 National and International Level activities.",
      },
      {
        index: 4,
        detail:
          "Participants of the UNAS FEST 2024 National Competitions are required to download and follow the regulations listed in the guidebook of each Competition.",
      },
      {
        index: 5,
        detail:
          "National and International Level UNAS FEST 2024 Competition Participants are required to attend the International Seminar.",
      },
      {
        index: 6,
        detail:
          "National participants of UNAS FEST 2024 participants who attend the Seminar location are not allowed to bring or use drugs/substances/sharp weapons/firearms at the Universitas Nasional.",
      },
      {
        index: 7,
        detail:
          "Participants of the UNAS FEST 2024 National Competitions who violate and do not comply with the Rules/Regulations in the UNAS FEST 2024 National Competitions, the committee has the right to disqualify participants.",
      },
      {
        index: 8,
        detail:
          "Matters that have not been regulated will be regulated later by the Universitas Nasional Student and Alumni Administration Bureau by the objective reality of UNAS FEST 2024 National Level activities.",
      },
    ],

    judgesData: [
      {
        index: 1,
        name: "Efriza, S.IP, M.Si.",
        image: efriza,
        lastEducation:
          "Master's in Social and Political Sciences (Political Science) at the Universitas Nasional",
        description:
          "He holds a Master's degree in Political Science from FISIP, Universitas Nasional, completed in 2016, and a Bachelor's degree in the same field from IISIP Jakarta, completed in 2006. Since 2013, he has been an active member of the Indonesian Association of Political Science (AIPI) in Jakarta. His organizational experience includes serving as Editor-in-Chief of Demos Magazine from 2004 to 2005 and as Secretary of the Political Science Student Association (HIMAPOL) from 2002 to 2003. These roles have honed his expertise in political science and enriched his professional and academic journey.",
        achievements: [],
        experience: [
          {
            eTitle: "Reporter at Online1.id (Press)",
            eTime: "2024 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Founder of Pekamedia.com (Press)",
            eTime: "2024 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Founder of Yayasan Studi Cendekia Indonesia (YSCI)",
            eTime: "2022 - present",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Reviewer at Jurnal Wahana Bina Pemerintahan, STIP-AN",
            eTime: "2024 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Reviewer at Jurnal Populis (UNAS), Sinta 4",
            eTime: "2022 - Present",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Principal Researcher at Citra Institute",
            eTime: "2020 - present",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Weekly Columnist at Telisik.id (Saturday/Sunday), the First Online Media in Southeast Sulawesi",
            eTime: "2020 - present",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Founder and Executive Director, CV Penerbit Kreasi Cendekia Pustaka",
            eTime: "2011 - present",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Adjunct Lecturer in International Relations, Universitas Satya Negara Indonesia (USNI)",
            eTime: "2018 - present",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Adjunct Lecturer in Political Science, Universitas Bung Karno (UBK)",
            eTime: "2017 - present",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Adjunct Lecturer in Political Science, Sekolah Tinggi Ilmu Pemerintahan Abdi Negara (STIP-AN)",
            eTime: "2016 - present",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Permanent Lecturer in Government Studies, Universitas Sutomo",
            eTime: "September 2021 - present",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
        ],
      },
      {
        index: 2,
        name: "Dr.Tatang Mitra Setia, MSi.",
        image: tatang,
        lastEducation: "Ph.D. in Biology at the University of Indonesia",
        description:
          "Dr. Tatang Mitra Setia, MSi, is a lecturer in the Master's Program in Biology at the Faculty of Biology and Agriculture, Universitas Nasional. Born in Palembang on October 26, 1958, he has made significant contributions to the field of biology in the academic community.",
        achievements: [],
        experience: [
          {
            eTitle: "Instructor at SCERM Universitas Nasional",
            eTime: "2019",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Development of ecotourism based on biodiversity potential in Tambolongan Island and Polassi Island, Selayar Regency, South Sulawesi",
              dPoint: [],
            },
          },
          {
            eTitle: "Instructor at Universitas Nasional",
            eTime: "2020",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Development of tourism based on biodiversity potential in several urban green spaces in Manis City Pangkalan Bun, Central Kalimantan",
              dPoint: [],
            },
          },
          {
            eTitle: "Instructor at Universitas Nasional",
            eTime: "2022",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Nature conservation training and marine biota introduction to support marine ecotourism in Kelapa Island, Thousand Islands, DKI Jakarta",
              dPoint: [],
            },
          },
          {
            eTitle: "Speaker at Smiling Coral Indonesia (SCI)",
            eTime: "2023",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Ecotourism socialization based on marine biota in front of tourist group participants from Burung Indonesia in Pramuka Island, Thousand Islands",
              dPoint: [],
            },
          },
          {
            eTitle: "Advisor at Smiling Coral Indonesia (SCI)",
            eTime: "2019 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Education, research, and ecotourism activities at Smiling Coral Indonesia (SCI), an NGO engaged in marine resource conservation, research, marine ecosystem restoration, ecotourism development, and capacity building for coastal community human resources",
              dPoint: [],
            },
          },
        ],
      },
      {
        index: 3,
        name: "Desfara Anggreani",
        image: desfara,
        lastEducation: "Social Activist",
        description:
          "I am a bachelor's student in the Faculty of Health Sciences. I learn a lot from people, especially about how connections are created through events. I am skilled in public speaking, which has led me to win debate competitions and participate in international conferences. I have also been involved in several organizations, which has heightened my awareness of social issues. To manifest that interest, I lead a learning guidance program called Rumah Belajar.",
        achievements: [
          "Master of Ceremony",
          "1st Winner Project SDGs in International Youth Experience 2024",
          "Speaker in International Youth Experience 2024",
          "Coordinator Volunteer",
          "Narasumber 'Cerita Anak Perawat'",
          "Juara 2 Karya Tulis Ilmiah Nasional UNAS Fest 2023",
          "Juara 1 Essay Competition Nasional Teras Student",
          "Juara Harapan 1 Cipta Puisi D'Science USU 2023",
          "Juara 1 Regianol III Public Speaking AIPVIK",
          "Juara 2 Video Edukasi Kesehatan Poltekkes Kaltim 2023",
          "Juara 3 Olimpiade Bahasa Inggris PUSPRESNAS",
          "1st Winner in Infographic Poster Competition Akasara",
          "FINALIS (Harapan II) Mahasiswa Berprestasi Indonesia Nursing Olympiad 2023",
          "1st Best Paper in International Youth Exchange and Conferenc",
          "Best Team Youth Leader Exchange and Conference Chapter Singapore, Malaysia and Thailand",
          "Leader Team 'Youth Leader Exchange and Conference Chapter Singapore, Malaysia and Thailand'",
          "Best Author by Meta Publisher",
          "Youth Summit on Leadership and Entrepreneur in Turkey",
          "Digital Marketing Skill Digipreneur Akademi Inspiradzi",
          "Juara 3 Poster PPM School of Management",
          "Spokesperson event of self esteem",
          "Delegation of circular economy and sustainable fashion ASEAN Cooperation",
          "Delegation of visual activism ASEAN Cooperation",
          "Spokesperson of organization Deep Happiest",
        ],
        experience: [
          {
            eTitle: "Founder of Runut Waktu",
            eTime: "August 2023 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Runut waktu aims to help address social issues around education, health, and the environment with real action. In the time series, there are several programs, namely:",
              dPoint: [
                "Runut Waktu Bersama Mengajar (RWBM)",
                "Bincang Aksi (Podcast)",
                "Talk Quotes",
                "Sustainable Development Goals (SDGs) News",
              ],
            },
          },
          {
            eTitle: "Chief Executive Ofcer (CEO) of The Eternals Indonesia",
            eTime: "September 2022 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "The Eternals is a local brand of perfume for all people to feel memories and love themselves. The eternals I build to give other people's memories every day with love and valuable people, and the eternals don't have alcohol to make pregnant women feel safe",
              dPoint: [],
            },
          },
          {
            eTitle: "Founder & CEO of Rumah Belajar",
            eTime: "February 2021 - Present",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "The Eternals is a local brand of perfume for all people to feel memories and love themselves. The eternals I build to give other people's memories every day with love and valuable people, and the eternals don't have alcohol to make pregnant women feel safe",
              dPoint: [],
            },
          },
          {
            eTitle: "Mentor of Twinkling Stars",
            eTime: "March 2021 - September 2022",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Providing mentees with relevant and impactful guidance and training to improve their professional and personal development while keeping them accountable to their goals. Together with the team, I am building a program for mental health journaling called 'Reach to Know Our Emotions with Journaling', reaching over 70 participants.",
              dPoint: [],
            },
          },
          {
            eTitle: "Partnership of World Inspiration Indonesia",
            eTime: "February 2022 - April 2022",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Providing mentees with relevant and impactful guidance and training to improve their professional and personal development while keeping them accountable to their goals. Together with the team, I am building a program for mental health journaling called 'Reach to Know Our Emotions with Journaling', reaching over 70 participants.",
              dPoint: [],
            },
          },
          {
            eTitle: "Division media partner (HEAD) of IILMIKI",
            eTime: "January 2022 - December 2022",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [
                "Fully responsible for fnding and establishing relationships with partners to collaborate or cooperate on programs/projects.",
                "Market a project or program to the public media and become a spokesperson.",
                "Drafting an MoU, TOR and landing page.",
              ],
            },
          },
          {
            eTitle: "Public Relation of Get Wellness Soon",
            eTime: "January 2022 - April 2022",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Get Wellness Soon is an NGO dedicated to upgrading your skills in interpersonal, intrapersonal, and physical health. As a public relationship, I worked on: Maintaining sources well before & after webinar, cooperating with various media partners for media partner purposes, becoming a contact person in terms of media partner submissions from companies /organizations.",
              dPoint: [],
            },
          },
          {
            eTitle: "Brand Ambassador of Indonesia Milennial Connect",
            eTime: "December 2021 - February 2022",
            place: "Indonesia",
            eDesc: {
              dDetail: "Here are my responsibilities:",
              dPoint: [
                "Be willing to outreach to the community, city, or region",
                "Assist in the publicity of MAF events on their respective social media",
                "Coordinate with every internal organization elements",
                "Bring or guide events with professional speakers",
              ],
            },
          },
          {
            eTitle: "Public Relation of Mengelola Emosi Indonesia",
            eTime: "November 2021 - February 2022",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "ME Indonesia is a nationwide platform that focuses on educating about the importance of mental health issues, particularly in the case of emotional regulation. Projects I worked on: Fully responsible for fnding, contacting, and cooperating with sources every day, meeting the demands and needs of the source at an event, compiling a media partner database for event publication purposes, preparing the administration of media liaison teams such as TOR, MoU, media partner logos, and source material.",
              dPoint: [],
            },
          },
          {
            eTitle: "Staf Event Organizer of Twinkling Stars",
            eTime: "September 2021 - March 2022",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Twinkling Stars is a platform for mental health and specializes in raising awareness of mental health. Duty Description: Building strategic planning for the event, managing and acting as an ofcer, fxing the rundown, becoming a host and PIC for some webinar events.",
              dPoint: [],
            },
          },
          {
            eTitle: "Head of Human Resources",
            eTime: "September 2021 - January 2022",
            place: "Indonesia",
            eDesc: {
              dDetail:
                "Supporting young people by sharing discussions on critical thinking, practical self‐development, and health through discussion of formal or informal events about gender equality and women's happiness.",
              dPoint: [],
            },
          },
          {
            eTitle: "Secretary General of ASEAN Youth Organization",
            eTime: "September 2021 - January 2022",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [
                "Write emails, memos and letters",
                "Manage database entry and client fles",
                "Implement and/or develop ofce procedures and record systems",
              ],
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
          "Open your web browser and visit caturnawa.unasfest.com",
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
          "General: Rp170.000",
          "Universitas Nasional Students: Free",
          "Phase 2 (August 12 - August 30, 2024)",
          "General: Rp200.000",
          "Universitas Nasional Students: Free",
        ],
      },
      {
        question:
          "When is the registration deadline for the Scientific Paper Competition (SPC)?",
        answer: [
          "The registration deadline for the Scientific Paper Competition is August 30, 2024",
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
          "The winner announcement will be available on the website caturnawa.unasfest.com",
      },
    ],
  },

  {
    path: "smc",
    caturnawa: "https://caturnawa.unasfest.com/",
    title: "Short Movie Competition",
    coverImage: smcCover,
    contact: smcContact,
    contactNumber: "https://wa.me/6285719219401",
    color: "#C02424",
    description:
      "The Short Movie Competition invites aspiring filmmakers to create and showcase their original short films. This competition aims to encourage creativity and innovation in the field of filmmaking. Participants are given the opportunity to express their unique perspectives through storytelling, direction, and technical execution. Each short film is evaluated based on criteria such as creativity, narrative structure, cinematography, editing, and overall impact. This competition provides a platform for new voices in the film industry and helps participants develop their cinematic skills. It also fosters a community of filmmakers who can learn from each other and collaborate on future projects.",
    timeline: timelinesSMC,
    guideBook:
      "https://drive.google.com/file/d/1k0J4OJ_7g6vAp1Ft8hU6PqWhjo0cI2Rs/view?usp=sharing",
    infiniteSlidingText: "SHORT MOVIE COMPETITION",
    infiniteSlidingIcon: smcSlidingIcon,
    requirementsTitle: "Short Movie Competition Requirements",

    requirements: [
      {
        index: 1,
        detail:
          "Participants of the National Level UNAS FEST 2024 Competition are active students and registered in PDDikti (Pangkalan Data Pendidikan Tinggi).",
      },
      {
        index: 2,
        detail:
          "Participants registered on the official college website for Universitas Nasional from various study programs and State or Private Universities.",
      },
      {
        index: 3,
        detail:
          "Participants of the UNAS FEST 2024 National Competitions are required to comply with all the Rules of Procedure/Rules that exist in the UNAS FEST 2024 National Level activities.",
      },
      {
        index: 4,
        detail:
          "Participants of the UNAS FEST 2024 National Competitions are required to download and follow the regulations listed in the guidebook of each Competition.",
      },
      {
        index: 5,
        detail:
          "National Level UNAS FEST 2024 Competition Participants are required to attend the International Seminar.",
      },
      {
        index: 6,
        detail:
          "National participants of UNAS FEST 2024 participants who attend the Seminar location are not allowed to bring or use drugs/substances/sharp weapons/firearms at the Universitas Nasional.",
      },
      {
        index: 7,
        detail:
          "Participants of the UNAS FEST 2024 National Competitions who violate and do not comply with the Rules/Regulations in the UNAS FEST 2024 National Competitions, the committee has the right to disqualify participants.",
      },
      {
        index: 8,
        detail:
          "Matters that have not been regulated will be regulated later by the Universitas Nasional Student and Alumni Administration Bureau by the objective reality of UNAS FEST 2024 National Level activities.",
      },
    ],

    judgesData: [
      {
        index: 1,
        name: "Jentoni Pakpahan, S.S.",
        image: jentoni,
        linkedin:
          "https://www.linkedin.com/in/jentoni-pakpahan-609a85169/?jobid=1234",
        lastEducation: "Line Producer at PT. MNC Pictures",
        description:
          'Jentoni Pakpahan is a graduate of the Faculty of English Language and Literature from the Universitas Nasional (UNAS). He is a professional in the Indonesian entertainment industry with extensive experience in film and television production. Currently, he works as a Line Producer at PT MNC Pictures since October 2020, and in the same place, he also has work experience as an Assistant Producer from April 2015 to October 2020. In addition, he also has work experience at MD Entertainment as an Assistant Production Manager from 2010 to 2013, and experience working as a freelancer on various film, advertising, and commercial projects. Jentoni Pakpahan has been involved in several successful film projects, including "Kamu Tidak Sendiri" (2021), "Mars and Venus (Collabs Version)" (2020), and "Meet Me After Sunset" (2018).',
        experience: [
          {
            eTitle: "Line Producer - MNC Picture",
            eTime: "June 2015 - Present",
            place: "Jakarta, Indonesia",
          },
          {
            eTitle: "Director Video Project - PT. Perfect Nusantara",
            eTime: "June 2015 - Present",
            place: "Jakarta, Indonesia",
          },
          {
            eTitle: "Assistant Producer Manager - MD Entertainment",
            eTime: "April 2015 - October 2020",
            place: "Jakarta, Indonesia",
          },
        ],
      },
      {
        index: 2,
        name: "Kusen Dony Hermansyah, S.Sos., S.Sn., M.Sn.",
        image: kusen,
        linkedin: "https://www.linkedin.com/in/kusen-dony-535973/",
        lastEducation:
          "Institut Kesenian Jakarta Faculty of Film & Television, Film Department with a Concentration in Film Editing",
        description:
          "Kusen Dony Hermansyah, better known as Dony or Kusdon, he is a graduate of the Faculty of Film and Television from the Institut Kesenian Jakarta and the Postgraduate Program of the Indonesian Institut Kesenian Surakarta. He began his career as a film editor in 1994, especially in documentary films, and after graduating from a diploma program in 2000, he began to pursue two professions as a lecturer and film editor. Dony also teaches at several institutions, including the Politeknik Negri Media Kreatif Jakarta, and has worked in various film genres, including documentaries, soap operas, experimental films, fiction films, and music videos.",
        achievements: [
          "Please Me Love (2012) - Short Editor",
          "Maryam (2014) - Short Editor",
          "Wage (2017)",
          "Bukan Cerita Cinta (This Is Not a Love Story) (2019)",
          "Dilarang Menyanyi di Kamar Mandi (2019)",
          "Kejarlah Daku Kau Kutangkap: The Series (2022) - TV Series Editor",
          "Married by Accident (2021-2022) - TV Mini Series Editor",
          "Teori Dasar Editing Film (2009)",
        ],
        experience: [
          {
            eTitle:
              "Forum Kebudayaan Mahasiswa Indonesia as Founder and Advisor",
            place: "Indonesia",
          },
          {
            eTitle: "Lecturer in World Film History and Basics of Film Art",
            place: "Politeknik Negeri Media Kreatif Jakarta",
          },
          {
            eTitle:
              "Editor in the film 'Hidup dan Alasan', directed by Michelle Hendra Production: Michimomo",
          },
          {
            eTitle:
              "Editor in the film 'Women and Impact', directed by Kennedy Jennifer Dhillon Production: King of the Day Productions",
          },
        ],
      },
      {
        index: 3,
        name: "Raden Daniel Wisnu Wardhana, S.IP., M.A.",
        image: Daniel,
        linkedin: "https://www.linkedin.com/in/daniel-wardana-21878677",
        lastEducation:
          "Chief Operational Officer at PT. Aksara Dimensi Perkasa",
        description:
          "Raden Daniel Wisnu Wardana has been in broadcasting, cinematography and photography for almost 25 years. He also has several experiences in the broadcast world including being a producer for several TV programmes at Production House Triwarsana led by Helmi Yahya. He has also been involved in the world of Production House for almost 5 years since 2003. In addition, he was a product specialist at Canon Indonesia for almost 3 years. Photography and videography are the main fields that he teaches at several campuses such as Universitas Mercubuana, Universitas Sahid, Universitas Trisakti, and Universitas Nasional since 2011 until now. Since 2021, he has returned to establish a startup company in the audio visual field that collaborates with more than 150 digital platforms such as Spotify, Apple Music, YouTube Music, and others.",
        achievements: [
          "2013 Favorite Winner of the Documentary Film Festival at SBM Golden Lens, Erasmus Huis Jakarta",
          "2000 DOP Nomination at the Dallas Film Festival",
          "2000 DOP Nominations at the Studentfilmfestival.com Film Festival",
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
              "Secretary of the Communication Science Study Program - Universitas Nasional (UNAS)",
            eTime: "January 2014 - January 2018",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail:
                "Managing Lecturers for Each Course, Managing Transfer Students",
              dPoint: [],
            },
          },
          {
            eTitle: "Lecture - Universitas Mercubuana",
            eTime: "April 2011 - May 2015",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail:
                "Teaching Cinematography, Videography, and Photography Courses",
              dPoint: [],
            },
          },
          {
            eTitle: "Lecture - Universitas Sahid",
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
          "Open your web browser and visit caturnawa.unasfest.com",
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
          "Early Bird (July 23 - July 28 , 2024)",
          "General: Rp300.000",
          "Universitas Nasional Students: Free",
          "Phase 1 (July 29 - August 11, 2024)",
          "General: Rp400.000",
          "Universitas Nasional Students: Free",
          "Phase 2 (12 - 23 August)",
          "General: Rp450.000",
          "Universitas Nasional Students: Free",
        ],
      },
      {
        question:
          "When is the registration deadline for the Short Movie Competition (SMC)?",
        answer: [
          "The registration deadline for the Short Movie Competition is September 7, 2024",
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
          "The winner announcement will be available on the website caturnawa.unasfest.com",
      },
    ],
  },

  {
    path: "international-seminar",
    caturnawa:
      "https://docs.google.com/forms/d/e/1FAIpQLSepQOrPn_DW_vkDciVrywPM2DUn-AALnUsyutpRerIqrt7kLw/viewform",
    title: "international seminar",
    coverImage: semnasCover,
    contact: semnasContact,
    contactNumber: "https://wa.me/6288219445100",
    color: "#853EB6",
    description:
      "The International Seminar is a global forum designed to facilitate knowledge exchange and dialogue among experts, academics, and practitioners from various fields. This seminar provides a platform for discussing cutting-edge research, emerging trends, and innovative solutions on a range of international issues. Participants include researchers, policymakers, industry leaders, and students who come together to share their insights and collaborate on global challenges.",
    timeline: timelinesSemnas,
    infiniteSlidingText: "International Seminar",
    infiniteSlidingIcon: internationalSeminarIcon,
    requirementsTitle: "International Seminar Requirements",

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
        linkedin:
          "https://www.linkedin.com/in/adam-adiwinata-9028135b/?jobid=1234",
        lastEducation:
          "MASTER, Renewable and Clean Energy - University of Dayton",

        description:
          "User graduated from the University of Indonesia majoring in Mechanical Engineering focusing on energy conversion and has a master's degree in renewable and clean energy from the University of Dayton, Ohio. During their master's study, their focus was on energy efficiency, and they were part of the Building Energy Center at the University of Dayton, where they conducted energy audits for commercial buildings and manufacturers in the Dayton, Ohio area. They assisted customers by assessing energy usage, identifying, and calculating energy-saving opportunities. I am currently working as technical adviser for HEAT Gmbh and managing energy efficiency project all around Indonesia.",
        achievements: [""],
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
        linkedin:
          "https://www.linkedin.com/in/eniya-listiani-dewi-a17b6260/?jobid=1234",
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
              dDetail: "",
              dPoint: [],
            },
          },

          {
            eTitle:
              "Deputy Chairperson for Information Energy and Material - The Agency for the Assessment and Application of Technology (BPPT)",

            eTime: "November 2018 - September",
            place: "Jakarta, Indonesia",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Deputy Chairperson for Agroindustrial and Biotechnology - Badan Pengkajian dan Penerapan Teknologi",

            eTime: "November 2018 - September",
            place: "MH. Thamrin 8, 10F, Jakarta",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle:
              "Director of Center for Materials Technology - Agency for the Assessment and Application of Technology (BPPT)",

            eTime: "July 2014 - September 2015",
            place: "224Bld. Kawasan Puspiptek Serpong",
            eDesc: {
              dDetail: "",
              dPoint: [],
            },
          },
          {
            eTitle: "Head Division of Renewable Energy - TPSE",

            eTime: "February 2014 - July 2014",
            place: "Indonesia",
            eDesc: {
              dDetail: "",
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
        linkedin: "https://www.linkedin.com/in/jasonamiri/?jobid=1234",
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
              dDetail: "",
              dPoint: [],
            },
          },
        ],
      },
      {
        index: 2,
        name: "Judge kdbi 2",
        image: lizie,
        linkedin:
          "https://www.linkedin.com/in/lizie-daniela-tentler-prola-175b0934/?jobid=1234",
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
              dDetail: "",
              dPoint: ["", "", ""],
            },
          },
        ],
      },
      {
        index: 3,
        name: "Judge kdbi 3",
        image: ovi,
        linkedin: "https://www.linkedin.com/in/olding/?jobid=1234",
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
              dDetail: "",
              dPoint: [],
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
          "What are the benefits I will get as a participant of the International Seminar?",
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
