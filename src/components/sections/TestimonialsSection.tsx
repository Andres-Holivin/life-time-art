import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Container from "../ui/container";

interface Testimonial {
  readonly name: string;
  readonly rating: number;
  readonly text: string;
  readonly image: string;
}

const testimonials: readonly Testimonial[] = [
  {
    name: "Emily Carter",
    rating: 5,
    text:
      "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!",
    image: "/person.png",
  },
  {
    name: "Emily Carter",
    rating: 5,
    text:
      "I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
    image: "/person.png",
  },
  {
    name: "Emily Carter",
    rating: 5,
    text:
      "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finishis excellent. A great team to work with!",
    image: "/person.png",
  }
];

function TestimonialCard({ t }: Readonly<{ t: Testimonial }>) {
  return (
    <div className="testimonial-card-tilt shrink-0 w-[320px] max-w-[90vw] rounded-md border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col items-start gap-4">
        <div className="flex ">
          {Array.from({ length: t.rating }).map((_, idx) => (
            <FaStar key={`star-${t.name}-${idx}`} className="h-4 w-4" />
          ))}
        </div>
        <p className="text-sm leading-7 text-gray-700">&quot;{t.text}&quot;</p>
        <div className="flex items-center gap-3">
          <Image
            src={t.image}
            alt={t.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">{t.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ reverse, duration }: Readonly<{ reverse?: boolean; duration: string }>) {
  const repeat = 8;
  const base = testimonials.map((t, baseIdx) => ({ t, baseIdx }));
  const items = Array.from({ length: repeat }).flatMap((_, r) =>
    base.map(({ t, baseIdx }) => ({ data: t, uid: `${t.name}-${baseIdx}-rep-${r}` }))
  );

  return (
    <div className="relative overflow-hidden">
      {/* The scrolling lane */}
      <div
        className={`testimonials-marquee ${reverse ? "reverse" : ""}`}
        style={{ animationDuration: duration }}
      >
        {items.map((item) => (
          <TestimonialCard key={item.uid} t={item.data} />
        ))}
      </div>

      {/* Soft gradient fades on both sides */}
      <span className="testimonials-fade-left" aria-hidden="true" />
      <span className="testimonials-fade-right" aria-hidden="true" />
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <Container className="py-20">
      <div className="">
        <div className="mb-16 flex flex-col items-center justify-center gap-2">
          <p className="text-sm bg-[#28282C] rounded-4xl py-2 px-4 w-fit text-white">Testimonials</p>
          <h2 className="mb-4 text-4xl font-light text-gray-800">Hear from our clients</h2>
          <p className="mx-auto max-w-[600px] text-lg leading-7 text-gray-600 text-center">
            Hear from our happy clients about their experience working with Refit and the quality of our craftsmanship.
          </p>
        </div>

        {/* Two-row marquee like in the reference image */}
        <div className="flex flex-col gap-8">
          <MarqueeRow duration="40s" />
          <MarqueeRow reverse duration="52s" />
        </div>
      </div>
    </Container>
  );
}
