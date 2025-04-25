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
		<div className="w-screen flex flex-col items-center">
			<div className="w-full bg-[url('/bg8.webp')] bg-cover bg-bottom lg:pt-[300px] pt-[200px] flex justify-center rounded-b-4xl px-2 py-1">
				<div className="container flex items-end">
					<p className="font-semibold lg:text-6xl lg: text-3xl text-white">
						Board Of Directors
					</p>
				</div>
			</div>
			<div className="container  pt-10 mb-20">
				<div className="lg:grid gap-8 grid-cols-1 w-full flex flex-col items-center justify-center ">
					{OtherMembers.map((member, index) => (
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
