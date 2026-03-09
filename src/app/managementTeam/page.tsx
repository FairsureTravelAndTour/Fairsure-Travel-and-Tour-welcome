import Image from "next/image";
import React from "react";

const managementMembers = [
	{
		name: "CHIMEZIRI ESTHER NKECHINYERE",
		position: "Agency Manager",
		description:
			"Chimeziri Nkechinyere is a seasoned Business Developer and Manager with a BSc in Business Administration from Chukwuemeka Odumegwu Ojukwu University. She holds an Associate Certification from the Institute of Strategic Management Nigeria (ISMN) and a diploma in Business Development from Harmony Innovation Hub. With experience across aviation, hospitality, agriculture, and IT, she has risen to the rank of Business Developer. Currently, she is pursuing her ICAN Certification with the Institute of Chartered Accountants of Nigeria.",
		image: "/esther.webp",
	},
	{
		name: "AYODELE TITILAYO",
		position: "Admin Manager",
		description:
			"Titilayo is the Admin Manager at Fairsure Travel Limited, overseeing daily operations and ensuring smooth administrative processes. With strong organizational and management skills, Titilayo plays a key role in maintaining efficiency, coordinating teams, and supporting the company's growth. Their dedication to structure and operational excellence helps drive Fairsure Travel’s success.",
		image: "/titi.webp",
	},
	{
		name: "Ife Janet Ajayi",
		position: "Social Media manager",
		description:
			"Ife Ajayi is the Social Media Manager at Fairsure Travel Limited, responsible for crafting engaging content, managing online presence, and driving digital engagement. With a keen eye for trends and a passion for storytelling, Ife enhances brand visibility and fosters meaningful connections with the audience across various platforms.",
		image: "/ife.webp",
	},
];

const page = () => {
	return (
		<div className="bg-gray-50">
			<header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/bg8.webp')" }}>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
					<h1 className="text-6xl font-bold">Management Team</h1>
				</div>
			</header>

			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="space-y-16">
						{managementMembers.map((member, index) => (
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
