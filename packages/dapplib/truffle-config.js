require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy renew place concert grace person bottom setup'; 
let testAccounts = [
"0xeceaa3bce8387b326e28084fcfcd3ff9ffc3b16f22ff85bd5c82319dffdd90b6",
"0x65dceaf28fcf141bd14f7f6bfefea6d5e8880cdc9c7a582f5436560750b5f338",
"0x7405b32a855176b01b7073542aea1fa0c00ddd51579a642820fb5ee32dcf6461",
"0x9f52e2786a5ce090a4a69fe26b2802fa9b3d38ae5763f51a2e2c31d762daad91",
"0x050267e7d83d3114072592e4639900e6bf7b771ba9921c2e170a6d881db92015",
"0xb0b6d564388046cdddbae02bc24c6a7ba015fe30b92cde407a1a22ce1e0a0838",
"0x1401fb41bc591e08a12417eb715e2c27d16b2be1106714524b536600781342f0",
"0x6a1093f9d23a119c185ff55a9b71a103755ef44cc5a913dfad754785e537d400",
"0x2b4e4b73cb31cd497c03694688e2f679dd4897c3860b3ce74107e2b818eba8d0",
"0x0b94b6c76b973239ecf09cc884e6611f4c0fc418c57c263412fb4bb98e15d7fa"
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

