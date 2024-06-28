require("@chainlink/env-enc").config();
// require('dotenv').config()

const DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS = 2;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const networks = {
  ethereumSepolia: {
    gasPrice: undefined,
    nonce: undefined,
    accounts: [PRIVATE_KEY],
    verifyApiKey: process.env.ETHERSCAN_API_KEY || "UNSET",
    chainId: 11155111,
    confirmations: DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
    nativeCurrencySymbol: "ETH",
    linkToken: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
    linkPriceFeed: "0x42585eD362B3f1BCa95c640FdFf35Ef899212734", // LINK/ETH
    functionsRouter: "0xb83E47C2bC239B3bf370bc41e1459A34b41238D0",
    donId: "fun-ethereum-sepolia-1",
    gatewayUrls: [
      "https://01.functions-gateway.testnet.chain.link/",
      "https://02.functions-gateway.testnet.chain.link/",
    ],
  },
  polygonAmoy: {
    gasPrice: 20_000_000_000,
    nonce: undefined,
    accounts: [PRIVATE_KEY],
    verifyApiKey: process.env.POLYGONSCAN_API_KEY || "UNSET",
    chainId: 80002,
    confirmations: DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
    nativeCurrencySymbol: "MATIC",
    linkToken: "0x0Fd9e8d3aF1aaee056EB9e802c3A762a667b1904",
    linkPriceFeed: "0x408D97c89c141e60872C0835e18Dd1E670CD8781", // LINK/MATIC
    functionsRouter: "0xC22a79eBA640940ABB6dF0f7982cc119578E11De",
    donId: "fun-polygon-amoy-1",
    gatewayUrls: [
      "https://01.functions-gateway.testnet.chain.link/",
      "https://02.functions-gateway.testnet.chain.link/",
    ],
  },
};

module.exports = {
  networks,
};
