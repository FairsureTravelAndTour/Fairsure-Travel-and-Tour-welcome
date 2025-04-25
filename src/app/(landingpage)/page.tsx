"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("../_components/Hero/Hero"), {
	ssr: false,
	loading: () => <div>Loading...</div>,
});
const WhyChooseUs = dynamic(
	() => import("../_components/WhyChooseUs/WhyChooseUs"),
	{ ssr: false, loading: () => <div>Loading...</div> }
);
const Testimonials = dynamic(
	() => import("../_components/Testimonials/Testimonials"),
	{ ssr: false, loading: () => <div>Loading...</div> }
);

export default function Welcome() {
	return (
		<div className="w-full">
			<HeroSection />
			<div className="flex flex-col items-center">
				<WhyChooseUs />
				<Testimonials />
			</div>
		</div>
	);
}
