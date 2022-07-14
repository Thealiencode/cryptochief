
const main = async() => {

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const tranactions = await Transactions.deploy();

  await tranactions.deployed();

  console.log("Transactions deployed to:", tranactions.address);
}

const runMain = async () => {
  try{  
    await main();
    process.exit(0);
  }catch(error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();