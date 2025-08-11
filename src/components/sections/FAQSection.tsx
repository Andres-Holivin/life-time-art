"use client";

interface FAQItem {
  readonly q: string;
  readonly a: string;
}

const faqItems: readonly FAQItem[] = [
  {
    q: "What area are you based in?",
    a: "We primarily serve London and the surrounding areas, but depending on the project, we can travel further. Contact us to discuss your location and requirements.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary depending on size and complexity. We’ll provide an estimated schedule during your consultation and keep you updated throughout the process.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes, we offer free, no-obligation quotes. Our team will visit your property, assess your needs, and provide a detailed breakdown.",
  },
  {
    q: "Will I need planning permission for my project?",
    a: "This depends on the type and scope of your project. We can guide you through local regulations and help with applications if needed.",
  },
  {
    q: "Do you provide a guarantee for your work?",
    a: "Absolutely. All of our work is backed by a guarantee for quality and durability, giving you peace of mind.",
  },
  {
    q: "Can I stay in my home while the work is being done?",
    a: "In most cases, yes—though it may depend on the scope of work and areas affected. We’ll discuss options to minimise disruption.",
  },
  {
    q: "How do I get started with a project?",
    a: "Simply get in touch with our team. We’ll arrange a consultation, discuss your ideas, and prepare a tailored plan and quote.",
  },
];

import { useState } from "react";
import { GoArrowUpRight, GoPlus } from "react-icons/go";
import Container from "../ui/container";
import { IoMdClose } from "react-icons/io";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // open first by default

  return (
    <Container className="py-20 min-h-screen">
      <div className="flex md:flex-row flex-col items-start justify-center gap-8">
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="flex gap-2 items-center text-sm back bg-[#28282C] rounded-4xl py-2 px-4 w-fit">
            <div className="text-white">FAQs</div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-800">Answering Your Questions</h2>
          <p className="text-lg leading-7 text-gray-600">
            Got more questions? Send us your enquiry below
          </p>
          <button className="bg-black/10 py-3 px-5 flex items-center gap-4 rounded-full text-black text-xl">
            <span>Work with us</span>
            <GoArrowUpRight className="text-white bg-black rounded-full w-10 h-10 p-2" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {faqItems.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="rounded-md border border-gray-200 bg-[#FAFAFA] p-0 ">
                <button
                  id={`faq-button-${i}`}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-medium text-gray-800">{faq.q}</span>
                  <span
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full  text-gray-600"
                    aria-hidden
                  >
                    {isOpen ? (
                      <IoMdClose />
                    ) : (
                      <GoPlus />
                    )}
                  </span>
                </button>

                <section
                  id={`faq-panel-${i}`}
                  aria-labelledby={`faq-button-${i}`}
                  className={`grid overflow-hidden px-6 transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="min-h-0">
                    <p className="text-sm leading-6 text-gray-600">{faq.a}</p>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
