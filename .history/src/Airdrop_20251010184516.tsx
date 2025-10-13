import { useWallet } from "@solana/wallet-adapter-react"

export function Airdrop() {
    const wallet = useWallet();

    return <div className="">
        <div className="flex items-center bg-gray-100 p-2 rounded-md">
  <span className="text-gray-700 font-mono text-sm">
    {wallet.publicKey?.toString().slice(0, 6)}...{wallet.publicKey?.toString().slice(-6)}
  </span>
  <button 
    className="ml-2 text-blue-500 hover:text-blue-700"
    //@ts-ignore
    onClick={() => navigator.clipboard.writeText(wallet.publicKey?.toString())}
  >
    Copy
  </button>
</div>


        <input className="w-full px-4 m-2 text-black py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Amount" type="text" />
    </div>
}