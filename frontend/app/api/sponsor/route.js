import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

/**
 * API call to retrieve more information about the bill's sponsor.
 *
 * @param {string} bioguideId used to fetch more information on bill's sponsor member
 * @returns json
 */

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

/**
 *
 * @param {*} request contains bioguideId that is used to look through congress members profiles
 * @returns json
 */
export async function GET(request, res) {
  const bioguideId = request.nextUrl.searchParams.get("bioguideid");

  const billData = await fetchSponsor(bioguideId);
  return NextResponse.json(billData);
}
