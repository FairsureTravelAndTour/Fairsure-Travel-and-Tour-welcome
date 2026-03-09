import React from "react";

const TermsAndCondition = () => {
	return (
		<div className="bg-gray-50">
			<header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/bg8.webp')" }}>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
					<h1 className="text-6xl font-bold">Terms and Conditions</h1>
				</div>
			</header>

			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="prose lg:prose-xl max-w-4xl mx-auto">
						<h2>1. Introduction</h2>
						<p>
							These Terms and Conditions govern your use of the Fairsure Travel and Tour website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
						</p>

						<h2>2. Bookings and Payments</h2>
						<p>
							All bookings are subject to availability. Prices are subject to change without notice. Full payment is required at the time of booking. We accept payment by credit/debit card and other payment methods as indicated on our website.
						</p>

						<h2>3. Cancellations and Refunds</h2>
						<p>
							Cancellation policies vary depending on the service booked. Please refer to the specific cancellation policy for your booking. Refunds, if applicable, will be processed within 14 business days.
						</p>

						<h2>4. Travel Documents</h2>
						<p>
							It is your responsibility to ensure that you have all necessary travel documents, including passports, visas, and any other required documentation. We are not responsible for any issues arising from your failure to do so.
						</p>

						<h2>5. Limitation of Liability</h2>
						<p>
							We are not liable for any loss, damage, or injury sustained by you as a result of your use of our services, except where such loss, damage, or injury is caused by our negligence. Our liability is limited to the total amount paid by you for the services.
						</p>

						<h2>6. Governing Law</h2>
						<p>
							These Terms and Conditions are governed by the laws of Nigeria. Any disputes arising from these Terms and Conditions will be subject to the exclusive jurisdiction of the courts of Nigeria.
						</p>

						<h2>7. Changes to These Terms and Conditions</h2>
						<p>
							We may update these Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms and Conditions on this page. You are advised to review these Terms and Conditions periodically for any changes.
						</p>

						<h2>8. Contact Us</h2>
						<p>
							If you have any questions about these Terms and Conditions, please contact us at [email protected]
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default TermsAndCondition;
