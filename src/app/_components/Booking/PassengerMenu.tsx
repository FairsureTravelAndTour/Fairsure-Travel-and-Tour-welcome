import React from "react";

export interface PassengerCount {
	adults: number;
	children: number;
	infants: number;
}

interface ChildProps {
	onCountChange: (data: PassengerCount) => void;
	onErrorMessage: (data: string) => void;
	childData: PassengerCount;
}

const PassengerMenu = ({
	childData,
	onCountChange,
	onErrorMessage,
}: ChildProps) => {
	const updateCount = (
		type: "adults" | "children" | "infants",
		delta: number
	) => {
		const newCounts = { ...childData };
		const newTotal =
			newCounts.adults + newCounts.children + newCounts.infants + delta;

		if (newTotal > 9) {
			onErrorMessage("Total number of passengers must be between 1 and 9");
			return;
		}

		if (type === "infants" && newCounts.infants + delta > newCounts.adults) {
			onErrorMessage("Each adult can only fly with a maximum of one infant");
			return;
		}

		if (type === "adults" && newCounts.adults + delta < newCounts.infants) {
			onErrorMessage("Each adult can only fly with a maximum of one infant");
			return;
		}

		if (type === "adults") {
			newCounts.adults = Math.max(1, newCounts.adults + delta);
		} else {
			newCounts[type] = Math.max(0, newCounts[type] + delta);
		}

		onCountChange(newCounts);
	};

	const handleIncrease = (type: "adults" | "children" | "infants") => {
		updateCount(type, 1);
	};

	const handleDecrease = (type: "adults" | "children" | "infants") => {
		updateCount(type, -1);
	};

	return (
		<div className="p-4 space-y-2 bg-blue-50 w-fit  rounded-md shadow-md">
			{(["adults", "children", "infants"] as const).map((type) => (
				<div key={type} className="flex justify-between gap-5  items-center">
					<div className="w-full flex flex-col">
						<span className="capitalize">{type}</span>
						{type === "adults" && (
							<span className="text-[8px] text-gray-500">{"(>12 years)"}</span>
						)}
						{type === "children" && (
							<span className="text-[8px] text-gray-500">{"(2-12 years)"}</span>
						)}
						{type === "infants" && (
							<span className="text-[8px] text-gray-500">{"(< 2 years)"}</span>
						)}
					</div>

					<div className=" w-full flex items-center gap-2">
						<button
							onClick={() => handleDecrease(type)}
							className="px-2 py-1 bg-gray-200 rounded"
						>
							-
						</button>
						<span className="text-[10px]">{childData[type]}</span>
						<button
							onClick={() => handleIncrease(type)}
							className="px-2 py-1 bg-gray-200 rounded"
						>
							+
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default PassengerMenu;
