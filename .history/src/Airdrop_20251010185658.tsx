import { useWallet } from "@solana/wallet-adapter-react"

export function Airdrop() {
    const wallet = useWallet();

    return <div className="">
        {"this is your public "}
        <input className="w-full px-4 m-2 text-black py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Amount" type="text" />
    </div>
}