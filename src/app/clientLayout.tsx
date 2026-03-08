"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import NewsLetterSignUp from "./_components/NewsLetterSignUp/NewsLetterSignUp";
import Footer from "./sharedLayout/footer";
import Navbar from "./sharedLayout/navbar";

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
		<div>
			<Navbar />
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
					<CgSpinner className="animate-spin text-4xl" />
				</div>
			)}
			{children}

			<NewsLetterSignUp />
			<Footer />
		</div>
	);
}
