import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export const ShowSolBalance = () => {
    let wallet = useWallet();
    let connection = useConnection();

    async function getBalance() {
        if(wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            (document.getElementById("balance") as )?.innerHTML = balance / LAMPORTS_PER_SOL
        }
    }

    return <div>
        <p>SOL Balance:</p> <div id="balance"></div>
    </div>
}