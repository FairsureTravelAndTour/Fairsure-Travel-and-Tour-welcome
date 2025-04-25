/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSObjectWithLabel, GroupBase, StylesConfig } from "react-select";

export const customStyles: StylesConfig<any, false, GroupBase<any>> = {
	control: (provided: CSSObjectWithLabel, state: { isFocused: boolean }) => ({
		...provided,
		backgroundColor: state.isFocused ? "#DBEAFE" : "white",
		borderColor: "#9CA3AF", // blue-500 or gray-300
		borderWidth: "1px",
		borderRadius: "0.5rem", // rounded-lg
		padding: "0.4rem 0.5rem", // p-1 px-2
		boxShadow: state.isFocused ? "none" : "none", // focus:ring-2 focus:ring-blue-500
		"&:hover": {
			borderColor: "#9CA3AF", // hover:border-blue-500
		},
	}),
	option: (
		provided: CSSObjectWithLabel,
		state: { isSelected: boolean; isFocused: boolean }
	) => ({
		...provided,
		backgroundColor: state.isSelected
			? "#3b82f6"
			: state.isFocused
			? "#bfdbfe"
			: "white", // selected: blue-500, hover: blue-200
		color: state.isSelected ? "white" : "black",
		padding: "0.5rem 1rem", // py-2 px-4
	}),
	menu: (provided: CSSObjectWithLabel) => ({
		...provided,
		backgroundColor: "white",
		borderRadius: "0.375rem", // rounded-lg
		boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // shadow-md
	}),
	singleValue: (provided: CSSObjectWithLabel) => ({
		...provided,
		color: "#1f2937", // gray-800
	}),
	placeholder: (provided: CSSObjectWithLabel) => ({
		...provided,
		color: "#9ca3af", // text-gray-400
	}),
};

export const customStyles2: StylesConfig<any, false, GroupBase<any>> = {
	control: (provided: CSSObjectWithLabel) => ({
		...provided,
		backgroundColor: "#60A5FA",
		borderColor: "white",
		color: "white",
		boxShadow: "none",
		"&:hover": {
			borderColor: "white",
		},
	}),

	placeholder: (provided: CSSObjectWithLabel) => ({
		...provided,
		color: "white",
	}),

	indicatorsContainer: (provided: CSSObjectWithLabel) => ({
		...provided,
		color: "white",
	}),

	dropdownIndicator: (provided: CSSObjectWithLabel) => ({
		...provided,
		color: "white",
		"&:hover": {
			color: "white",
		},
	}),

	indicatorSeparator: (provided: CSSObjectWithLabel) => ({
		...provided,
		backgroundColor: "none",
	}),

	singleValue: (provided: CSSObjectWithLabel) => ({
		...provided,
		color: "white",
	}),
};
