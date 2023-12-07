import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

async function fetchSponsor(bioguideId) {
  const response = await fetch(
    `https://api.congress.gov/v3/member/${bioguideId}?format=json&api_key=${
      process.env.GOV_API_KEY
    }&_=${Date.now()}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );

  const bills = await response.json();
  return bills;
}

export async function GET(request, res) {
  const bioguideId = request.nextUrl.searchParams.get("foo");

  const billData = await fetchSponsor(bioguideId);
  return NextResponse.json(billData);
}
