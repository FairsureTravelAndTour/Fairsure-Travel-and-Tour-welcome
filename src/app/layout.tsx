export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./clientLayout";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
	metadataBase: new URL("https://fairsuretravel.com.ng"),
	title: "Fairsure Travel and Tour | Explore the World with Us",
	description:
		"Discover immersive travel packages and unforgettable adventures. Plan your dream vacation with Fairsure Travel.",
	keywords: [
		"travel",
		"tours",
		"vacation",
		"travel agency",
		"beach holidays",
		"city tours",
		"group travel",
	],
	openGraph: {
		title: "Explore the World with Fairsure Travel",
		description:
			"Book exclusive travel packages with Fairsure Travel and Tour. Discover destinations with us today!",
		images: ["/static/images/landing-image.jpg"],
		url: "https://yourwebsite.com",
		type: "website",
	},
};

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="preload" as="image" href="/bg6.avif" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<ClientLayout>{children}</ClientLayout>
				<Toaster
					position="top-right"
					toastOptions={{
						className: "",
						style: {
							border: "1px solid red",
							padding: "16px",
							color: "#713200",
						},
						success: {
							style: {
								border: "2px solid green",
								color: "#023200",
							},
							iconTheme: {
								primary: "green",
								secondary: "white",
							},
						},
					}}
				/>
			</body>
		</html>
	);
}
