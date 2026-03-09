import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
	const testimonials = [
		{
			name: "David Effiom",
			avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
			description:
				"Our trip to Paris was unforgettable! The guides were knowledgeable and made everything easy.",
			location: "Paris",
		},
		{
			name: "Robert Mathew",
			avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
			description:
				"The safari tour exceeded our expectations! We saw so many incredible animals in their natural habitat.",
			location: "Safari Adventure",
		},
		{
			name: "Michael Ikenna",
			avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
			description:
				"The Maldives was pure paradise! Everything from the beaches to the service was outstanding.",
			location: "Maldives",
		},
	];

	return (
		<div className="bg-white py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					What Our Travelers Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-gray-50 rounded-lg shadow-md p-8 transform hover:-translate-y-2 transition-transform duration-300"
						>
							<div className="flex items-center mb-6">
								<img
									src={testimonial.avatar}
									alt={testimonial.name}
									className="w-16 h-16 rounded-full mr-4"
								/>
								<div>
									<h3 className="text-xl font-semibold">{testimonial.name}</h3>
									<p className="text-gray-500">{testimonial.location}</p>
								</div>
							</div>
							<div className="text-gray-600">
								<FaQuoteLeft className="text-2xl text-gray-300 mb-4" />
								<p>{testimonial.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
