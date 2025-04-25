"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CgSpinner } from "react-icons/cg";
import NavBar from "./sharedLayout/Navbar";
import Footer from "./sharedLayout/footer";
import NewsLetterSignUp from "./_components/NewsLetterSignUp/NewsLetterSignUp";

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [loading, setLoading] = useState(false);
	const pathname = usePathname(); // Detect current route path

	useEffect(() => {
		// Set loading to true on path change, reset after some delay to simulate loading
		setLoading(true);
		const timer = setTimeout(() => setLoading(false), 500);

		// Cleanup the timeout to prevent memory leaks
		return () => clearTimeout(timer);
	}, [pathname]);

	return (
		<div className="flex flex-col items-center">
			<NavBar />
			{loading && (
				<div
					style={{
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						zIndex: 1000,
					}}
				>
					<CgSpinner />
				</div>
			)}
			{children}

			<NewsLetterSignUp />
			<Footer />
		</div>
	);
}
