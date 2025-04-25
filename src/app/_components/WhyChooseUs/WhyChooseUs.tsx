import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
	const reasons = [
		{
			title: "Affordable Pricing",
			image: "/pricing.webp",
			description: "We offer the best prices for unforgettable experiences.",
		},
		{
			title: "Experienced Guides",
			image: "/guidance.webp",
			description:
				"Our guides are experts with years of experience in the field.",
		},
		{
			title: "24/7 Customer Support",
			image: "/customerSupport.webp",
			description: "We're here to assist you at every step of your journey.",
		},
	];

	return (
		<div className="container flex flex-col pb-10 px-3 lg:px-0">
			<h2 className="text-center lg:py-10 py-5 lg:text-4xl text-2xl font-bold">
				Why Choose Us?
			</h2>
			<div className="flex lg:flex-row items-center flex-col gap-8">
				{reasons.map((reason, index) => (
					<div
						key={index}
						className="flex flex-col w-[300px] lg:w-fit items-center gap-3 bg-gray-300 rounded-2xl pb-5"
					>
						<Image
							height={100}
							width={200}
							src={reason.image}
							alt="image"
							className="lg:w-[500px] w-[300px] rounded-t-2xl"
						/>
						<h2 className="font-semibold">{reason.title}</h2>
						<p className="text-center px-4">{reason.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhyChooseUs;
