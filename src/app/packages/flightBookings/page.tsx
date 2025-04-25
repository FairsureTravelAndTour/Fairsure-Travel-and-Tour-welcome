import BookButton from "@/app/_components/BookButton/BookButton";
import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<div className="pt-[70px] flex flex-col items-center">
			<div className="w-screen flex justify-center bg-[url('/bg10.webp')] bg-[position:40%_65%] bg-cover lg:h-[500px] h-[300px] rounded-b-4xl">
				<div className="container flex items-end pb-5">
					<h1 className="lg:text-7xl text-3xl">Flight Booking</h1>
				</div>
			</div>
			<div className="container lg:py-20 py-10 flex flex-col lg:gap-0 gap-6 items-center">
				<div className="flex lg:flex-row flex-col gap-7 items-center">
					<p className="lg:text-2xl lg:text-start text-center px-2">
						Enjoy competitive fares for both domestic and international flights.
						We offer a range of booking options tailored to individuals,
						families, and corporate travelers. From budget airlines to premium
						carriers, we provide flexibility in ticketing, seat reservations,
						and upgrades to ensure a comfortable journey, every time you fly.
					</p>

					<Image
						src={"/element3.webp"}
						height={200}
						width={120}
						alt=""
						className="w-[300px] rounded-2xl"
					/>
				</div>
				<div className="">
					<BookButton Text="Book Now" Href="/" />
				</div>
			</div>
		</div>
	);
};

export default page;
