import { Keypair } from "@solana/web3.js";

let kp = Keypair.generate()

console.log(`You are generating a new sollan wallet ${kp.publicKey.toBase58()}
To save your wallet, copy and paste the following 
[${kp.secretKey}]
`)