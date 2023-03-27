const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '0x722185db45507D5f74d599344c2fe4947C43e2a9';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("0x4D97F9Fc23Ce4B0be1F59d450B1acF550f18da5A", parseUnits("1000000"));
    await contract.createTokens("0x4D97F9Fc23Ce4B0be1F59d450B1acF550f18da5A");
    console.log("Successfull!!")
}

call();