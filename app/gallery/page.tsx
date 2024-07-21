import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import galleryHeader from "@/public/assets/images/gallery/header.png";
export default function Gallery() {
  return (
    <section>
      <div className="relative mx-auto w-full max-w-screen-2xl">
        <Image
          src={galleryHeader}
          alt="gallery header"
          className="mx-auto w-full"
        />
        <p className="absolute left-20 top-1/2 z-50 hidden font-bungee text-5xl leading-tight tracking-wide text-white shadow-lg lg:block">
          <span className="text-[#C02424]">Canvas of Triumph: </span>
          <br />
          An Artistic Showcase of
          <br /> Unforgettable Moments
          <br />
          from Our Competition
        </p>
      </div>

      <Card className="relative m-auto mb-12 mt-20 w-full max-w-screen-xl overflow-hidden lg:w-[90%]">
        <CardTitle className="text-center text-3xl font-semibold uppercase leading-normal tracking-wide md:text-4xl lg:text-5xl">
          kaleidoscope <span className="text-[#C02424]">unas fest 2024</span>
        </CardTitle>
        <CardContent className="pt-10">
          <div className="w-full">
            <iframe
              src="https://www.youtube.com/embed/XWlBhQ9dFUQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
             className="aspect-video w-full mx-auto"/>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
