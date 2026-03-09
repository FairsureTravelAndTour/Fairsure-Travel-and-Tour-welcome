import React from "react";

const PrivacyPolicy = () => {
	return (
		<div className="bg-gray-50">
			<header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/bg8.webp')" }}>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
					<h1 className="text-6xl font-bold">Privacy Policy</h1>
				</div>
			</header>

			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="prose lg:prose-xl max-w-4xl mx-auto">
						<h2>1. Introduction</h2>
						<p>
							Welcome to Fairsure Travel and Tour. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you use our services.
						</p>

						<h2>2. Information We Collect</h2>
						<p>
							We may collect the following types of personal information when you use our website or services:
						</p>
						<ul>
							<li><strong>Personal Identification Information:</strong> Name, email address, phone number, and passport details.</li>
							<li><strong>Booking Information:</strong> Flight details, hotel reservations, and other travel-related information.</li>
							<li><strong>Payment Information:</strong> Credit/debit card details and other payment information.</li>
							<li><strong>Technical Information:</strong> IP address, browser type, and operating system.</li>
						</ul>

						<h2>3. How We Use Your Information</h2>
						<p>
							We use the information we collect for the following purposes:
						</p>
						<ul>
							<li>To process your bookings and reservations.</li>
							<li>To provide you with customer support.</li>
							<li>To improve our website and services.</li>
							<li>To send you promotional offers and newsletters (if you opt-in).</li>
							<li>To comply with legal and regulatory requirements.</li>
						</ul>

						<h2>4. How We Protect Your Information</h2>
						<p>
							We use a variety of security measures to protect your personal information, including encryption, firewalls, and secure socket layer (SSL) technology. We also have strict internal policies and procedures to ensure that your information is handled in a safe and responsible manner.
						</p>

						<h2>5. Sharing Your Information</h2>
						<p>
							We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide you with advance notice. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
						</p>

						<h2>6. Your Rights</h2>
						<p>
							You have the right to access, correct, or delete your personal information at any time. You can also opt-out of receiving promotional offers and newsletters from us. To exercise these rights, please contact us at [email protected]
						</p>

						<h2>7. Changes to This Privacy Policy</h2>
						<p>
							We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
						</p>

						<h2>8. Contact Us</h2>
						<p>
							If you have any questions about this Privacy Policy, please contact us at [email protected]
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PrivacyPolicy;
