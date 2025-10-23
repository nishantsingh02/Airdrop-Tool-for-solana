import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export const SendTokens = () => {
    const wallet = useWallet();
    const {connection} = useConnection();

    function sendTokens() {
        let to = document.getElementById("to")?.value;
        let amount = document.getElementById("amount")?.value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to);
        }))
    } 

    return <div>
        <input id="to" type="text" placeholder="To" />
        <input id="amount" type="text" placeholder="Amount" />
        <button onClick={sendTokens}>Send</button>
    </div>
}