import { NextResponse } from "next/server";

async function callFunctions() {
  const response = await fetch(
    `http://localhost:8888/run-chainlink-functions-script`
  );

  const data = await response.text();
  console.log("DATA: " + data);
  return data;
}

export async function GET(request) {
  const data = await callFunctions();
  const headers = new Headers();
  headers.set("Cache-Control", "no-store, max-age=0");
  return new Response(data, { headers });
}
