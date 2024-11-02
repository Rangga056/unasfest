
// DEPUTY PROJECT MANAGER
import taqi from "@/public/assets/images/about-us/committee/taqi.jpg";
import adel from "@/public/assets/images/about-us/committee/adel.jpg";
import risma from "@/public/assets/images/about-us/committee/risma.jpg";

// ASISTANT PROJECT MANAGER (EVENT)
import salysia from "@/public/assets/images/about-us/committee/salysia.jpg";
import ghandi from "@/public/assets/images/about-us/committee/gandhi.jpg";
import manda from "@/public/assets/images/about-us/committee/manda.jpg";
import jp from "@/public/assets/images/about-us/committee/jp.jpg";
import ronald from "@/public/assets/images/about-us/committee/ronald.jpg";


// ASISTANT PROJECT MANAGER (GENERAL)
import abdul from "@/public/assets/images/about-us/committee/abdul.jpg";
import faiz from "@/public/assets/images/about-us/committee/faiz.jpg";
import rafli from "@/public/assets/images/about-us/committee/rafli.jpg";
import sabina from "@/public/assets/images/about-us/committee/shabina.jpg";
import feby from "@/public/assets/images/about-us/committee/feby.jpg";

// ASISTANT PROJECT MANAGER (ADVERTISE AND PHARNERSHIP)
import alawi from "@/public/assets/images/about-us/committee/alawi.jpg";
import azkia from "@/public/assets/images/about-us/committee/azkiya.jpg";
import azka from "@/public/assets/images/about-us/committee/azka.jpg";
import adin from "@/public/assets/images/about-us/committee/adin.jpg";
import zalma from "@/public/assets/images/about-us/committee/salma.jpg";
import { StaticImageData } from "next/image";

export interface DPMItem {
    id: number;
    name: string;
    role: string;
    image: StaticImageData;
  }

export const DPM: DPMItem[] = [
    {
        id:1,
        name: "Taqiyya Hasya Tsabitha",
        role: "Deputy Event Manager",
        image: taqi
    },
    {
        id:2,
        name: "Adelia Putri Handayani",
        role: "Deputy Manager for Advertising & Partnership",
        image: adel
    },
    {
        id:3,
        name: "Risma Akhwat",
        role: "Deputy General Manager",
        image: risma
    }
]

export const APM: DPMItem[] = [
    // EVENT
    {
        id:1,
        name: "Salysia Manif Fatiha",
        role: "Dept. Debate",
        image: salysia
    },
    {
        id:2,
        name: "Rizky Wahyu Sugandhi",
        role: "Dept. Short Movie",
        image: ghandi
    },
    {
        id:3,
        name: "Almanda Fatimah Azzahra",
        role: "Dept. Scientific Paper Competition",
        image: manda
    },
    {
        id:4,
        name: "Raihan Zhafran Prayogi",
        role: "Dept. International Seminar",
        image: jp
    },
    {
        id:5,
        name: "Ronald Lakhomizaro Gulo",
        role: "Dept. Entertainment",
        image: ronald
    },

    // GENERAL
    {
        id:6,
        name: "Abdul Gofur",
        role: "Dept. Security",
        image: abdul
    },
    {
        id:7,
        name: "Faiz Chalimatussa'diah",
        role: "Dept. Finance",
        image: faiz
    },
    {
        id:8,
        name: "Alfarizky Esah Raffliansyah",
        role: "Dept. Infrastructure",
        image: rafli
    },
    {
        id:9,
        name: "Shabrina azka",
        role: "Dept. Health",
        image: sabina
    },
    {
        id:10,
        name: "Febiana Azhari",
        role: "Dept. F&B",
        image: feby
    },

    // ADVERTISE AND PHARNERSHIP
    {
        id:11,
        name: "Achmad Maulana Alawi",
        role: "Dept. Information Technology",
        image: alawi
    },
    {
        id:12,
        name: "Azkia Huzaima",
        role: "Dept. Public Relation",
        image: azkia
    },
    {
        id:13,
        name: "Muhammad Azka Najhan",
        role: "Dept. Advertising",
        image: azka
    },
    {
        id:14,
        name: "Adin Fadillah",
        role: "Dept. Adinda Pramestia",
        image: adin 
    },
    {
        id:15,
        name: "Zalma Nabila Taufik",
        role: "Dept. Partnership",
        image: zalma
    }
]