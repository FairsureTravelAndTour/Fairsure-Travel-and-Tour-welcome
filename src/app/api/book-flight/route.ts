import { NextResponse } from "next/server";
import { supabase } from "../../../services/supabase";
import nodemailer from "nodemailer";

interface Payload {
	name: string;
	email: string;
	adults: number;
	children: number;
	infants: number;
	phoneNumber: string;
	flightType: string;
	flightClass: string;
	noOfPassengers: number;
	departureLocation: string;
	arrivalLocation: string;
	departureDate: Date;
	arrivalDate: Date | null;
}

export async function POST(request: Request) {
	const {
		name,
		email,
		adults,
		children,
		infants,
		phoneNumber,
		flightType,
		flightClass,
		noOfPassengers,
		departureLocation,
		arrivalLocation,
		departureDate,
		arrivalDate,
	}: Payload = await request.json();

	const { data, error } = await supabase.from("Bookings").insert([
		{
			name,
			email,
			phone_number: phoneNumber,
			adults,
			children,
			infants,
			flight_type: flightType,
			flight_class: flightClass,
			no_of_passengers: noOfPassengers,
			departure_location: departureLocation,
			arrival_location: arrivalLocation,
			departure_date: departureDate,
			arrival_date: arrivalDate,
		},
	]);

	if (error) {
		console.error("Error inserting booking:", error);
		return NextResponse.json(
			{ message: "Booking failed", error: error.message },
			{ status: 500 }
		);
	}

	// Send email notification
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.SMTP_USER, // your email
			pass: process.env.SMTP_PASS, // app password (not your real password)
		},
	});

	const mailOptions = {
		from: `"Fairsure Travel Website" <${process.env.SMTP_USER}>`,
		to: "fairsuretravels@gmail.com", 
		subject: `New Flight Booking from ${name}`,
		html: `
			<h2>New Flight Booking</h2>
            <h4>You've got a new flight booking from ${name}</h4>
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Phone:</strong> ${phoneNumber}</p>
			<p><strong>Passengers:</strong> ${noOfPassengers} (Adults: ${adults}, Children: ${children}, Infants: ${infants})</p>
			<p><strong>Flight Type:</strong> ${flightType}</p>
			<p><strong>Class:</strong> ${flightClass}</p>
			<p><strong>From:</strong> ${departureLocation} → <strong>To:</strong> ${arrivalLocation}</p>
			<p><strong>Departure Date:</strong> ${departureDate}</p>
			<p><strong>Arrival Date:</strong> ${arrivalDate || "N/A"}</p>
		`,
	};

	// Send email
	try {
		await transporter.sendMail(mailOptions);
	} catch (err) {
		console.error("Email failed:", err);
		return NextResponse.json(
			{ message: "Booking succeeded but email failed", error: err },
			{ status: 500 }
		);
	}

	// Send response with booking data
	return NextResponse.json(data, { status: 200 });
}
