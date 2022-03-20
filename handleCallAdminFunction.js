
const config = require('./config')
const Web3 = require('web3')
const Provider = require('@truffle/hdwallet-provider');

const provider = new Provider(config.privateKey, config.rpc);

const executeFunction = async ()=>{
 try{
  console.log("execute function",config.functionToCall);
  const web3 = new Web3(provider);
  const myContract = new web3.eth.Contract(config.abi, config.contractAddress);
  const receipt = await myContract.methods[config.functionToCall](...config.params).send({ from: config.accountAddress });
  console.log(`execute function successfully`);
  console.log(`response transaction hash: ${receipt.transactionHash}`);
 }
 catch(error){
  console.log(error);
  process.exit();
 }
 process.exit();
}
executeFunction();
