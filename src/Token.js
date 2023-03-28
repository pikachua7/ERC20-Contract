const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '<ENTER-YOUR-CONTRACT-ADDRESS-HERE>';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("<ENTER-RECEIPIENT-ADDRESS-HERE>", parseUnits("1000000"));
    await contract.createTokens("<ENTER-RECEIPIENT-ADDRESS-HERE>");
    console.log("Successfull!!")
}

call();
