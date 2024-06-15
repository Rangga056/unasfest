import { Card, CardContent, CardTitle } from "@/components/ui/card";
import banner from "@/public/assets/images/partnership/banner.png";
import Image from "next/image";

const Partnership = () => {
  return (
    <div>
      <Card className="container relative mb-12 flex flex-col items-center justify-center overflow-hidden rounded-none pb-2 text-center align-middle">
        <CardContent>
          <Image src={banner} alt="banner" />
        </CardContent>
      </Card>

      <Card className="container relative mb-12 flex items-center justify-center overflow-hidden rounded-none pb-2 text-center align-middle">
        <CardContent className="w-1/2">

        <CardTitle className="text-5xl text-start">Sponsor Our Competition for the Future of Energy</CardTitle>
        </CardContent>
        <CardContent className="w-1/2">

        </CardContent>
      </Card>
    </div>
  );
};

export default Partnership;
