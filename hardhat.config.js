require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337, // We set 1337 to make interacting with MetaMask simpler
    },
  },
};

//require("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
// const ALCHEMY_API_KEY = "1BKa--dlwJBv5q4T_iw69fZfyXyQ1yY_";

// // Replace this private key with your Goerli account private key
// // To export your private key from Metamask, open Metamask and
// // go to Account Details > Export Private Key
// // Beware: NEVER put real Ether into testing accounts
// const GOERLI_PRIVATE_KEY =
//   "00faa048e85cb420cb9cb2445c3eed23d02aca90172bb9d04c64af60678c94fc";
// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     goerli: {
//       url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
//       accounts: [GOERLI_PRIVATE_KEY],
//     },
//   },
// };
