import BookButton from "@/app/_components/BookButton/BookButton";
import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<div className="pt-[70px] flex flex-col items-center">
			<div className="w-screen flex justify-center bg-[url('/bg10.webp')] bg-[position:40%_65%] bg-cover lg:h-[500px] h-[300px] rounded-b-4xl">
				<div className="container flex items-end pb-5">
					<h1 className="lg:text-7xl text-3xl">Airport Transfers</h1>
				</div>
			</div>
			<div className="container lg:py-20 py-10 flex flex-col lg:gap-0 gap-6 items-center">
				<div className="flex lg:flex-row flex-col gap-7 items-center">
					<p className="lg:text-2xl lg:text-start text-center px-2">
						Our reliable airport transfer service ensures that you never have to
						worry about transportation upon arrival or departure. Whether you
						need a private car, shuttle bus, or VIP transport, our drivers are
						always on time to provide smooth, safe, and comfortable rides to and
						from the airport.
					</p>

					<Image
						src={"/airport.webp"}
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
