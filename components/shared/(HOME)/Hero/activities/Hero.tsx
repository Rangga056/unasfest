import { Button } from "@/components/ui/button";
import HeroImage from "@/public/assets/images/hero-banner.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col gap-[1.5em] text-white container">
      {/* Title */}
      <h1 className="text-5xl py-2 font-bungee font-bold text-page-green tracking-wide text-left">
        Kompetisi Debat Bahasa Indonesia
      </h1>
      <Image
        src={HeroImage}
        alt="Hero Image"
        className="object-cover object-center w-full h-[360px]"
      />
      <p className="text-xl font-medium">
        The Indonesian Language Debate Competition (KDBI) is an Indonesian
        language debate competition where participants compete in arguments and
        thoughts related to contemporary issues from various aspects, namely
        social, politics, culture, technology, economy, energy, law, health and
        so on. Therefore, the Indonesian Language Debate Competition (KDBI) aims
        to improve participants&apos; ability to speak in public, develop
        analytical and critical thinking skills, and strengthen argumentation
        skills using effective and persuasive language. The Indonesian Language
        Debate Competition (KDBI) will have the theme of &quot;Implementation of
        Technology in Blue Economy Policy for...
      </p>
      <div className="flex items-center gap-3">
        <Button
          asChild
          className="rounded-none px-12 text-lg font-semibold"
          size="poster"
          variant="secondary"
        >
          <Link href="/activities/debat-bahasa-indonesia/#">Sign Up</Link>
        </Button>
        <Button
          asChild
          className="rounded-none px-12 text-lg font-semibold bg-transparent border-[4px]"
          size="poster"
          variant="outline"
        >
          <Link href="/activities/debat-bahasa-indonesia/#">See More</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
