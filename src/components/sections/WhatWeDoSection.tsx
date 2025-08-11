"use client";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import Container from "../ui/container";
import { useState } from "react";

const services = [
	{
		title: "Kitchens",
		icon: "/kitchen-icon.png",
		description:
			"At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you prefer sleek modern lines or a timeless, classic look, our team delivers premium craftsmanship, functional layouts, and meticulous attention to detail—creating a kitchen you’ll love to cook and gather in",
	},
	{
		title: "Loft Conversions",
		icon: "/loft-icon.png",
		description:
			"Transform unused loft space into a beautiful, practical part of your home. From cozy bedrooms to bright home offices, we handle everything from structural adjustments to finishing touches, ensuring your new space is safe, stylish, and seamlessly integrated with your existing home.",
	},
	{
		title: "Bathrooms",
		icon: "/bathroom-icon.png",
		description:
			"We create bathrooms that balance relaxation and practicality, with designs ranging from spa-inspired retreats to minimalist, functional spaces. Our team sources high-quality fixtures and finishes, ensuring durability, elegance, and comfort for years to come.",
	},
	{
		title: "Extensions",
		icon: "/extension-icon.png",
		description:
			"Expand your living space without compromising on style. Whether it’s a kitchen extension, a new family room, or an entire additional floor, we work closely with you to design and build an extension that complements your home and adds value.",
	},
	{
		title: "Restorations",
		icon: "/restorations-icon.png",
		description:
			"Preserve the charm of your property while upgrading it for modern living. Our restoration work combines traditional craftsmanship with modern techniques to breathe new life into historic or worn-down spaces.",
	},
	{
		title: "External Works",
		icon: "/external-works.png",
		description:
			"Enhance the beauty and functionality of your outdoor areas. From garden landscaping to patios, pathways, and exterior lighting, we create inviting spaces that connect your home to nature.",
	},
];

export default function WhatWeDoSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<div className="bg-[#FAFAFA]">
			<Container className="py-24 min-h-screen">
				<div className="flex flex-col gap-12">
					<div className="flex flex-col gap-2 items-center">
						<p className="bg-black py-2 px-4 rounded-4xl w-fit text-white">
							Services
						</p>
						<h1 className="text-4xl font-medium text-gray-800">
							What we do
						</h1>
						<p>
							Find out which one of our services fit the needs of your project
						</p>
					</div>
					<div className="grid items-start gap-16 lg:grid-cols-2">
						<div className="relative h-[500px]">
							<Image
								src="/Kitchen.png"
								alt="Modern Kitchen Interior"
								fill
								className="rounded-2xl object-cover"
							/>
						</div>

						<div className="flex w-full flex-col gap-6">
							{/* Accordion list (no outer border, with row dividers) */}
							<div className="rounded-2xl overflow-hidden divide-y divide-gray-200">
								{services.map((service, idx) => {
									const isOpen = openIndex === idx;
									return (
										<div key={service.title}>
											<button
												id={`svc-trigger-${idx}`}
												onClick={() =>
													setOpenIndex(isOpen ? null : idx)
												}
												aria-expanded={isOpen}
												aria-controls={`svc-panel-${idx}`}
												className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
											>
												<div className="flex items-center gap-3">
													<Image
														src={service.icon}
														alt={`${service.title} icon`}
														width={28}
														height={28}
														className="shrink-0"
													/>
													<span className="text-gray-800">
														{service.title}
													</span>
												</div>
												<FiPlus
													className={`text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-45" : "rotate-0"
														}`}
												/>
											</button>

											{/* Collapsible region */}
											<section
												id={`svc-panel-${idx}`}
												aria-labelledby={`svc-trigger-${idx}`}
												className={`grid overflow-hidden transition-all duration-300 ${isOpen
														? "grid-rows-[1fr] opacity-100"
														: "grid-rows-[0fr] opacity-0"
													}`}
											>
												<div className="min-h-0">
													<p className="px-5 pb-5 text-sm leading-6 text-gray-700">
														{service.description}
													</p>
												</div>
											</section>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
