import React from "react";
import ClientBookingWrapper from "../ClientBookingWrapper/ClientBookingWrapper";

const Hero = () => {
	return (
		<div className=" flex flex-col pt-[80px] lg:pt-50 items-center justify-center lg:justify-normal h-screen bg-[url('/bg6.avif')] bg-cover bg-[position:95%_5%]">
			<ClientBookingWrapper />
		</div>
	);
};

export default Hero;
