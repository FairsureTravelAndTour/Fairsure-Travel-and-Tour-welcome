
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

	return (
		<div className="bg-gray-50">
			<header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/bg8.webp')" }}>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
					<h1 className="text-6xl font-bold">About Us</h1>
				</div>
			</header>

			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-bold mb-6">Our Story</h2>
							<p className="text-gray-600 leading-relaxed">
								Founded in 2012 and registered with the Corporate Affairs Commission (CAC) under RC 1032195, FAIRSURE Travels and Tours began its journey to simplify travel planning for individuals and businesses. Managed by travel professionals with over 15 years of industry experience, the company was established to deliver efficient and value-driven travel services.
								<br /><br />
								FAIRSURE is dedicated to making every trip a seamless experience by offering everything from flight reservations to hotel accommodations and visa assistance. With a commitment to innovation, the company integrates modern communication technology, enabling clients to access the best fares, book hotels, and enjoy comprehensive travel packages, all at their convenience.
							</p>
						</div>
						<div className="flex justify-center">
							<Image
								src={"/element3.webp"}
								height={400}
								width={300}
								alt="Our Story"
								className="rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{values.map((value, index) => (
							<div key={index} className="p-8 bg-gray-50 rounded-lg shadow-md">
								<h3 className="text-2xl font-bold text-blue-600 mb-4">{value.title}</h3>
								<p className="text-gray-600">{value.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
						<div>
							<h2 className="text-4xl font-bold mb-6">Our Vision</h2>
							<p className="text-gray-600 leading-relaxed">
								Our vision is to become a recognized leader in the travel industry by offering innovative travel products and exceptional value-added services. We aim to redefine travel management by providing seamless, end-to-end services that exceed client expectations, making every journey a memorable one.
							</p>
						</div>
						<div className="flex justify-center">
							<Image
								src={"/vision.webp"}
								width={500}
								height={300}
								alt="vision image"
								className="rounded-lg shadow-lg"
							/>
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="flex justify-center md:order-2">
							<Image
								src={"/mission.webp"}
								width={500}
								height={300}
								alt="mission image"
								className="rounded-lg shadow-lg"
							/>
						</div>
						<div className="md:order-1">
							<h2 className="text-4xl font-bold mb-6">Our Mission</h2>
							<p className="text-gray-600 leading-relaxed">
								Our mission at FAIRSURE Travels and Tours is to manage all travel needs efficiently and provide seamless travel experiences to individuals and businesses. We strive to offer high-quality, personalized services, ensuring travelers enjoy convenience, comfort, and value throughout their journey.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="flex justify-center">
							<Image
								src={"/element4.webp"}
								height={400}
								width={300}
								alt="image"
								className="rounded-lg shadow-lg"
							/>
						</div>
						<div className="text-center md:text-left">
							<p className="text-gray-600 leading-relaxed mb-8">
								Through partnerships with local and international suppliers, FAIRSURE delivers high-quality services at competitive prices. Whether it’s a personal holiday or corporate travel, FAIRSURE ensures that every client enjoys a journey tailored to their needs.
							</p>
							<BookButton Text="Book Now" Href="/" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
