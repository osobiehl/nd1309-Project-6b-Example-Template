as usual, the rinkeby test network faucet is not giving any ether ;-; so I can't deploy the contract on Rinkeby or other test networks . . .
I did manage to start the migration on the kovan network, but only received one TXhash and the program got stuck. either way here is the  only 
transaction hash I got: 0xdd1c3005e355e39213790257b13ce6d7153145949258388e4c586fdc96793a7c.
Unfortunately this txhash doesn't appear on etherscan either so I don't know what to do. 

The UML diagrams can be found in the UML folder. I decided to exclude the methods that were shared between consumer, farmer, distributor, and retailer to avoid unnecessary bloat. These methods are the traditional add_ , renounce(), is_(), etc.
truffle version: 4.1.14
web3: 1.3.1