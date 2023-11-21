import { NextResponse } from "next/server";

async function fetchBills() {
  const response = await fetch(
    `https://api.congress.gov/v3/bill?limit=11&api_key=${process.env.GOV_API_KEY}`,
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

export async function GET(request) {
  const billData = await fetchBills();
  return NextResponse.json(billData);
}
