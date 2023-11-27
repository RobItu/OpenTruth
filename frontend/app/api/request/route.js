import React from "react";

// Import the necessary backend function
const sendRequest = require("../../../../backend/trigger.js");

async function handler(req, res) {
  // Call the sendRequest function from the backend folder
  const response = await fetch("https://httpstat.us/200");
  sendRequest();
  const jason = await response.json();
  return jason;
}

export async function GET(request) {
  const responseData = await handler();
  return NextResponse.json(responseData);
}
