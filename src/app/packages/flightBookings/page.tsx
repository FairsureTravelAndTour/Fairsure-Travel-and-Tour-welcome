import BookButton from "@/app/_components/BookButton/BookButton";
import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<div className="bg-gray-50">
			<header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/bg10.webp')" }}>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
					<h1 className="text-6xl font-bold">Flight Booking</h1>
				</div>
			</header>

			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-bold mb-6">Competitive Flight Options</h2>
							<p className="text-gray-600 leading-relaxed mb-8">
								Enjoy competitive fares for both domestic and international flights. We offer a range of booking options tailored to individuals, families, and corporate travelers. From budget airlines to premium carriers, we provide flexibility in ticketing, seat reservations, and upgrades to ensure a comfortable journey, every time you fly.
							</p>
							<BookButton Text="Book Now" Href="/" />
						</div>
						<div className="flex justify-center">
							<Image
								src={"/element3.webp"}
								height={400}
								width={300}
								alt="flight booking photo"
								className="rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default page;
