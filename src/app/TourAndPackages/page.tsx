import React from "react";
import Head from "next/head";

const services = [
	{
		title: "Visa Processing",
		description:
			"Navigating visa requirements can be challenging, but our team ensures a smooth and stress-free process. We handle documentation, appointment scheduling, and embassy procedures, saving you time and ensuring higher success rates. Whether you're traveling for business, leisure, or study, we streamline your visa process to multiple global destinations.",
	},
	{
		title: "Flight Bookings",
		description:
			"Enjoy competitive fares for both domestic and international flights. We offer a range of booking options tailored to individuals, families, and corporate travelers. From budget airlines to premium carriers, we provide flexibility in ticketing, seat reservations, and upgrades to ensure a comfortable journey, every time you fly.",
	},
	{
		title: "Airport Transfers",
		description:
			"Our reliable airport transfer service ensures that you never have to worry about transportation upon arrival or departure. Whether you need a private car, shuttle bus, or VIP transport, our drivers are always on time to provide smooth, safe, and comfortable rides to and from the airport.",
	},
	{
		title: "Travel Packages",
		description:
			"Explore the world with our carefully curated travel packages, tailored for every occasion. Whether you’re planning a romantic honeymoon, a relaxing vacation, or an adventurous group tour, we’ve got packages designed to suit your preferences and budget. Enjoy discounts, guided tours, and memorable experiences wherever you go.",
	},
	{
		title: "Corporate Travel",
		description:
			"Our corporate travel solutions are designed to meet the needs of businesses, offering customized itineraries and seamless arrangements for conferences, meetings, and retreats. With access to premium services, including airport lounges and business-class travel, we ensure that your company’s travel experience is efficient and stress-free.",
	},
];

const TourAndPackages = () => {
	return (
		<>
			<Head>
				<title>Travel Packages & Services | Fairsure Travel</title>
				<meta
					name="description"
					content="Discover tailored travel packages and services including visa processing, flight bookings, airport transfers, and more for business or leisure trips."
				/>
				<meta
					name="keywords"
					content="travel packages, visa processing, flight bookings, airport transfers, group tours, corporate travel, honeymoon packages, Nigeria travel company"
				/>
				<meta name="author" content="Fairsure Travel" />
				<meta
					property="og:title"
					content="Explore Our Travel Packages & Services | Fairsure Travel"
				/>
				<meta
					property="og:description"
					content="Visa assistance, flight bookings, and curated travel experiences for individuals, families, and corporate clients."
				/>
				<meta property="og:image" content="/static/images/travel-banner.jpg" />
				<meta
					property="og:url"
					content="https://yourwebsite.com/tour-and-packages"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<div className=""></div>
		</>
	);
};

export default TourAndPackages;
<script
	type="application/ld+json"
	dangerouslySetInnerHTML={{
		__html: JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Service",
			name: "Travel Packages & Services",
			description:
				"Discover our travel services: visa processing, flight bookings, airport transfers, group tours, and corporate travel.",
			provider: {
				"@type": "Organization",
				name: "Fairsure Travel",
			},
			offers: services.map((service) => ({
				"@type": "Offer",
				name: service.title,
				description: service.description,
			})),
		}),
	}}
/>;
