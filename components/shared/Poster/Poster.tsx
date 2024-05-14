import { postersData } from "@/constants/posterDatas";
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import PosterSwipe from "@/components/ui/posterswipe";
import { posterDatasProps } from "@/lib/types/Poster";

interface Props extends posterDatasProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Poster = ({ title, description }: Props) => {
  return (
    <section className="relative mt-20 w-full max-w-screen-xl m-auto lg:w-[90%] mb-12">
      <Card className="pb-2 text-center overflow-hidden">
        <CardTitle className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl">
          {title}
        </CardTitle>
        <CardDescription className="text-sm tracking-wide font-normal leading-normal mb-16 lg:text-xl">
          {description}
        </CardDescription>
        <CardContent className="w-full h-full">
            <PosterSwipe posterDatas={postersData} />
        </CardContent>
      </Card>
    </section>
  );
};

export default Poster;
