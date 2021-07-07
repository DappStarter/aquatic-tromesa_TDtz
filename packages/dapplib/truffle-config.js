require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note spike evil hope clog success gather'; 
let testAccounts = [
"0x3bc723a6ebb4e4bf2b544665bcf70efa7a12c5140edb255e3d80c6160b3e7434",
"0x7d9758f3b869c8bf2b6d04a5e5ecdea713ca8e8e92eb8f457b1a9f9492fd4db6",
"0x696daac6dd27fbde761c80442fa26149202a81308164ccb26f038d6b0cecec4b",
"0x7b42bea1c278a96a2ca4ea254200820e7f2a24a415e4eb20bc302fbf481653c3",
"0x02ee1581cabde3316ecbd4737c7761caf54f2d98ca4312fa896b04521aa3820b",
"0x8a235547ed46a790ea0853bbb307003983d2b0df2fa6dad6193d591b9f4a5f5b",
"0x29523364827ad2c40bbe6a92179c4014943e57399afc0086d03b193844feff27",
"0x3b0d7b733112459347ac6da3c5c53469ae9401682a3952d2888206200bd6e11f",
"0x7b081874df37251740c817693f19059681326873808f17a3979b017170052720",
"0x276cd57b666a4dc7b3977531abdf8814706e70d492d36ccb79fb4165b2196c33"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

