import { useWallet } from "@solana/wallet-adapter-react"

export function Airdrop() {
    const wallet = useWallet();

    return <div className="">
        <p class="bg-gray-100 text-gray-800 font-mono text-sm p-3 rounded-lg break-all">
  {wallet.publicKey?.toString()}
</p>

        <input className="w-full px-4 m-2 text-black py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Amount" type="text" />
    </div>
}