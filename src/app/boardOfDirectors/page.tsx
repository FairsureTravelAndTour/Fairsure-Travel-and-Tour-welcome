import Image from "next/image";
import React from "react";

const boardMembers = [
	{
		name: "Johnson Adekunle",
		position: "Chairman",
		description:
			"Johnson Adekunle is a member of the OPM 49 of the Harvard Business school, Boston, Massachusetts. He is an accomplished banker and a Chartered Accountant. He is an entrepreneur and founder of Fairsure Properties and Sonris Group of Companies.",
		image: "/johnson.webp",
	},
];

const page = () => {
	return (
		<div className="bg-gray-50">
			<header className="relative bg-center bg-cover h-96" style={{ backgroundImage: "url('/bg8.webp')" }}>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
					<h1 className="text-6xl font-bold">Board Of Directors</h1>
				</div>
			</header>
			<div className="bg-red"><h1>Hello!!!</h1></div>

			<section className="py-20">
				<div className="container px-4 mx-auto">
					<div className="flex flex-wrap justify-center gap-12">
						{boardMembers.map((member, index) => (
							<div key={index} className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
								<div className="relative">
									<Image
										src={member.image}
										width={400}
										height={400}
										alt={member.name}
										className="object-cover"
									/>
									<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
										<h2 className="text-3xl font-bold text-white">{member.name}</h2>
										<p className="text-xl text-gray-300">{member.position}</p>
									</div>
								</div>
								<div className="p-6">
									<p className="leading-relaxed text-gray-600">{member.description}</p>
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
