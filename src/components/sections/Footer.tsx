import Image from "next/image";
import Container from "../ui/container";

const footerSections = [
  { label: "About us", href: "#what-we-do" },
  { label: "Our work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <div className="mx-4">
      <Container className="bg-black py-12  mt-2 rounded-t-2xl">
        <div className="">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <h3 className="text-lg font-light text-white">LifetimeArt</h3>
            </div>

            <div className="flex flex-col md:items-end">
              <div className="flex flex-col gap-4">
                <p className="text-lg font-medium text-white">Quick links</p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-12">
                  {footerSections.map((item) => (
                    <a
                      href={`${item.href}`}
                      key={item.label}
                      className="text-left text-sm text-gray-400 hover:text-orange-400"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-600 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-gray-400">
                © 2025 LifetimeArt. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
