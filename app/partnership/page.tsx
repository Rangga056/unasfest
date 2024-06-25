"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import banner from "@/public/assets/images/partnership/banner.png";
import vector31 from "@/public/assets/images/partnership/Vector 31.png";
import Image from "next/image";
import sample from "@/public/assets/images/partnership/sample.png";

const Partnership = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div className="relative">
        <Image
          src={vector31}
          alt="vector31"
          className="absolute bottom-0 right-0"
        />
        <Card className="relative mb-12 flex w-full items-center justify-center overflow-hidden rounded-none pb-2 text-center align-middle">
          <Image
            src={banner}
            alt="banner"
            className="h-full w-full object-cover object-center"
          />
        </Card>

        <Card className="container overflow-hidden rounded-none pb-2 text-center align-middle">
          <CardContent className="w-[50%] text-start">
            <CardTitle className="pb-4 text-start text-6xl leading-snug">
              Sponsor Our Competition for the Future of Energy
            </CardTitle>
            <p className="pb-4 text-lg font-medium md:w-[80%] md:text-xl">
              This activity is an open competition for the public at the student
              level.
            </p>
            <p className="pb-16 text-lg md:w-[80%] md:text-xl">
              There are 4 branches of competition in this activity, namely
              Scientific Paper Competition (SPC), English Debate Competition
              (EDC), Kompetisi Debat Bahasa Indonesia (KDBI) and Short Movie
              Competition (SHC)
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12 w-full overflow-hidden rounded-none bg-[#1F1E23] py-[70px]">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto md:w-[1193px]">
            <CardTitle className="pb-10 pl-10 font-inter text-3xl font-black uppercase text-white md:pl-0 md:text-5xl ">
              our sponsor
            </CardTitle>
            <div className="flex flex-wrap justify-center gap-5 md:justify-start">
              <div className="w-80 bg-white p-7 md:w-96">
                <Image src={sample} alt="sample" className="mx-auto" />
                <h3 className="mt-2 text-base">Good Day</h3>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, in! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Tempora, nesciunt.
                </p>
                <Button className="mt-5 rounded-none px-10 py-3">
                  See More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mx-auto w-full max-w-screen-xl flex-col items-center overflow-hidden lg:w-[90%]">
        <CardTitle className="pb-5 text-3xl font-semibold leading-normal tracking-wide sm:text-center lg:w-3/5 lg:pl-12 lg:text-start lg:text-5xl">
          frequently asked questions
        </CardTitle>
        <CardContent className="lg:w-[65%] lg:pl-12">
          <FaqActivities faqs={faqsPartnership} />
        </CardContent>
      </Card>

      <Card className="mx-auto max-w-screen-xl">
        <CardContent className="relative">
          <Image src={isMobile ? contactsm : contact} alt="contact" width={1350} className="mx-auto"/>
          <div className="absolute top-7 md:top-[20%] lg:top-1/4 md:left-16 lg:left-24">
            <p className="px-2 md:pb-4 font-bungee font-medium leading-relaxed text-[#FFFAF0] md:w-[70%] lg:w-1/2 md:text-3xl lg:text-5xl">
              can we help you? get in touch with our contact person!
            </p>
            <div className="flex flex-wrap w-[70%] md:w-full gap-3 ml-2">
              {contactsData.map((contact) => (
                <Link href={contact.whatsApp} key={contact.index}>
                  
                <button
                  className="flex gap-1 md:gap-3 bg-[#FFFAF0] px-2 py-1 md:px-9 md:py-3"
                >
                  <Image src={whatsap} alt="whatsap" className="w-3 md:w-7 my-auto" />
                  <p className="text-sm md:text-base lg:text-xl">{contact.title}</p>
                </button>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Partnership;
