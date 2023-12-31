require("@chainlink/env-enc").config();
// require('dotenv').config()

//Connects to provider, creates wallet and signer.

const { providers, Wallet } = require("ethers");

/**
 * Script that creates provider, wallet and signer with polygonMumbai RPC
 */

const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;

if (!MUMBAI_RPC_URL) {
  throw new Error("Please set the MUMBAI_RPC_URL environment variable");
}

const provider = new providers.JsonRpcProvider(MUMBAI_RPC_URL);
const wallet = new Wallet(process.env.PRIVATE_KEY || "UNSET");
const signer = wallet.connect(provider);

module.exports = { provider, wallet, signer };
