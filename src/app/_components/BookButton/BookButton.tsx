import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BookButton = ({ Text, Href }: { Text: string; Href: string }) => {
	return (
		<button className="bg-blue-400 px-4 py-2  rounded-2xl  font-semibold hover:bg-blue-900 hover:text-white">
			<Link href={Href} className="flex items-center gap-3">
				{Text} <FaArrowRight />
			</Link>
		</button>
	);
};

export default BookButton;
