import Image from "next/image";
import Container from "../ui/container";
import { GoArrowUpRight } from "react-icons/go";

export default function HeroSection() {
  return (
    <section className="bg-black relative">
      <Container className="grid grid-cols-1 xl:grid-cols-2 gap-4 min-h-screen">
        <div className="hidden xl:flex flex-col items-start justify-center gap-8 text-start ">
          <div className="flex gap-2 items-center text-lg back bg-[#28282C] rounded-4xl py-2 px-4">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/40" >
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
            <div className="text-white">Available for work</div>
          </div>
          <h1 className="text-6xl font-light leading-tight text-white">
            Your trusted partner for quality home improvement
          </h1>
          <p className="text-xl  text-[#D0D1DB]">
            LifetimeArt delivers expert home improvements, creating beautiful and functional spaces with quality craftsmanship.
          </p>
          <button className="bg-[#28282C] py-4 px-6 flex items-center gap-4 rounded-full text-white text-xl">
            <span>Work with us</span>
            <GoArrowUpRight className="text-black bg-white rounded-full w-10 h-10 p-2" />
          </button>
        </div>
        <div className="flex justify-center py-10">
          <div className="relative w-full h-[calc(100vh-5rem)] mx-auto my-auto overflow-hidden rounded-xl">
            <Image
              src="/Kitchen.png"
              alt="Modern Kitchen"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 pointer-events-none xl:hidden block" />
            <div className="absolute inset-0 z-10 flex xl:hidden flex-col items-start justify-end gap-8 text-start p-6 md:p-10">
              <div className="flex gap-2 items-center text-lg back bg-[#28282C] rounded-4xl py-2 px-4">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/40">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <div className="text-white">Available for work</div>
              </div>
              <h1 className="text-4xl md:text-6xl font-light leading-tight text-white">
                Your trusted partner for quality home improvement
              </h1>
              <p className="text-lg md:text-xl text-[#D0D1DB]">
                LifetimeArt delivers expert home improvements, creating beautiful
                and functional spaces with quality craftsmanship.
              </p>
              <button className="bg-[#28282C] py-4 px-6 flex items-center gap-4 rounded-full text-white text-xl">
                <span>Work with us</span>
                <GoArrowUpRight className="text-black bg-white rounded-full w-10 h-10 p-2" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
