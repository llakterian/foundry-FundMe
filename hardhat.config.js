require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: {
        version: "^0.8.19", // Make sure this matches the version required by Chainlink contracts
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    paths: {
        artifacts: "./artifacts",
        cache: "./cache",
        sources: "./src",
        tests: "./test",
        reports: "./reports"
    },
    networks: {
        hardhat: {
            chainId: 1337
        }
    }
};
