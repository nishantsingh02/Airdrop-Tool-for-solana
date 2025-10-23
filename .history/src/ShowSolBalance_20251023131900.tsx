import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export const ShowSolBalance = () => {
    let wallet = useWallet();
    let connection = useConnection();

    async function getBalance() {
        if(wallet.publicKey) {
            
        }
    }
}