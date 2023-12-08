/**
 * Functions source code for ChatGPT responses
 * ChatGPT is currenty not being used.
 */

const gptPrompt = args[0];

const postData = {
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: gptPrompt }],
  temperature: 0,
};

const openAIResponse = await Functions.makeHttpRequest({
  url: "https://api.openai.com/v1/chat/completions",
  method: "POST",
  headers: {
    Authorization: `Bearer ${secrets.apiKey}`,
    "Content-Type": "application/json",
  },
  data: postData,
});

if (congressApiResponse.error) {
  throw new Error(JSON.stringify(congressApiResponse));
}

const result = congressApiResponse.data.choices[0].message.content;

console.log(result);
return Functions.encodeString(result);
