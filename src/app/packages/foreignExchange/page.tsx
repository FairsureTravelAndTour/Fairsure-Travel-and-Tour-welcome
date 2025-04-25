import BookButton from "@/app/_components/BookButton/BookButton";
import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<div className="pt-[70px] flex flex-col items-center">
			<div className="w-screen flex justify-center bg-[url('/bg10.webp')] bg-[position:40%_65%] bg-cover lg:h-[500px] h-[300px] rounded-b-4xl">
				<div className="container flex items-end pb-5">
					<h1 className="lg:text-7xl text-3xl">Foreign Exchange</h1>
				</div>
			</div>
			<div className="container lg:py-20 py-10 flex flex-col lg:gap-0 gap-6 items-center">
				<div className="flex lg:flex-row flex-col gap-7 items-center">
					<p className="lg:text-2xl lg:text-start text-center px-2">
						Access competitive foreign exchange rates for a wide variety of
						currencies, tailored to meet the needs of individuals, families, and
						businesses. Whether for travel, remittances, or corporate
						transactions, our secure platform offers flexible options to ensure
						seamless and convenient currency exchange, with real-time rates and
						reliable customer support.
					</p>

					<Image
						src={"/pricing.webp"}
						height={100}
						width={100}
						alt="airport photo"
						className="lg:w-[500px] w-[300px] rounded-2xl"
					/>
				</div>
				<div className="">
					<BookButton Text="Learn More" Href="/contactUs" />
				</div>
			</div>
		</div>
	);
};

export default page;
