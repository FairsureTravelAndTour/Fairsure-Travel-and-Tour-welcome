"use client";

import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
	return (
		<div className="bg-gray-50">
			<header className="relative py-24 bg-gray-900 text-white text-center">
				<div className="container mx-auto px-4">
					<h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
					<p className="text-xl max-w-2xl mx-auto">
						Want to get in touch? Whether it's for guidance on flight bookings or to ask questions about our services, we'd love to hear from you. Here's how you can reach us.
					</p>
				</div>
			</header>

			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12">
						<div className="bg-white p-8 rounded-lg shadow-md">
							<div className="flex items-center mb-6">
								<FaPhone className="text-3xl text-blue-600 mr-4" />
								<h2 className="text-3xl font-bold">Talk to Us</h2>
							</div>
							<p className="text-gray-600 mb-6">
								Want to ask questions or book a flight via a phone call? You can talk to us directly.
							</p>
							<Link
								href={"tel:+2349053951769"}
								className="text-2xl text-blue-600 font-bold hover:underline"
							>
								09053951769
							</Link>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-md">
							<div className="flex items-center mb-6">
								<FaEnvelope className="text-3xl text-blue-600 mr-4" />
								<h2 className="text-3xl font-bold">Send us a Message</h2>
							</div>
							<form>
								<div className="mb-4">
									<label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
									<input
										type="text"
										id="name"
										placeholder="Your Name"
										className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
									<input
										type="email"
										id="email"
										placeholder="Your Email"
										className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
									<textarea
										id="message"
										placeholder="Your Message"
										rows={4}
										className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
									></textarea>
								</div>
								<div className="text-right">
									<button
										type="submit"
										className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
									>
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
