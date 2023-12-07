const { Contract } = require("ethers");
const fs = require("fs");
const path = require("path");
const { Location } = require("@chainlink/functions-toolkit");
require("@chainlink/env-enc").config();
// require('dotenv').config()

const { signer } = require("../connection.js");
const { abi } = require("../contracts/abi/FunctionsConsumer.json");

const consumerAddress = "0xDe5C73ab2bD1379c92D3e80666f859e7Fdc8e404";
const subscriptionId = "878";
const encryptedSecretsRef = "0xa266736c6f744964006776657273696f6e1a6571665f";

const sendRequest = async () => {
  if (!consumerAddress || !encryptedSecretsRef || !subscriptionId) {
    throw Error("Missing required environment variables.");
  }
  const functionsConsumer = new Contract(consumerAddress, abi, signer);

  // Function to replace placeholders with actual arguments
  function replacePlaceholders(template, args) {
    return template.replace(/{{(\w+)}}/g, (_, key) => args[key] || "");
  }

  const [, , congressNum, billT, billNum] = process.argv;

  const arguments = {
    congressNumber: congressNum,
    billType: billT,
    billNumber: billNum,
  };

  const sourceTemplate = fs
    .readFileSync(path.resolve(__dirname, "../source.js"))
    .toString();

  // Replace placeholders in the source file
  const modifiedSource = replacePlaceholders(sourceTemplate, arguments);

  const args = [];
  const callbackGasLimit = 300_000;

  console.log("\n Sending the Request....");
  const requestTx = await functionsConsumer.sendRequest(
    modifiedSource,
    Location.DONHosted,
    encryptedSecretsRef,
    args,
    [], // bytesArgs can be empty
    subscriptionId,
    callbackGasLimit
  );

  const txReceipt = await requestTx.wait(1);
  const requestId = txReceipt.events[2].args.id;
  console.log(
    `\nRequest made.  Request Id is ${requestId}. TxHash is ${requestTx.hash}`
  );
};

sendRequest().catch((err) => {
  console.log("\nError making the Functions Request : ", err);
});

module.exports = sendRequest;
