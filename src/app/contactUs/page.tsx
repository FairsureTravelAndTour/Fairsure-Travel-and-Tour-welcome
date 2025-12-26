"use client";

import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import { FaMessage } from "react-icons/fa6";

const Contact = () => {
	return (
		<>
			<div className="w-screen bg-gray-900 flex justify-center mt-[70px] items relative mb-[700px] lg:mb-[350px]">
				<div className="container flex px-20 items-center justify-between py-[100px]">
					<div className="space-y-[10px]">
						<h1 className="lg:text-6xl text-3xl font-medium text-white">
							Get in touch<span className="text-7xl text-blue-400">.</span>
						</h1>
						<h2 className="text-white  max-w-[500px]">
							Want to get in touch? Whether it&apos;s for guidanc on flight
							bookings or to ask questions about our services. <br /> We&apos;d
							love to hear from you. Here&apos;s how you can reach us.
						</h2>
					</div>
					<div className="hidden lg:inline overflow-hidden rounded-md">
						<Image
							src={"/customerSupport.webp"}
							height={200}
							width={400}
							alt="contact photo"
							className="h-[300px]"
						/>
					</div>
				</div>

				<div className="flex lg:flex-row flex-col absolute bottom-[-720px] lg:bottom-[-340px] gap-10 h-fit">
					<div className="bg-gray-100 rounded-lg flex flex-col items-center  px-5 py-4 lg:w-[400px] w-[300px] min-h-full">
						<FaPhone className="size-10 mb-5" />
						<h2 className="text-lg font-medium">Talk to us.</h2>

						<div className="flex flex-col justify-around h-full items-center">
							<h3 className="text-center text-lg my-5">
								want to ask questions or book a flight via a phone call? <br />
								You can talk to us directly.
							</h3>

							<Link
								href={"tel:+2349053951769"}
								className=" text-2xl my-5 underline underline-offset-5 hover:text-blue-400"
							>
								09053951769
							</Link>
						</div>
					</div>
					<div className="bg-gray-100 rounded-lg flex flex-col items-center px-5 py-4 lg:w-[400px] w-[300px] h-full">
						<FaMessage className="size-10 mb-5" />
						<h2 className="text-lg font-medium text-center mb-5">
							send us a Message or Complaint. We will reach out ASAP!
						</h2>

						<form action="" className="flex flex-col items-start w-full ">
							<input
								type="text"
								placeholder="Full Name"
								className="w-full  p-3 border-b focus:outline-none"
							/>
							<input
								type="text"
								placeholder="Email"
								className="w-full  p-3 border-b focus:outline-none"
							/>
							<textarea
								name="message"
								placeholder="Your Message"
								required
								// value={formData.message}
								// onChange={handleChange}
								className="w-full  p-2 rounded border-b outline-0"
								rows={2}
							/>
							<div className="w-full flex justify-center">
								<button className="my-5 bg-blue-400 hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md font-semibold">
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contact;
