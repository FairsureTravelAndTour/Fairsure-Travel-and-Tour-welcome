import BookButton from "@/app/_components/BookButton/BookButton";
import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<div className="bg-gray-50">
			<header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/bg10.webp')" }}>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
					<h1 className="text-6xl font-bold">Foreign Exchange</h1>
				</div>
			</header>

			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-bold mb-6">Competitive Currency Exchange</h2>
							<p className="text-gray-600 leading-relaxed mb-8">
								Access competitive foreign exchange rates for a wide variety of currencies, tailored to meet the needs of individuals, families, and businesses. Whether for travel, remittances, or corporate transactions, our secure platform offers flexible options to ensure seamless and convenient currency exchange, with real-time rates and reliable customer support.
							</p>
							<BookButton Text="Learn More" Href="/contactUs" />
						</div>
						<div className="flex justify-center">
							<Image
								src={"/pricing.webp"}
								height={400}
								width={500}
								alt="foreign exchange photo"
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
