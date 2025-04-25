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
	// { name: "", position: "", description: "", image: "" },
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
			<div className="container pt-10 mb-20">
				<div className="flex flex-col items-center">
					{boardMembers.map((member, index) => (
						<div key={index} className="flex flex-col items-center">
							<div className=" ">
								<div className="rounded-[100%] bg-gray-900 px-2 py-[1px]">
									<Image
										src={member.image}
										width={100}
										height={100}
										alt="Johnson's Photograph"
										className="rounded-[100%] object-cover size-[200px] mx-auto"
									/>
								</div>
								<div className="p-5 font-semibold text-xl w-[240px] text-center">
									<p className="">{member.name}</p>
									<p className="">{member.position}</p>
								</div>
							</div>
							<div className="lg:w-[700px] w-[300px] p-5 bg-gray-900 rounded-2xl">
								<p className="text-center text-sm text-white font-medium lg:text-2xl">
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
