"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
	const [isTeamOpen, setIsTeamOpen] = useState(false);
	const [isPackagesOpen, setIsPackagesOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	const navigations = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/aboutUs" },
		{
			name: "Team",
			href1: "/boardOfDirectors",
			href2: "/managementTeam",
			href3: "/otherTeamMembers",
		},
		{
			name: "Packages",
			href1: "/packages/airportTransfers",
			href2: "/packages/foreignExchange",
			href3: "/packages/visaProcessing",
			href4: "/packages/flightBookings",
			href5: "/packages/corporateTravel",
		},
		{ name: "Contact", href: "/contactUs" },
	];

	return (
		<>
			<nav className="hidden lg:flex container fixed items-center justify-between py-2 px-5 rounded-b-xl z-10 bg-white/30 backdrop-blur-md">
				<Link href={"/"}>
					<Image
						height={100}
						width={200}
						alt="logo"
						src={"/Travel&Tourlogo.png"}
						className="w-[100px] h-[50px]"
					/>
				</Link>

				<ul className="flex gap-4 font-bold text-slate-800">
					{navigations.map((navigation) => (
						<li key={navigation.name}>
							{navigation.name === "Team" ? (
								<div
									className="relative h-fit"
									onMouseEnter={() => setIsTeamOpen(true)}
									onMouseLeave={() => setIsTeamOpen(false)}
								>
									<Link href={"#"}>{navigation.name}</Link>
									{isTeamOpen && (
										<ul className="absolute top-[15px] bg-white shadow-md mt-2 py-5 w-48 px-2 rounded-lg flex flex-col gap-6">
											<li>
												<Link href={navigation.href1!}>Board Of Directors</Link>
											</li>
											<li>
												<Link href={navigation.href2!}>Management Team</Link>
											</li>
											<li>
												<Link href={navigation.href3!}>Other Team Members</Link>
											</li>
										</ul>
									)}
								</div>
							) : navigation.name === "Packages" ? (
								<div
									className="relative h-fit"
									onMouseEnter={() => setIsPackagesOpen(true)}
									onMouseLeave={() => setIsPackagesOpen(false)}
								>
									<Link href={"#"}>{navigation.name}</Link>
									{isPackagesOpen && (
										<ul className="absolute top-[15px] bg-white shadow-md mt-2 py-5 w-48 px-2 rounded-lg flex flex-col gap-6">
											<li>
												<Link href={navigation.href1!}>Airport Transfers</Link>
											</li>
											<li>
												<Link href={navigation.href2!}>Foreign Exchange</Link>
											</li>
											<li>
												<Link href={navigation.href3!}>Visa Processing</Link>
											</li>
											<li>
												<Link href={navigation.href4!}>Flight Bookings</Link>
											</li>
											<li>
												<Link href={navigation.href5!}>Corporate Travel</Link>
											</li>
										</ul>
									)}
								</div>
							) : (
								<Link href={navigation.href!}>{navigation.name}</Link>
							)}
						</li>
					))}
				</ul>
			</nav>

			<div className="flex justify-between lg:hidden fixed w-full bg-white items-center px-3 py-2 z-10">
				<Link href={"/"}>
					<Image
						height={100}
						width={200}
						alt="logo"
						src={"/Travel&Tourlogo.png"}
						className="w-[100px] h-[50px]"
					/>
				</Link>

				{/* Mobile Menu Toggle Button */}
				<div className="flex justify-end  pt-4 lg:hidden">
					{!isMobileMenuOpen && (
						<button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
							<BiMenu className="w-8 h-8 text-gray-800" />
						</button>
					)}
					{isMobileMenuOpen && (
						<button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
							<BiX className="w-8 h-8 text-gray-800" />
						</button>
					)}
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 px-5 z-50">
						<ul className="flex flex-col gap-4 font-semibold text-slate-800">
							{navigations.map((nav) => (
								<React.Fragment key={nav.name}>
									{nav.name === "Team" || nav.name === "Packages" ? (
										<li>
											<button
												className="w-full text-left flex justify-between items-center"
												onClick={() =>
													setOpenDropdown((prev) =>
														prev === nav.name ? null : nav.name
													)
												}
											>
												{nav.name}
												<span>{openDropdown === nav.name ? "▲" : "▼"}</span>
											</button>

											{/* Dropdown Content */}
											{openDropdown === nav.name && (
												<ul className="mt-2 ml-4 flex flex-col gap-3 text-sm text-slate-700">
													{Object.entries(nav)
														.filter(([key]) => key.startsWith("href"))

														.map(([key, value]) => (
															<li key={key}>
																<Link
																	href={value}
																	onClick={() => {
																		setIsMobileMenuOpen(false);
																		setOpenDropdown(null);
																	}}
																>
																	{value
																		.split("/")
																		.slice(-1)[0]
																		.replace(/([A-Z])/g, " $1")
																		.replace(/^./, (c: string) =>
																			c.toUpperCase()
																		)}
																</Link>
															</li>
														))}
												</ul>
											)}
										</li>
									) : (
										<li>
											<Link
												href={nav.href!}
												onClick={() => setIsMobileMenuOpen(false)}
											>
												{nav.name}
											</Link>
										</li>
									)}
								</React.Fragment>
							))}
						</ul>
					</div>
				)}
			</div>
		</>
	);
};

export default Navbar;
