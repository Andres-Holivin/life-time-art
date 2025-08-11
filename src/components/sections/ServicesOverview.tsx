"use client";

import Image from "next/image";
import Container from "../ui/container";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const services = [
  { image: "/item4.png", title: "Kitchen Renovation" },
  { image: "/Bathroom.png", title: "Bathroom Design" },
  { image: "/item3.png", title: "Home Extension" },
  { image: "/item1.png", title: "Loft Conversion" },
  { image: "/External Works.png", title: "Garden Design" },
];

export default function ServicesOverview() {
  const autoplay = useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    [autoplay.current]
  );

  return (
    <section className="flex flex-col min-h-screen gap-8">
      <Container className="grid grid-cols-1 md:grid-cols-2 items-center py-24 gap-12">
        <div className="flex flex-col gap-4 ">
          <p className="bg-black py-2 px-4 rounded-4xl w-fit text-white">About us</p>
          <h1 className="text-4xl font-medium text-gray-800">Home<br />Improvement<br />Specialists</h1>
        </div>
        <p className="text-start text-lg">
          Welcome to LifetimeArt , your trusted home improvement experts, dedicated to transforming homes with precision and care. With years of experience in building kitchens, bathrooms, garages, and more, we take pride in delivering top-quality craftsmanship and a seamless customer experience. Our mission is to bring your vision to life while ensuring clear communication and expert guidance at every step. Let’s create a home you’ll love!
        </p>
      </Container>
      <div className="relative px-6">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -mx-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="min-w-0 shrink-0 flex-[0_0_80%] md:flex-[0_0_33%] lg:flex-[0_0_25%] px-3"
              >
                <div className="relative h-[420px] md:h-[60vh] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                    priority={service.title === "Kitchen Renovation"}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-medium">{service.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
