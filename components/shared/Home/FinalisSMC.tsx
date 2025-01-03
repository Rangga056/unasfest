import Image from "next/image";
import React from "react";
import agricinema from "@/public/assets/images/home/moviePosters/PosterSinarSuryauntukHarapanPetanicompressed_page-0001.jpg";
import dibalikkandang from "@/public/assets/images/home/moviePosters/PosterDiBalikKandangPolimedia_page-0001.jpg";
import greenbusiness from "@/public/assets/images/home/moviePosters/PosterChargeTheSunTelkomUniversityJakarta_page-0001.jpg";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const FinalisSMC = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center gap-y-4 text-center">
        <h1 className="font-bungee text-2xl md:text-5xl">
          finalist short movie competition
        </h1>
        <p className="font-inter text-sm font-medium capitalize md:text-xl">
          3 finalists with the best short movies
        </p>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center gap-x-8 gap-y-6 text-center md:flex-row">
        <div className="group relative flex flex-col gap-y-2">
          <Link href={"https://youtu.be/X_Q9og7gHtA"}>
            <div className="relative">
              <Image
                src={agricinema}
                alt="movie poster"
                width={350}
                height={525}
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex items-center gap-x-2 text-base font-medium capitalize text-white md:text-xl">
                  Watch Movie <ExternalLink />
                </span>
              </div>
            </div>
          </Link>
          <h3 className="text-lg font-semibold md:text-xl">
            Sinar Surya untuk Harapan Petani
          </h3>
          <p className="md:text-xl">Agricinema</p>
        </div>
        <div className="group relative flex flex-col gap-y-2">
          <Link href={"https://youtu.be/X_Q9og7gHtA"}>
            <div className="relative">
              <Image
                src={dibalikkandang}
                alt="movie poster"
                width={350}
                height={525}
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex items-center gap-x-2 text-base font-medium capitalize text-white md:text-xl">
                  Watch Movie <ExternalLink />
                </span>
              </div>
            </div>
          </Link>
          <h3 className="text-lg font-semibold md:text-xl">Di Balik Kandang</h3>
          <p className="md:text-xl">Politeknik Negeri Media Kreatif Jakarta</p>
        </div>{" "}
        <div className="group relative flex flex-col gap-y-2">
          <Link href={"https://youtu.be/X_Q9og7gHtA"}>
            <div className="relative">
              <Image
                src={greenbusiness}
                alt="movie poster"
                width={350}
                height={525}
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex items-center gap-x-2 text-base font-medium capitalize text-white md:text-xl">
                  Watch Movie <ExternalLink />
                </span>
              </div>
            </div>
          </Link>
          <h3 className="text-lg font-semibold md:text-xl">Charge The Sun</h3>
          <p className="md:text-xl">Green Business</p>
        </div>
      </div>
    </div>
  );
};

export default FinalisSMC;
