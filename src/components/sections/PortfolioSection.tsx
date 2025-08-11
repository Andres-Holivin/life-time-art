import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import Container from "../ui/container";
import { cn } from "@/lib/util";

const portfolioItems = [
  {
    title: "Modern kitchen refit",
    description:
      "This kitchen transformation brought sleek, modern design and enhanced  functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.",
    imageSrc: "/kitchen-modern.png",
    badge: ["Kitchen", "4 weeks"],
    comment: {
      text: "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
      author: "Rachel Morgan",
      picture: "/comment-person-1.png"
    }
  },
  {
    title: "External garden path build",
    description:
      "Our team designed and built a durable, visually appealing garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape, providing both functionality and aesthetic charm. The result is a stylish, well-crafted path that elevates the overall garden design.",
    imageSrc: "/garden-modern.png",
    badge: ["External Works", "6 weeks"],
    comment: {
      text: "The team at LifetimeArt did an amazing job on our garden path. It’s sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted—highly recommended!",
      author: "Michael Turner",
      picture: "/author-2.png"
    }
  },
  {
    title: "Bathroom renovation",
    description:
      "We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both comfort and functionality.",
    imageSrc: "/modern-bathroom.png",
    badge: ["Bathroom", "4 weeks"],
    comment: {
      text: "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
      author: "Laura Davies",
      picture: "/author-3.png"
    }
  },
] as const;

export default function PortfolioSection() {
  return (
    <div className="pt-24 mx-4">
      <div className="mb-16 flex flex-col items-center justify-center gap-2">
        <p className="text-sm bg-[#28282C] rounded-4xl py-2 px-4 w-fit text-white">Our work</p>
        <h2 className="mb-4 text-4xl font-light text-gray-800">Get inspired by our work</h2>
        <p className="mx-auto max-w-[600px] text-lg leading-7 text-gray-600 text-center">
          See how we’ve transformed homes with our expert craftsmanship and attention to detail.
        </p>
      </div>
      {portfolioItems.map((item, i) => (
        <Container key={`showcase-${item.title}`} className={cn(`py-8 my-32 rounded-2xl`, i % 2 === 0 ? "bg-[#E9ECF2]" : "bg-black text-white")}>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative h-[500px]">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className={`flex flex-col items-start gap-8 `}>
                <div>
                  <h3 className="mb-4 text-3xl font-medium">{item.title}</h3>
                  <p className={`leading-7 `}>{item.description}</p>
                </div>
                <div>
                  {item.badge.map((badge, index) => (
                    <span key={index + badge} className="mr-2 rounded-full bg-black px-3 py-1 text-sm text-white">
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <RiDoubleQuotesL className="w-8 h-8" />
                  <div>{item.comment.text}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src={item.comment.picture}
                    alt={item.comment.author}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="ml-2 text-lg font-medium">{item.comment.author}</span>
                </div>
              </div>
            </div>
        </Container>
      ))}
    </div>
  );
}
