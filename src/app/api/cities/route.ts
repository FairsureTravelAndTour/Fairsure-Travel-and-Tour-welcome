// src/app/api/cities/route.ts
import { NextResponse } from "next/server";
import cities from "../../../data/world-cities.json";

// Type for the city JSON (adjust if needed)
interface City {
	city: string;
	country: string;
	population: string;
}

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const query = searchParams.get("q");

	if (!query || query.length < 2) {
		return NextResponse.json([]);
	}

	// Filter and limit results
	const results = (cities as City[])
		.filter(
			(city) =>
				city.city.toLowerCase().includes(query.toLowerCase()) ||
				city.country.toLowerCase().includes(query.toLowerCase())
		)
		.sort((a, b) => Number(b.population) - Number(a.population))
		.slice(0, 20) // limit results
		.map((city) => ({
			value: city.city,
			label: `${city.city}, ${city.country}`,
		}));

	return NextResponse.json(results);
}
