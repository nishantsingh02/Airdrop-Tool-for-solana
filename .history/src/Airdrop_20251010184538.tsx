import { useWallet } from "@solana/wallet-adapter-react"

export function Airdrop() {
    const wallet = useWallet();

    return <div className="">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-mono">
  {wallet.publicKey?.toString().slice(0, 6)}...{wallet.publicKey?.toString().slice(-6)}
</span>



        <input className="w-full px-4 m-2 text-black py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Amount" type="text" />
    </div>
}