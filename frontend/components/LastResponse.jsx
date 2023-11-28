import Web3 from "web3";
import contractABI from "../../backend/contracts/abi/FunctionsConsumer.json";

const lastResponse = () => {
  const fetchContractData = async () => {
    try {
      // Using a public RPC URL for the Mumbai testnet
      const web3 = new Web3(process.env.RPC_URL);
      const contractAddress = "0xde5c73ab2bd1379c92d3e80666f859e7fdc8e404";
      const ABI = contractABI.abi;

      const contract = new web3.eth.Contract(ABI, contractAddress);
      console.log("CALLING");
      const response = await contract.methods.s_lastResponse().call();
      console.log(response);
    } catch (error) {
      console.error("Error fetching data from the contract:", error);
    }
  };

  fetchContractData();

  return (
    <div>
      <h1>Contract Data</h1>
      <p>Last Response: what</p>
    </div>
  );
};

export default lastResponse;
