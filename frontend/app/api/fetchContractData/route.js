import Web3 from "web3";
import contractABI from "../../../../backend/contracts/abi/FunctionsConsumer.json";
import { NextResponse } from "next/server";

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export async function GET(req, res) {
  try {
    // await delay(40000);
    const web3 = new Web3(process.env.MUMBAI_RPC_URL); // Use the RPC URL here
    const contractAddress = "0xde5c73ab2bd1379c92d3e80666f859e7fdc8e404";
    const contract = new web3.eth.Contract(contractABI.abi, contractAddress);
    const response = await contract.methods.s_lastResponse().call();
    return NextResponse.json(response);
  } catch (error) {
    console.log({ error: "Error fetching data from the contract" });
    res.status(500).json({ error: "Error " });
  }
}
