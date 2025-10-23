import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export const ShowSolBalance = () => {
    let wallet = useWallet();
    let connection = useConnection();

    async function getBalance() {
        if(wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance")
        }
    }

    return <div>
        <p>SOL Balance:</p> <div id="balance"></div>
    </div>
}