import React from "react";

const Testimonials = () => {
	const testimonials = [
		{
			name: "David Effiom",
			initial: "D",
			description:
				"Our trip to Paris was unforgettable! The guides were knowledgeable and made everything easy.",
			location: "Paris",
		},
		{
			name: "Robert Mathew",
			initial: "R",
			description:
				"The safari tour exceeded our expectations! We saw so many incredible animals in their natural habitat.",
			location: "Safari Adventure",
		},
		{
			name: "Michael Ikenna",
			initial: "M",
			description:
				"The Maldives was pure paradise! Everything from the beaches to the service was outstanding.",
			location: "Maldives",
		},
	];

	return (
		<div className="w-screen bg-blue-400 flex justify-center items-center">
			<div className="container pb-10 flex flex-col items-center">
				<h2 className="font-bold lg:text-4xl text-2xl text-center w-full lg:py-10 py-5">
					What Our Travelers Say
				</h2>

				<div className="flex lg:flex-row flex-col justify-center gap-5 lg:w-full w-[250px]">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className=" bg-white flex flex-col items-center space-y-1.5 px-4 py-3 rounded-lg"
						>
							<div className="rounded-[100%] px-4 py-2 bg-gray-300">
								{testimonial.initial}
							</div>
							<p className="text-gray-700">{testimonial.description}</p>
							<h2 className="text-gray-900 font-semibold">
								{testimonial.name}
							</h2>
							<p className="text-[12px] text-gray-400">
								{testimonial.location}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
