/**
 * Script for Functions and Chainlink DON
 * Fetches data from api.congress.gov dynamically
 * URL has been modified to hold placeholders to be replaced by their respective values when scripts/07_congress_request.js is triggered.
 */

const congressApiResponse = await Functions.makeHttpRequest({
  url: `https://api.congress.gov/v3/bill/{{congressNumber}}/{{billType}}/{{billNumber}}/text?format=json&api_key=${secrets.apiKey}`,

  headers: {
    accept: "application/json",
  },
});

if (congressApiResponse.error) {
  console.error(congressApiResponse.error);
  throw Error("Request failed");
}

const { data } = congressApiResponse;

// Return Bill HMTL text URL
return Functions.encodeString(data.textVersions[0].formats[0].url);
