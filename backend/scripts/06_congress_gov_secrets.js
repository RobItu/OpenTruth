const { SecretsManager } = require("@chainlink/functions-toolkit");
const fs = require("fs");
const path = require("path");

const { signer } = require("../connection.js");
const { networks } = require("../networks.js");

require("@chainlink/env-enc").config();
// require('dotenv').config()

/**
 * Script to create DON secrets for api.congress.gov functions
 * Make sure to update encryptedSecretsRef in scripts/07_congress_request.js
 * or Error: DON encrypted secrets not found will happen. 
 */

const NETWORK = "polygonMumbai";

const functionsRouterAddress = networks[NETWORK].functionsRouter;
const donId = networks[NETWORK].donId;

const encryptAndUploadSecrets = async () => {
  const secretsManager = new SecretsManager({
    signer,
    functionsRouterAddress,
    donId,
  });

  await secretsManager.initialize();

  if (!process.env.GOV_API_KEY) {
    throw Error("GOV_API_KEY not found in .env.enc file");
  }

  const secrets = {
    apiKey: process.env.GOV_API_KEY,
  };

  const encryptedSecretsObj = await secretsManager.encryptSecrets(secrets);

  const gatewayUrls = networks[NETWORK].gatewayUrls;
  const slotId = 0;
  const minutesUntilExpiration = 75;

  const {
    version, // Secrets version number (corresponds to timestamp when encrypted secrets were uploaded to DON)
    success, // Boolean value indicating if encrypted secrets were successfully uploaded to all nodes connected to the gateway
  } = await secretsManager.uploadEncryptedSecretsToDON({
    encryptedSecretsHexstring: encryptedSecretsObj.encryptedSecrets,
    gatewayUrls,
    slotId,
    minutesUntilExpiration,
  });

  if (success) {
    console.log("\nUploaded secrets to DON...");
    const encryptedSecretsReference =
      secretsManager.buildDONHostedEncryptedSecretsReference({
        slotId,
        version,
      });

    console.log(
      `\nMake a note of the encryptedSecretsReference: ${encryptedSecretsReference} `
    );
  }
};

encryptAndUploadSecrets().catch((err) => {
  console.log("Error encrypting and uploading secrets:  ", err);
});
