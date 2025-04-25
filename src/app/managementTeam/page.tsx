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
		<div className="w-screen flex flex-col items-center">
			<div className="w-full bg-[url('/bg8.webp')] bg-cover bg-bottom lg:pt-[300px] pt-[200px] flex justify-center rounded-b-4xl px-2 py-1">
				<div className="container flex items-end">
					<p className="font-semibold lg:text-6xl lg: text-3xl text-white">
						Management Team
					</p>
				</div>
			</div>
			<div className="container  pt-10 mb-20 ">
				<div className="lg:grid gap-8 grid-cols-1 w-full flex flex-col items-center justify-center ">
					{managementMembers.map((member, index) => (
						<div key={index} className="flex gap-3 items-center">
							<div className="flex flex-col items-center ">
								<div className="rounded-[100%] w-fit bg-gray-900 p-2">
									<Image
										src={member.image}
										width={100}
										height={100}
										alt="Johnson's Photograph"
										className="rounded-[100%] object-cover size-[250px] mx-auto"
									/>
								</div>
								<div className="p-5 font-semibold text-xl lg:w-[500px] w-[300px] text-center">
									<p className="">{member.name}</p>
									<p className="">{member.position}</p>
								</div>
							</div>
							<div className="hidden  h-[400px] w-[700px] lg:flex items-center p-5 bg-gray-900 rounded-2xl">
								<p className=" text-center text-white font-medium text-2xl">
									{member.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default page;
