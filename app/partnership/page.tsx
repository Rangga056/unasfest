import { Card, CardContent, CardTitle } from "@/components/ui/card";
import banner from "@/public/assets/images/partnership/banner.png";
import vector31 from "@/public/assets/images/partnership/Vector 31.png";
import Image from "next/image";
import sample from "@/public/assets/images/partnership/sample.png";

const Partnership = () => {
  return (
    <div className="container ">
      <div className=" relative">
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

        <Card className="container flex items-center justify-center overflow-hidden rounded-none pb-2 text-center align-middle">
          <CardContent className="w-2/3 text-start">
            <CardTitle className="pb-4 text-start text-6xl leading-snug">
              Sponsor Our Competition for the Future of Energy
            </CardTitle>
            <p className="w-[80%] pb-4 text-xl font-medium">
              This activity is an open competition for the public at the student
              level.
            </p>
            <p className="w-[80%] text-xl">
              There are 4 branches of competition in this activity, namely
              Scientific Paper Competition (SPC), English Debate Competition
              (EDC), Kompetisi Debat Bahasa Indonesia (KDBI) and Short Movie
              Competition (SHC)
            </p>
          </CardContent>
          <CardContent className="w-1/2 "></CardContent>
        </Card>
      </div>

      <Card className="mb-12 w-full overflow-hidden rounded-none bg-[#1F1E23] pb-2">
        <div className="container">
          <CardTitle className="pb-10 text-5xl font-normal text-white">
            our sponsor
          </CardTitle>
          <CardContent className="flex flex-wrap justify-center gap-5">
            <div className="w-[400px] bg-white p-5">
              <Image src={sample} alt="sample" className="mx-auto" />
              <h3 className="mt-2 text-base">Good Day</h3>
              <p className="font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, in!
              </p>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Partnership;
