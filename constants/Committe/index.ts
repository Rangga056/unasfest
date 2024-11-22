// PROJECT MANAGER
import shafa from "@/public/assets/images/about-us/committee/shafa.webp";

// DEPUTY PROJECT MANAGER
import taqi from "@/public/assets/images/about-us/committee/taqi.jpg";
import adel from "@/public/assets/images/about-us/committee/adel.webp";
import risma from "@/public/assets/images/about-us/committee/risma.webp";

// ASISTANT PROJECT MANAGER (EVENT)
import salysia from "@/public/assets/images/about-us/committee/salysia.jpg";
import ghandi from "@/public/assets/images/about-us/committee/gandhi.webp";
import manda from "@/public/assets/images/about-us/committee/manda.webp";
import jp from "@/public/assets/images/about-us/committee/jp.webp";
import ronald from "@/public/assets/images/about-us/committee/ronald.webp";

// ASISTANT PROJECT MANAGER (GENERAL)
import sabina from "@/public/assets/images/about-us/committee/shabina.jpg";
import abdul from "@/public/assets/images/about-us/committee/abdul.webp";
import faiz from "@/public/assets/images/about-us/committee/faiz.webp";
import rafli from "@/public/assets/images/about-us/committee/rafli.webp";
import feby from "@/public/assets/images/about-us/committee/feby.webp";

// ASISTANT PROJECT MANAGER (ADVERTISE AND PHARNERSHIP)
import alawi from "@/public/assets/images/about-us/committee/alawi.webp";
import azkia from "@/public/assets/images/about-us/committee/azkiya.webp";
import azka from "@/public/assets/images/about-us/committee/azka.webp";
import adin from "@/public/assets/images/about-us/committee/adin.webp";
import zalma from "@/public/assets/images/about-us/committee/salma.webp";
import { StaticImageData } from "next/image";

// creator
import adelin from "@/public/assets/images/about-us/creator/panit2023/adeline.jpg";
import bisyr from "@/public/assets/images/about-us/creator/panit2023/bisyr.jpg";
import abija from "@/public/assets/images/about-us/creator/panit2023/abija.jpg";
import camel from "@/public/assets/images/about-us/creator/panit2023/camel.jpg";
import duhan from "@/public/assets/images/about-us/creator/panit2023/duhan.jpg";
import govin from "@/public/assets/images/about-us/creator/panit2023/govin.jpg";
import hansen from "@/public/assets/images/about-us/creator/panit2023/hansen.jpg";
import jeplin from "@/public/assets/images/about-us/creator/panit2023/jeplin.jpg";
import syafira from "@/public/assets/images/about-us/creator/panit2023/syafira.jpg";
import nirvana from "@/public/assets/images/about-us/creator/panit2023/nirvana.jpg";

import rafi from "@/public/assets/images/about-us/creator/IT/rafi.jpg";
import rehan from "@/public/assets/images/about-us/creator/IT/rehan.jpg";
import rangga from "@/public/assets/images/about-us/creator/IT/rangga.jpg";
import iyan from "@/public/assets/images/about-us/creator/IT/iyan.jpg";
import pancar from "@/public/assets/images/about-us/creator/IT/pancar.jpg";
import afzal from "@/public/assets/images/about-us/creator/IT/afzal.jpg";
import heni from "@/public/assets/images/about-us/creator/IT/heni.jpg";
import hawra from "@/public/assets/images/about-us/creator/IT/aura.jpg";

import albert from "@/public/assets/images/about-us/creator/Entertaint/albert.jpg";
import beby from "@/public/assets/images/about-us/creator/Entertaint/beby.jpg";
import dian from "@/public/assets/images/about-us/creator/Entertaint/dian.jpg";
import farhani from "@/public/assets/images/about-us/creator/Entertaint/farhani.jpg";
import jihan from "@/public/assets/images/about-us/creator/Entertaint/jihan.jpg";
import fira from "@/public/assets/images/about-us/creator/Entertaint/fira.jpg";
import johannes from "@/public/assets/images/about-us/creator/Entertaint/johannes.jpg";
import joshua from "@/public/assets/images/about-us/creator/Entertaint/joshua.jpg";
import mamay from "@/public/assets/images/about-us/creator/Entertaint/mamay.jpg";
import tegar from "@/public/assets/images/about-us/creator/Entertaint/tegar.jpg";

import user from "@/public/assets/images/about-us/avatar-placeholder.png";

export interface DPMItem {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  description?: string;
  member?: string[];
}

export interface APMItem {
  id: number;
  name: string;
  role: string;
  member?: string;
  // image: StaticImageData;
}

export const DPM: DPMItem[] = [
  {
    id: 1,
    name: "Taqiyya Hasya Tsabitha",
    role: "Deputy Event Manager",
    image: taqi,
  },
  {
    id: 2,
    name: "Adelia Putri Handayani",
    role: "Deputy Manager for Advertising & Partnership",
    image: adel,
  },
  {
    id: 3,
    name: "Risma Akhwat",
    role: "Deputy General Manager",
    image: risma,
  },
];

export const APM: DPMItem[] = [
  // EVENT
  {
    id: 1,
    name: "Salysia Manif Fatiha",
    role: "Dept. Debate",
    image: salysia,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident officia molestiae dolorem porro accusantium rerum magnam quaerat sunt dolore? Cumque!",
    member: [
      "user  1",
      "user  2",
    ]
  },
  {
    id: 2,
    name: "Rizky Wahyu Sugandhi",
    role: "Dept. Short Movie",
    image: ghandi,
  },
  {
    id: 3,
    name: "Almanda Fatimah Azzahra",
    role: "Dept. Scientific Paper Competition",
    image: manda,
  },
  {
    id: 4,
    name: "Raihan Zhafran Prayogi",
    role: "Dept. International Seminar",
    image: jp,
  },
  {
    id: 5,
    name: "Ronald Lakhomizaro Gulo",
    role: "Dept. Entertainment",
    image: ronald,
  },

  // GENERAL
  {
    id: 6,
    name: "Abdul Gofur",
    role: "Dept. Security",
    image: abdul,
  },
  {
    id: 7,
    name: "Faiz Chalimatussa'diah",
    role: "Dept. Finance",
    image: faiz,
  },
  {
    id: 8,
    name: "Alfarizky Esah Raffliansyah",
    role: "Dept. Infrastructure",
    image: rafli,
  },
  {
    id: 9,
    name: "Shabrina azka",
    role: "Dept. Health",
    image: sabina,
  },
  {
    id: 10,
    name: "Febiana Azhari",
    role: "Dept. F&B",
    image: feby,
  },

  // ADVERTISE AND PHARNERSHIP
  {
    id: 11,
    name: "Achmad Maulana Alawi",
    role: "Dept. Information Technology",
    image: alawi,
  },
  {
    id: 12,
    name: "Azkia Huzaima",
    role: "Dept. Public Relation",
    image: azkia,
  },
  {
    id: 13,
    name: "Muhammad Azka Najhan",
    role: "Dept. Advertising",
    image: azka,
  },
  {
    id: 14,
    name: "Adinda Pramestia",
    role: "Dept. Secretarial Affairs Department",
    image: adin,
  },
  {
    id: 15,
    name: "Zalma Nabila Taufik",
    role: "Dept. Partnership",
    image: zalma,
  },
];

export const Maskot: DPMItem[] = [
  {
    id: 1,
    name: "Adelin Vinico Yuanita",
    role: "Maskot UNAS FEST 2023 and logo UNAS FEST",
    image: adelin,
  },
  {
    id: 2,
    name: "Muhammad Bisyr",
    role: "Maskot UNAS FEST 2024",
    image: bisyr,
  },
];

export const Music: DPMItem[] = [
  {
    id: 1,
    name: "Ronald Lakhomizaro Gulo",
    role: "Producer Music",
    image: ronald,
  },
  {
    id: 2,
    name: "Syafira Fairuz",
    role: "Song Writer Anthem UNAS FEST",
    image: syafira,
  },
  {
    id: 3,
    name: "Tegar Budiman",
    role: "Song Writer Anthem UNAS FEST",
    image: tegar,
  },
  {
    id: 4,
    name: "Farhani Kurniayu",
    role: "Singer Anthem UNAS FEST",
    image: farhani,
  },
  {
    id: 5,
    name: "Alfarizky Esah Raffliansyah",
    role: "Singer Anthem UNAS FEST",
    image: rafli,
  },
  {
    id: 6,
    name: "Maimunahwaroh Heta Warman",
    role: "Singer Anthem UNAS FEST",
    image: mamay,
  },
  {
    id: 7,
    name: "Camelia Nur Hidayah",
    role: "Seminar Nasional",
    image: camel,
  },
  {
    id: 8,
    name: "Dian Sarah Purba",
    role: "Seminar Nasional",
    image: dian,
  },
  {
    id: 9,
    name: "Tegar Budiman",
    role: "Seminar Nasional",
    image: tegar,
  },
  {
    id: 10,
    name: "Nabila Shafa Sabrina",
    role: "Seminar Nasional",
    image: shafa,
  },
  {
    id: 11,
    name: "Nirvana Putri Rizal",
    role: "Dubbing Voice Over Lumina Verde",
    image: nirvana,
  },
  {
    id: 12,
    name: "Ronald Lakhomizaro Gulo",
    role: "Producer & Arranger Music",
    image: ronald,
  },
  {
    id: 13,
    name: "Joshua Pratama Martinus",
    role: "Producer & Arranger Music",
    image: joshua,
  },
  {
    id: 14,
    name: "Johanes Nathanael Bimambang",
    role: "Producer & Arranger Music",
    image: johannes,
  },
  {
    id: 15,
    name: "Albert Deniel Sitorus",
    role: "BFX",
    image: albert,
  },
  {
    id: 16,
    name: "Beby Alya Rahman Nasution",
    role: "BFX",
    image: beby,
  },
  {
    id: 17,
    name: "Jihan Fauziah",
    role: "Koreografer",
    image: jihan,
  },
];

export const Web: DPMItem[] = [
  {
    id: 1,
    name: "Achmad Maulana Alawi",
    role: "Website UNAS FEST 2024 and Caturnawa 2024",
    image: alawi,
  },
  {
    id: 2,
    name: "Muhammad Rangga Miftahul Falah",
    role: "Website UNAS FEST 2024 and Caturnawa 2024",
    image: rangga,
  },
  {
    id: 3,
    name: "Heni Fitriany",
    role: "Website UNAS FEST 2024 and Caturnawa 2024",
    image: heni,
  },
  {
    id: 4,
    name: "Hawra Fathiya Zahra",
    role: "Website UNAS FEST 2024 and Caturnawa 2024",
    image: hawra,
  },
  {
    id: 5,
    name: "Muhammad Raihan Putra Febrianto",
    role: "Website UNAS FEST 2024 and Caturnawa 2024",
    image: rehan,
  },
  {
    id: 6,
    name: "Moch Rafindra Aditias",
    role: "Website UNAS FEST 2024 and Caturnawa 2024",
    image: rafi,
  },
  {
    id: 7,
    name: "Ferdiansyach",
    role: "Website UNAS FEST 2024 and Caturnawa 2024",
    image: iyan,
  },
  {
    id: 8,
    name: "Afzal Khairahmansyach",
    role: "Website UNAS FEST 2024 and Caturnawa 2024",
    image: afzal,
  },
  {
    id: 9,
    name: "Pancar Hizkia",
    role: "Website UNAS FEST 2024 and Caturnawa 2024",
    image: pancar,
  },
  {
    id: 10,
    name: "Hansen Chandra",
    role: "Website UNAS FEST 2023",
    image: hansen,
  },
  {
    id: 11,
    name: "Ciptoningaji Guridno",
    role: "Website UNAS FEST 2023",
    image: user,
  },
  {
    id: 12,
    name: "Ronald Lakhomizaro Gulo",
    role: "Website UNAS FEST 2023",
    image: ronald,
  },
  {
    id: 13,
    name: "Rizky Wahyu Sugandhi",
    role: "Website UNAS FEST 2023",
    image: ghandi,
  },
  {
    id: 14,
    name: "Rian Hidayat",
    role: "Website UNAS FEST 2023",
    image: user,
  },
  {
    id: 15,
    name: "Abija Bohdan P.",
    role: "Website UNAS FEST 2023",
    image: abija,
  },
  {
    id: 16,
    name: "Arga Mahesa Putra",
    role: "Website UNAS FEST 2023",
    image: user,
  },
  {
    id: 17,
    name: "Govinda Marcelino",
    role: "Website UNAS FEST 2023",
    image: govin,
  },
  {
    id: 18,
    name: "Duhan Maulana Artline",
    role: "Caturnawa UANS FEST 2023",
    image: duhan,
  },
  {
    id: 19,
    name: "Jepplin Sinaga",
    role: "Caturnawa UANS FEST 2023",
    image: jeplin,
  },
];
