import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export const SendTokens = () => {
    const wallet = useWallet();
    const {connection} = useConnection();

    return <div>
        <input id="to" type="text" placeholder="To" />
        <input />
        <button />
    </div>
}