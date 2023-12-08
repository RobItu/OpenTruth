const { decodeResult, ReturnType } = require("@chainlink/functions-toolkit");
const { Contract } = require("ethers");

const { signer } = require("../connection.js");
const { abi } = require("../contracts/abi/FunctionsConsumer.json");

/**
 * Script to listen to Function Consumer Contract Events
 * Will decode functions response as well.
 */

const consumerAddress = "0xDe5C73ab2bD1379c92D3e80666f859e7Fdc8e404";
const readResponse = async () => {
  const functionsConsumer = new Contract(consumerAddress, abi, signer);

  const responseBytes = await functionsConsumer.s_lastResponse();
  console.log("\nResponse Bytes : ", responseBytes);

  const decodedResponse = decodeResult(responseBytes, ReturnType.string);

  console.log("\nDecoded response from OpenAI/ChatGPT:", decodedResponse);
};

readResponse().catch((err) => {
  console.log("Error reading response: ", err);
});
