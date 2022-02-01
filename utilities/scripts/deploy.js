async function main() {
    const TheDot = await ethers.getContractFactory("TheDot")
  
    // Start deployment, returning a promise that resolves to a contract object
    const theDot = await TheDot.deploy()
    await theDot.deployed()
    console.log("Contract deployed to address:", theDot.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  