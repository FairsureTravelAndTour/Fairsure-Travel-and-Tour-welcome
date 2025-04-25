import BookButton from "@/app/_components/BookButton/BookButton";
import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<div className="pt-[70px] flex flex-col items-center">
			<div className="w-screen flex justify-center bg-[url('/bg10.webp')] bg-[position:40%_65%] bg-cover lg:h-[500px] h-[300px] rounded-b-4xl">
				<div className="container flex items-end pb-5">
					<h1 className="lg:text-7xl text-3xl">Visa Processing</h1>
				</div>
			</div>
			<div className="container lg:py-20 py-10 flex flex-col lg:gap-0 gap-6 items-center">
				<div className="flex lg:flex-row flex-col gap-7 items-center">
					<p className="lg:text-2xl lg:text-start text-center px-2">
						Navigating visa requirements can be challenging, but our team
						ensures a smooth and stress-free process. We handle documentation,
						appointment scheduling, and embassy procedures, saving you time and
						ensuring higher success rates. Whether you&apos;re traveling for
						business, leisure, or study, we streamline your visa process to
						multiple global destinations.
					</p>

					<Image
						src={"/element2.webp"}
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
