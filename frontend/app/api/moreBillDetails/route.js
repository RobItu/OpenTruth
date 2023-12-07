import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

async function fetchMoreBillData(decodedUrl) {
  const response = await fetch(
    `${decodedUrl}&api_key=${process.env.GOV_API_KEY}&_=${Date.now()}`,
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
  const website = request.nextUrl.searchParams.get("foo");

  const decodedUrl = decodeURIComponent(website);

  const billData = await fetchMoreBillData(decodedUrl);
  return NextResponse.json(billData);
}
