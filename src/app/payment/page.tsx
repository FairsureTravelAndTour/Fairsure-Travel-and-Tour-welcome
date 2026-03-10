"use client";

import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

declare global {
	interface Window {
		FairsureCheckout: any;
		FAIRSURE_CHECKOUT_CONFIG: any;
	}
}

interface BookingData {
	name: string;
	email: string;
	phoneNumber: string;
	adults: number;
	children: number;
	infants: number;
	flightType: string;
	flightClass: string;
	noOfPassengers: number;
	departureLocation: string;
	arrivalLocation: string;
	departureDate: string;
	arrivalDate: string | null;
	departureLat: number;
	departureLng: number;
	arrivalLat: number;
	arrivalLng: number;
}

const PaymentPage: React.FC = () => {
	const router = useRouter();
	const [bookingData, setBookingData] = useState<BookingData | null>(null);
	const [amount, setAmount] = useState<number>(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const data = localStorage.getItem('bookingData');
		if (!data) {
			toast.error('No booking data found');
			router.push('/');
			return;
		}

		const parsedData: BookingData = JSON.parse(data);
		setBookingData(parsedData);

		const randomAmount = 50;
		// const randomAmount = 50 + Math.floor(Math.random() * 51);
		setAmount(randomAmount);

		setLoading(false);
	}, [router]);

	const handlePaymentSuccess = useCallback(async (response: any) => {
		if (!bookingData) return;

		try {
			// const res = await fetch('/api/book-flight', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify({
			// 		...bookingData,
			// 		arrivalDate: bookingData.arrivalDate ? bookingData.arrivalDate : null,
			// 		paymentRef: response.transactionRef,
			// 		amount: amount,
			// 	}),
			// });

			// const result = await res.json();
			// if (!res.ok) {
			// 	toast.error(result.message);
			// 	return;
			// }

			// toast.success('Booking and payment successful!');
			// localStorage.removeItem('bookingData');
			router.push('/');
		} catch (err) {
			console.error(err);
			console.log("Error saving to supabase:", err);
			toast.error('Failed to save booking');
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bookingData, amount, router]);

	const handlePaymentError = useCallback((response: any) => {
		toast.error('Payment failed: ' + (response.message || 'Unknown error'));
	}, []);

	const initializePayment = useCallback(() => {
		if (typeof window.FairsureCheckout === 'undefined') {
			console.error('Fairsure Checkout script not loaded');
			return;
		}

		const merchantKey = 'LIVE_DV9GAPQUJWA7GWATG9LJ';

		window.FairsureCheckout.setup({
			key: merchantKey,
			email: bookingData?.email || '',
			amount: amount,
			currency: 'NGN',
			first_name: bookingData?.name.split(' ')[0] || '',
			last_name: bookingData?.name.split(' ').slice(1).join(' ') || '',
			phone_number: bookingData?.phoneNumber || '',
			customerId: bookingData?.email || '',
			ref: 'TXN-' + Date.now(),
			narration: 'Flight Booking Payment',
			callback_url: "http://localhost:3000/payment/",
			onSuccess: handlePaymentSuccess,
			onError: handlePaymentError,
			onClose: () => console.log('Payment modal closed'),
		});
	}, [bookingData, amount, handlePaymentSuccess, handlePaymentError]);

	useEffect(() => {
		if (!loading && bookingData) {
			const SCRIPT_URL = 'https://checkout.fairsurepay.com/js/host/fairsure-checkout-inline.js';
			window.FAIRSURE_CHECKOUT_CONFIG = { checkoutUrl: 'https://checkout.fairsurepay.com/' };

			const existing = document.querySelector(`script[src="${SCRIPT_URL}"]`);
			if (existing) {
				// initializePayment();
				return;
			} else {
				const script = document.createElement('script');
				script.src = SCRIPT_URL;
				script.async = true;
				// script.onload = initializePayment;
				script.onerror = () => console.error('Failed to load Fairsure Checkout script');
				document.body.appendChild(script);
			}
		}
	}, [loading, bookingData, amount, initializePayment]);

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-gray-50">
				<div className="text-xl animate-pulse">Loading...</div>
			</div>
		);
	}

	if (!bookingData) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-gray-50">
				<div className="text-xl text-red-500">No booking data found</div>
			</div>
		);
	}

	return (
        <div className="bg-gray-50">
            <header className="relative h-64 bg-center bg-cover" style={{ backgroundImage: "url('/bg10.webp')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className="text-5xl font-bold">Complete Your Payment</h1>
                </div>
            </header>
            <main className="py-16">
                <div className="container px-4 mx-auto">
                    <div className="max-w-2xl mx-auto overflow-hidden bg-white shadow-2xl rounded-xl">
                        <div className="px-8 py-10">
                            <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
                                Booking Summary
                            </h2>

                            <div className="mb-10 space-y-6">
                                <div className="flex items-center justify-between pb-4 border-b">
                                    <span className="text-lg text-gray-600">From:</span>
                                    <span className="text-lg font-semibold">{bookingData.departureLocation}</span>
                                </div>
                                <div className="flex items-center justify-between pb-4 border-b">
                                    <span className="text-lg text-gray-600">To:</span>
                                    <span className="text-lg font-semibold">{bookingData.arrivalLocation}</span>
                                </div>
                                <div className="flex items-center justify-between pb-4 border-b">
                                    <span className="text-lg text-gray-600">Passengers:</span>
                                    <span className="text-lg font-semibold">{bookingData.noOfPassengers}</span>
                                </div>
                                <div className="flex items-center justify-between pb-4 border-b">
                                    <span className="text-lg text-gray-600">Flight Class:</span>
                                    <span className="text-lg font-semibold capitalize">{bookingData.flightClass}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg text-gray-600">Departure Date:</span>
                                    <span className="text-lg font-semibold">{bookingData.departureDate}</span>
                                </div>
                            </div>

                            <div className="pt-6 border-t-2 border-dashed">
                                <div className="flex justify-between text-2xl font-bold text-gray-800">
                                    <span>Total Amount:</span>
                                    <span>₦{(amount).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="px-8 pb-8">
                            <button
                                onClick={initializePayment}
                                className="w-full px-6 py-4 font-bold text-white transition-transform duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
                            >
                                Pay Now
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
	);
};

export default PaymentPage;