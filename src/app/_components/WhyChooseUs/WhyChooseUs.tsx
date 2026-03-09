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
		<div className="bg-gray-100 py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{reasons.map((reason, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
						>
							<div className="relative h-56">
								<Image
									src={reason.image}
									alt={reason.title}
									layout="fill"
									objectFit="cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
								<p className="text-gray-600">{reason.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
