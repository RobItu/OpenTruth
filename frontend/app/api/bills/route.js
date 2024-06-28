import { NextResponse } from "next/server";

/**
 * API Call to api.congress.gov
 *
 * Change "limit" value to the amount of bills you desire
 * @query "&_=${Date.now()}" sends current time to prevent cached responses
 * @returns Returns a list of bills sorted by date of latest action.
 */

async function fetchBills() {
  const response = await fetch(
    `https://api.congress.gov/v3/bill?limit=18&api_key=${
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

export async function GET(req) {
  const billData = await fetchBills();
  return NextResponse.json(billData);
}
