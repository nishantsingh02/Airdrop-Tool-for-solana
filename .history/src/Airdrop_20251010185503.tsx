import { useWallet } from "@solana/wallet-adapter-react"

export function Airdrop() {
    const wallet = useWallet();
    console.log(wallet)

    return <div className="">
       
       <div>
        <label className="text-xs font-medium text-gray-500">Wallet Address</label>
        <div className="flex items-center justify-between bg-gray-100 p-2 mt-1 rounded-md">
          <span className="font-mono text-sm text-gray-800">{wallet.}</span>
          
        </div>
      </div>

        <input className="w-full px-4 m-2 text-black py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Amount" type="text" />
    </div>
}