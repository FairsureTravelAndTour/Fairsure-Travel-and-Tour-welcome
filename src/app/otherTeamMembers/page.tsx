import Image from "next/image";
import React from "react";

const OtherMembers = [
	{
		name: "Joshua ihwen",
		position: "IT Manager",
		description:
			"Joshua Ihwen is an IT Manager at Fairsure Travel Limited, with a Computer Science background from FUT Minna. He specializes in IT infrastructure and digital transformation, ensuring secure and efficient operations while driving technological growth.",
		image: "/joshua.webp",
	},
	{
		name: "Chimaroke Amadi",
		position: "Web designer",
		description:
			"Chimaroke Amadi is a skilled Frontend Developer at Fairsure Travel Limited, responsible for designing and developing the company's website for a seamless and engaging user experience. With expertise in modern web technologies, Chimaroke ensures the site is responsive, visually appealing, and optimized for performance, enhancing the digital presence of Fairsure Travel.",
		image: "/Chimaroke.webp",
	},
];

const page = () => {
	return (
		<div className="bg-gray-50">
			<header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/bg8.webp')" }}>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
					<h1 className="text-6xl font-bold">Other Team Members</h1>
				</div>
			</header>

			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="space-y-16">
						{OtherMembers.map((member, index) => (
							<div key={index} className="grid md:grid-cols-12 gap-12 items-center">
								<div className={`md:col-span-4 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
									<div className="relative">
										<Image
											src={member.image}
											width={400}
											height={400}
											alt={member.name}
											className="rounded-lg shadow-lg"
										/>
									</div>
								</div>
								<div className={`md:col-span-8 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
									<h2 className="text-4xl font-bold mb-2">{member.name}</h2>
									<p className="text-2xl text-gray-500 mb-6">{member.position}</p>
									<p className="text-gray-600 leading-relaxed">{member.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default page;
