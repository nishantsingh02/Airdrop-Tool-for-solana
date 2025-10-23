import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import 
export const ShowSolBalance = () => {
    let wallet = useWallet();
    let connection = useConnection();

    async function getBalance() {
        if(wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey)
        }
    }
}