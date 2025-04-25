// "use client";

import AOS from "aos";
// import { useEffect } from "react";
import Image from "next/image";
import BookButton from "../_components/BookButton/BookButton";

const About = () => {
	const values = [
		{
			title: "Customer Satisfaction",
			description:
				"We prioritize the needs of our clients by delivering timely and reliable services that exceed expectations.",
		},
		{
			title: "Professionalism and Expertise",
			description:
				"With a team of seasoned travel professionals, we provide expert advice and guidance to help clients make informed decisions.",
		},
		{
			title: "Innovation and Technology",
			description:
				"We leverage modern technology to offer real-time access to the best fares and reservations worldwide, ensuring convenience at every step.",
		},
		{
			title: "Integrity and Transparency",
			description:
				"We uphold honesty and transparency in all interactions, ensuring that clients are fully informed about pricing, policies, and terms.",
		},
		{
			title: "Excellence and Quality",
			description:
				"We maintain high standards across all our services, ensuring each traveler enjoys an experience tailored to their needs.",
		},
		{
			title: "Collaborative Partnerships",
			description:
				"Through strong collaborations with global suppliers and service providers, we guarantee the best prices and services.",
		},
	];

	// useEffect(() => {
	// 	AOS.init({
	// 		duration: 1000,
	// 		once: true,
	// 	});
	// 	AOS.refresh();
	// }, []);
	return (
		<div className="w-screen flex flex-col items-center">
			<div className="w-full bg-[url('/bg8.webp')] bg-cover bg-bottom lg:pt-[300px] pt-[200px] flex justify-center rounded-b-4xl">
				<div className="container flex  items-end">
					<p className="lg:text-7xl text-3xl text-white font-semibold lg:p-0 px-2 pb-1">
						About Us
					</p>
				</div>
			</div>
			<div className="flex lg:flex-row flex-col lg:gap-0 gap-4 container items-center pt-8 lg:pt-15 justify-around my-8 lg:mb-20 ">
				<div className="">
					<h2 className="font-bold text-2xl pb-5 text-center">Our Story</h2>
					<p className="lg:w-[500px] w-[300px] text-center">
						Founded in 2012 and registered with the Corporate Affairs Commission
						(CAC) under RC 1032195, FAIRSURE Travels and Tours began its journey
						to simplify travel planning for individuals and businesses. <br />{" "}
						<br /> Managed by travel professionals with over 15 years of
						industry experience, the company was established to deliver
						efficient and value-driven travel services. <br />
						<br />
						FAIRSURE is dedicated to making every trip a seamless experience by
						offering everything from flight reservations to hotel accommodations
						and visa assistance. <br />
						<br />
						With a commitment to innovation, the company integrates modern
						communication technology, enabling clients to access the best fares,
						book hotels, and enjoy comprehensive travel packages, all at their
						convenience.
					</p>
				</div>

				<Image
					src={"/element3.webp"}
					height={200}
					width={120}
					alt=""
					className="w-[300px] rounded-2xl"
				/>
			</div>

			<div className="container px-2 lg:px-5">
				<hr className="w-full border border-blue-500" />
			</div>

			<div className="container flex flex-col items-center my-8 lg:my-20 gap-5 lg:gap-10">
				<h1 className="text-2xl font-bold text-center">Our Values</h1>
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-y-5 gap-x-20">
					{values.map((value) => (
						<div
							key={value.title}
							className="w-[300px] border-2 border-gray-300 flex flex-col justify-center p-3 rounded-sm"
						>
							<h2 className="text-blue-500 text-xl">{value.title}</h2>
							<p className="">{value.description}</p>
						</div>
					))}
				</div>
			</div>

			<div className="container px-2 lg:px-5">
				<hr className="w-full border border-blue-500" />
			</div>

			<div className="container my-8 lg:my-20 px-2 lg:px-5">
				<div className="w-full">
					<h2 className="lg:text-3xl text-2xl text-bold">Our Vision</h2>
					<div className="flex lg:flex-row flex-col gap-10 items-center">
						<p className=" lg:w-full">
							Our vision is to become a recognized leader in the travel industry
							by offering innovative travel products and exceptional value-added
							services. We aim to redefine travel management by providing
							seamless, end-to-end services that exceed client expectations,
							making every journey a memorable one.
						</p>
						<Image
							src={"/vision.webp"}
							width={300}
							height={200}
							alt="vision image"
							className="rounded-lg"
						/>
					</div>
				</div>
				<div className="w-full">
					<h2 className="lg:text-3xl text-2xl text-bold mb-3">Our Mission</h2>
					<div className="flex lg:flex-row-reverse flex-col gap-10 items-center">
						<p className="">
							Our mission at FAIRSURE Travels and Tours is to manage all travel
							needs efficiently and provide seamless travel experiences to
							individuals and businesses. We strive to offer high-quality,
							personalized services, ensuring travelers enjoy convenience,
							comfort, and value throughout their journey.
						</p>
						<Image
							src={"/mission.webp"}
							width={300}
							height={200}
							alt="vision image"
							className="rounded-lg"
						/>
					</div>
				</div>
			</div>
			<div className="container px-2 lg:px-5">
				<hr className="w-full border border-blue-500 " />
			</div>

			<div className="flex  container items-center pt-8 lg:pt-15 justify-around">
				<Image
					src={"/element4.webp"}
					height={200}
					width={120}
					alt="image"
					className="hidden lg:inline w-[250px] rounded-2xl h-fit"
				/>
				<div className=" flex flex-col lg:items-start items-center lg:pl-25 gap-5">
					<p className="lg:w-[500px] w-[300px]">
						Through partnerships with local and international suppliers,
						FAIRSURE delivers high-quality services at competitive prices.
						Whether it’s a personal holiday or corporate travel, FAIRSURE
						ensures that every client enjoys a journey tailored to their needs.
					</p>
					<BookButton Text="Book Now" Href="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
