import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

/**
 * API call to retrieve more information about the selected bill
 *
 */

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

/**
 *
 * @param {*} request will contain the searchparameter "foo" that contains the selected bill's URL for further information
 * @returns an array of json objects containing more information on the selected bill
 */
export async function GET(request) {
  const website = request.nextUrl.searchParams.get("weburl");

  const decodedUrl = decodeURIComponent(website);

  const billData = await fetchMoreBillData(decodedUrl);
  return NextResponse.json(billData);
}
