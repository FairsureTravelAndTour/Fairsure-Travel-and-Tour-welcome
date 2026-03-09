import React from "react";
import Head from "next/head";
import BookButton from "../_components/BookButton/BookButton";

const services = [
	{
		title: "Visa Processing",
		description:
			"Navigating visa requirements can be challenging, but our team ensures a smooth and stress-free process. We handle documentation, appointment scheduling, and embassy procedures, saving you time and ensuring higher success rates. Whether you're traveling for business, leisure, or study, we streamline your visa process to multiple global destinations.",
		href: "/packages/visaProcessing",
	},
	{
		title: "Flight Bookings",
		description:
			"Enjoy competitive fares for both domestic and international flights. We offer a range of booking options tailored to individuals, families, and corporate travelers. From budget airlines to premium carriers, we provide flexibility in ticketing, seat reservations, and upgrades to ensure a comfortable journey, every time you fly.",
		href: "/packages/flightBookings",
	},
	{
		title: "Airport Transfers",
		description:
			"Our reliable airport transfer service ensures that you never have to worry about transportation upon arrival or departure. Whether you need a private car, shuttle bus, or VIP transport, our drivers are always on time to provide smooth, safe, and comfortable rides to and from the airport.",
		href: "/packages/airportTransfers",
	},
	{
		title: "Corporate Travel",
		description:
			"Our corporate travel solutions are designed to meet the needs of businesses, offering customized itineraries and seamless arrangements for conferences, meetings, and retreats. With access to premium services, including airport lounges and business-class travel, we ensure that your company’s travel experience is efficient and stress-free.",
		href: "/packages/corporateTravel",
	},
    {
        title: "Foreign Exchange",
        description:
            "Access competitive foreign exchange rates for a wide variety of currencies, tailored to meet the needs of individuals, families, and businesses. Whether for travel, remittances, or corporate transactions, our secure platform offers flexible options to ensure seamless and convenient currency exchange, with real-time rates and reliable customer support.",
        href: "/packages/foreignExchange",
    }
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
                />
			</Head>

			<div className="bg-gray-50">
                <header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/bg8.webp')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                        <h1 className="text-6xl font-bold">Tours and Packages</h1>
                    </div>
                </header>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                        <p className="text-gray-600 mb-6">{service.description}</p>
                                        <BookButton Text="Learn More" Href={service.href} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
		</>
	);
};

export default TourAndPackages;
