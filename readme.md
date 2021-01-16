as usual, the rinkeby test network faucet is not giving any ether ;-; so I can't deploy the contract on Rinkeby. However, I managed to get some ether for the Goerli testnet. Here are the contract addresses:
GOERLI TESTNET

FarmerRole: 0x9b1c87f4624f70f9d3906aede8502051e4021a264d779916e756f4d1700dd23f

DistributorRole: 
0x37bbca9410aa8fad5030537c445820b74fe5349a916805ee3fbe7184ade0f3de

RetailerRole:
0x1c21d8ff34a1648ae298d1dae9e8b34b7b0c24aa16c14819d89e01ca9af550f1

ConsumerRole:
0xae0ea782cd8777377e3213f36740783cb92e82a5adc8490ce8b5c83dc3dbdabc

SupplyChain: 
0xf331708a987cc57e795d697f2c1d3a03ffb2693f251e8e93dcd2e8d08a995066

Saving successful migration to network...
  ... 0x128495c59c9312d0e3ed18504d3c9ed1962c8413256acbf038ab21253f8e2fce


The UML diagrams can be found in the UML folder. I decided to exclude the methods that were shared between consumer, farmer, distributor, and retailer to avoid unnecessary bloat. These methods are the traditional add_ , renounce(), is_(), etc.
truffle version: 4.1.14
web3: 1.3.1