"use client";

import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { FaPlane } from "react-icons/fa";
import debounce from "lodash.debounce";
import { customStyles, customStyles2 } from "./asyncSelectStyles";
import Select, { SingleValue, components } from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PassengerMenu, { PassengerCount } from "./PassengerMenu";
import toast from "react-hot-toast";

interface CityOption {
	value: string;
	label: string;
}

const Booking: React.FC = () => {
	const [selectedFrom, setSelectedFrom] = useState<CityOption | null>(null);

	const [selectedTo, setSelectedTo] = useState<CityOption | null>(null);

	const [arrivalDate, setArrivalDate] = useState<Date | null>(null);

	const [departureDate, setdepartureDate] = useState<Date | null>(null);

	const [childData, setChildData] = useState<PassengerCount>({
		adults: 1,
		children: 0,
		infants: 0,
	});

	const [isPassengerMenuOpen, setIsPassengerMenuOpen] = useState(false);

	const [formData, setFormData] = useState({
		name: "", // Corresponds to the name input field
		email: "", // Corresponds to the email input field
		phoneNumber: "", // Corresponds to the phone number input field
		adults: 1, // Corresponds to the number of adults input field
		children: 0, // Corresponds to the number of children input field
		infants: 0, // Corresponds to the number of infants input field
		flightType: "one-way", // Corresponds to the flight type (e.g., one-way or round-trip)
		flightClass: "economy", // Corresponds to the flight class (economy, business, etc.)
		noOfPassengers: 1, // Corresponds to the total number of passengers
		departureLocation: "", // Corresponds to the departure city
		arrivalLocation: "", // Corresponds to the arrival city
		departureDate: "", // Corresponds to the departure date input field
		arrivalDate: null as string | null,
	});

	const [error, setError] = useState<string | null>(null);

	const tripOptions = [
		{ value: "one-way", label: "One Way" },
		{ value: "round-trip", label: "Round trip" },
	];

	const flightClasses = [
		{ value: "economy", label: "Economy" },
		{ value: "premium", label: "Premium" },
		{ value: "business", label: "Business" },
		{ value: "first", label: "First" },
	];

	const totalPassengers =
		childData.adults + childData.children + childData.infants;

	const handlePassengerCount = (data: PassengerCount) => {
		// console.log("Updated Passenger Count:", data);
		setChildData(data);

		// Update formData with new passenger counts
		setFormData((prevData) => ({
			...prevData,
			adults: data.adults,
			children: data.children,
			infants: data.infants,
			noOfPassengers: data.adults + data.children + data.infants,
		}));
	};
	const errorMessage = (data: string) => {
		setError(data);
		setTimeout(() => setError(null), 3000);
	};

	const passengerLabel = `${totalPassengers} Passenger${
		totalPassengers !== 1 ? "s" : ""
	}`;

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSelectChange = (
		selectedOption: { value: string; label: string },
		fieldName: string
	) => {
		setFormData((prevData) => ({
			...prevData,
			[fieldName]: selectedOption.value,
		}));

		if (fieldName === "flightType" && selectedOption.value === "one-way") {
			setArrivalDate(null); // clear date picker UI
			setFormData((prev) => ({
				...prev,
				arrivalDate: null, // <-- use null here
			}));
		}
	};

	// Fetch cities from an API
	const fetchCities = async (input: string): Promise<CityOption[]> => {
		if (!input || input.length < 2) return [];

		try {
			const response = await fetch(`/api/cities?q=${input}`);
			const data = await response.json();
			console.log("Fetched cities:", data);
			return data;
		} catch (error) {
			console.error("Error fetching cities from API:", error);
			return [];
		}
	};

	// Debounce the API call to avoid excessive requests

	const debouncedFetch = debounce(
		(input: string, callback: (options: CityOption[]) => void) => {
			fetchCities(input).then(callback);
		},
		500
	);

	// use this directly in AsyncSelect
	const loadOptions = (
		inputValue: string,
		callback: (options: CityOption[]) => void
	) => {
		if (inputValue.length < 2) return callback([]);
		debouncedFetch(inputValue, callback);
	};

	// Submit logic
	const handleSubmit = async (e: React.FormEvent) => {
		// console.log(formData);

		e.preventDefault();

		// Send the form data to the API
		const response = await fetch("/api/book-flight", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...formData,
				arrivalDate: formData.arrivalDate ? formData.arrivalDate : null,
			}), // This sends the formData to the backend
		});

		const result = await response.json();
		if (!response.ok) {
			toast.error(result.message);
			return;
		} else {
			toast.success("Booking successful!");
		}
	};

	const formatDate = (date: Date): string => {
		const offset = date.getTimezoneOffset();
		const localDate = new Date(date.getTime() - offset * 60 * 1000);
		return localDate.toISOString().split("T")[0];
	};

	return (
		<div className="container flex flex-col items-center " id="booking">
			<h2 className="text-2xl lg:text-4xl lg:font-black lg:mb-5 ">
				Search and book flights
			</h2>
			<div className=" bg-white p-3 lg:p-8 rounded-xl flex flex-col min-w-[300px] lg:min-w-[900px]">
				{/* Flight options */}
				<div className="flex flex-col lg:flex-row lg:gap-5 lg:mb-8 mb-3">
					<Select
						styles={customStyles2}
						options={tripOptions}
						placeholder=""
						value={{
							value: formData.flightType,
							label:
								formData.flightType === "one-way" ? "One Way" : "Round trip",
						}}
						onChange={(
							newValue: SingleValue<{ value: string; label: string }>
						) => {
							handleSelectChange(newValue!, "flightType");
						}}
						isSearchable={false}
					/>
					<Select
						styles={customStyles2}
						options={[{ value: "passenger-count", label: passengerLabel }]}
						placeholder=""
						value={{ value: "passenger-count", label: passengerLabel }}
						onChange={() => {}}
						isSearchable={false}
						onMenuOpen={() => setIsPassengerMenuOpen(true)}
						onMenuClose={() => setIsPassengerMenuOpen(false)}
						menuIsOpen={isPassengerMenuOpen}
						components={{
							Menu: (props) => (
								<components.Menu
									{...props}
									className="flex flex-col items-center"
								>
									<PassengerMenu
										{...props}
										onCountChange={handlePassengerCount}
										childData={childData}
										onErrorMessage={errorMessage}
									/>
									{error && (
										<p className=" font-semibold text-red-500 text-[9px] text-center">
											{error}
										</p>
									)}
								</components.Menu>
							),
							IndicatorSeparator: () => null, // optional: remove line between arrow and text
						}}
					/>
					<Select
						styles={customStyles2}
						options={flightClasses}
						placeholder=""
						value={{ value: formData.flightClass, label: formData.flightClass }}
						onChange={(
							newValue: SingleValue<{ value: string; label: string }>
						) => {
							handleSelectChange(newValue!, "flightClass");
						}}
						isSearchable={false}
					/>
				</div>

				{/* Form */}
				<form>
					{/* First Row - 3 Inputs */}
					<div className="lg:w-full flex flex-col lg:flex-row justify-between lg:gap-4 lg:mb-4 mb-2 ">
						<input
							type="text"
							name="name"
							placeholder="Full Name on ID"
							className="w-full border border-gray-400 p-3 rounded-md focus:outline-none focus:bg-blue-100"
							onChange={handleInputChange}
							value={formData.name}
						/>
						<input
							type="text"
							name="email"
							placeholder="Email"
							className="w-full border border-gray-400 p-3 rounded-md focus:outline-none focus:bg-blue-100"
							value={formData.email}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							name="phoneNumber"
							placeholder="Phone Number"
							className="w-full border border-gray-400 p-3 rounded-md focus:outline-none focus:bg-blue-100"
							value={formData.phoneNumber}
							onChange={handleInputChange}
						/>
					</div>

					{/* Second Row - Cities Dropdown */}
					<div className="flex lg:flex-row flex-col justify-between lg:items-center lg:gap-4 mb-4 ">
						<AsyncSelect
							styles={customStyles}
							loadOptions={loadOptions}
							placeholder="Where from"
							value={selectedFrom}
							onChange={(selected) => {
								setSelectedFrom(selected);
								setFormData((prevData) => ({
									...prevData,
									departureLocation: selected ? selected.value : "", // Update formData
								}));
							}}
							isSearchable
							className="w-full"
						/>
						<AsyncSelect
							styles={customStyles}
							loadOptions={loadOptions}
							placeholder="Going to"
							value={selectedTo}
							onChange={(selected) => {
								setSelectedTo(selected);
								setFormData((prevData) => ({
									...prevData,
									arrivalLocation: selected ? selected.value : "", // Update formData
								}));
							}}
							isSearchable
							className="w-full"
						/>
						<DatePicker
							selected={departureDate}
							onChange={(date) => {
								setdepartureDate(date);
								setFormData((prevData) => ({
									...prevData,
									departureDate: date ? formatDate(date) : "",
								}));
							}}
							placeholderText="Departure date"
							className="w-full lg:w-fit border  border-gray-400 p-3 rounded-md focus:outline-none focus:bg-blue-100"
							dateFormat="yyyy/MM/dd"
						/>
						{formData.flightType !== "one-way" && (
							<DatePicker
								selected={arrivalDate}
								onChange={(date) => {
									setArrivalDate(date);
									setFormData((prevData) => ({
										...prevData,
										arrivalDate: date ? formatDate(date) : null, // <-- change "" to null
									}));
								}}
								placeholderText="Arrival date"
								className="w-full lg:w-fit border border-gray-400 p-3 rounded-md focus:outline-none focus:bg-blue-100"
								dateFormat="yyyy/MM/dd"
							/>
						)}
					</div>
				</form>

				{/* Submit Button */}
				<div className="flex lg:justify-end justify-center">
					<button
						onClick={handleSubmit}
						className="bg-blue-400 hover:bg-blue-900 p-2 rounded-md text-white flex items-center justify-start gap-3 hover:gap-8 w-[150px]"
					>
						Book Flight <FaPlane />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Booking;
