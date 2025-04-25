import Link from "next/link";
import React from "react";
import {
	FaPhone,
	FaEnvelope,
	FaWhatsapp,
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const footer = () => {
	const date = new Date().getFullYear();

	return (
		<div className="w-screen bg-gray-900 flex justify-center py-10 px-4 lg:px-0">
			<div className="container text-white text-sm flex flex-col items-center">
				<div className="flex lg:flex-row flex-col justify-between w-full">
					<div className="flex flex-col mb-7">
						<Link
							href={"tel:+2349053951769"}
							className="flex gap-2 items-center"
						>
							<FaPhone /> 0905 395 1769
						</Link>
						<Link
							href={"mailto:info@fairsuretravel.com.ng"}
							className="flex gap-2 items-center"
						>
							<FaEnvelope />
							info@fairsuretravel.com.ng
						</Link>
					</div>
					<div className="flex gap-7 items-center mb-7">
						<Link href={"https://www.facebook.com/share/1BN3bnxbY9"}>
							<FaFacebook className="size-8" />
						</Link>
						<Link
							href={
								"https://www.instagram.com/fairsuretravel/?utm_source=ig_web_button_share_sheet"
							}
						>
							<FaInstagram className="size-8" />
						</Link>
						<Link href={"https://x.com/fairsuretravels"}>
							<FaTwitter className="size-8" />
						</Link>
						<Link href={"https://wa.link/tj00xf"}>
							<FaWhatsapp className="size-8" />
						</Link>
						<Link
							href={
								"https://www.linkedin.com/in/fairsure-travel-and-tours-591348333/"
							}
						>
							<FaLinkedin className="size-8" />
						</Link>
					</div>
					<div className="flex flex-col w-[300px] gap-6  justify-center">
						<div className="flex items-start gap-3">
							<FaLocationPin className="size-6" />

							<p className="">
								Unity bank building 7th floor, plot 785 Herbart Macurlay way CBD
								, Abuja, Nigeria.
							</p>
						</div>

						<div className="flex gap-3 flex-col lg:items-center ">
							<Link href={"/privacyPolicy"}>Privacy policy</Link>
							<Link href={"/TermsAndCondition"}>Terms and Condition</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center w-full mt-10">
					<h2 className=" text-center">
						© {date} Travel Agency. All rights reserved.
					</h2>
				</div>
			</div>
		</div>
	);
};

export default footer;
