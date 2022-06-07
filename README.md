# lotterydapps
## Steps torun localy 

1- install ganache-cli and truffle 

2- create account in infura and then a project, create metamask wallet.

3- run ganache-cli

4- replace MNEMONIC and infura_project_id with your metamask wallet's MNEMONIC and infura_project_id respectively in truffle-config.js file

4- run 'npm install', 'truffle migrate --reset --network development' at the root directory

5- run 'truffle test --network development'


## Steps to run on remote test network
contracts can be deployed on ropsten or rinkeby using truffle commands. network name must be same in truffle-config.js

1- run 'truffle migrate --network ropsten'

2- after deployment , contract must be verified and published to the network, then it can be tested using read and write contract tab on the deployed contract page in https://ropsten.etherscan.io/ e,g

## Steps to run in remix

1- go to remix ide either localy installed or online

2- create contract file in editor

2- compile and deploy the contract

3- test the contract methods