"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
	const [isTeamOpen, setIsTeamOpen] = useState(false);
	const [isPackagesOpen, setIsPackagesOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

	const navigations = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/aboutUs" },
		{
			name: "Team",
            href: "#",
			sublinks: [
                { name: "Board Of Directors", href: "/boardOfDirectors" },
                { name: "Management Team", href: "/managementTeam" },
                { name: "Other Team Members", href: "/otherTeamMembers" },
            ],
		},
		{
			name: "Packages",
            href: "#",
			sublinks: [
                { name: "Airport Transfers", href: "/packages/airportTransfers" },
                { name: "Foreign Exchange", href: "/packages/foreignExchange" },
                { name: "Visa Processing", href: "/packages/visaProcessing" },
                { name: "Flight Bookings", href: "/packages/flightBookings" },
                { name: "Corporate Travel", href: "/packages/corporateTravel" },
            ],
		},
		{ name: "Contact", href: "/contactUs" },
	];

	return (
		<>
			<nav className={`hidden lg:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
				<div className="container mx-auto flex items-center justify-between py-4 px-6">
                    <Link href={"/"}>
                        <Image
                            height={100}
                            width={200}
                            alt="logo"
                            src={"/Travel&Tourlogo.png"}
                            className="w-24 h-auto"
                        />
                    </Link>

                    <ul className={`flex gap-8 font-semibold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                        {navigations.map((navigation) => (
                            <li key={navigation.name} className="relative group">
                                <Link href={navigation.href} className="flex items-center gap-1">
                                    {navigation.name}
                                    {navigation.sublinks && <FaChevronDown size={12} />}
                                </Link>
                                {navigation.sublinks && (
                                    <ul className="absolute top-full left-0 bg-white shadow-lg mt-2 py-2 w-56 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                                        {navigation.sublinks.map(sublink => (
                                            <li key={sublink.name}>
                                                <Link href={sublink.href} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                                    {sublink.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
			</nav>

			<div className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}>
				<div className="container mx-auto flex items-center justify-between py-4 px-6">
                    <Link href={"/"}>
                        <Image
                            height={100}
                            width={200}
                            alt="logo"
                            src={"/Travel&Tourlogo.png"}
                            className="w-24 h-auto"
                        />
                    </Link>

                    <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                        {isMobileMenuOpen ? <BiX className={`w-8 h-8 ${scrolled || isMobileMenuOpen ? 'text-gray-800' : 'text-white'}`} /> : <BiMenu className={`w-8 h-8 ${scrolled ? 'text-gray-800' : 'text-white'}`} />}
                    </button>
                </div>

				{isMobileMenuOpen && (
					<div className="lg:hidden w-full bg-white py-4 px-5">
						<ul className="flex flex-col gap-4 font-semibold text-gray-800">
							{navigations.map((nav) => (
								<li key={nav.name}>
									{nav.sublinks ? (
										<div>
											<button
												className="w-full text-left flex justify-between items-center"
												onClick={() =>
													setOpenDropdown((prev) =>
														prev === nav.name ? null : nav.name
													)
												}
											>
												{nav.name}
												<span>{openDropdown === nav.name ? <FaChevronUp/> : <FaChevronDown/>}</span>
											</button>

											{openDropdown === nav.name && (
												<ul className="mt-2 ml-4 flex flex-col gap-3 text-sm text-gray-700">
													{nav.sublinks.map((sublink) => (
                                                        <li key={sublink.name}>
                                                            <Link
                                                                href={sublink.href}
                                                                onClick={() => {
                                                                    setIsMobileMenuOpen(false);
                                                                    setOpenDropdown(null);
                                                                }}
                                                            >
                                                                {sublink.name}
                                                            </Link>
                                                        </li>
                                                    ))}
												</ul>
											)}
										</div>
									) : (
										<Link
											href={nav.href!}
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{nav.name}
										</Link>
									)}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</>
	);
};

export default Navbar;
