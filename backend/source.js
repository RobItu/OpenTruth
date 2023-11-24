const openAIResponse = await Functions.makeHttpRequest({
  url: `https://api.congress.gov/v3/bill/118/hr/5283/text?format=json&api_key=${secrets.apiKey}`,
  headers: {
    accept: "application/json",
  },
});

if (openAIResponse.error) {
  console.error(openAIResponse.error);
  throw Error("Request failed");
}

const { data } = openAIResponse;

// Return Character Name
return Functions.encodeString(data.textVersions[0].formats[0].url);
