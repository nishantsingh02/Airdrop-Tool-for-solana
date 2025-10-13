import { useWallet } from "@solana/wallet-adapter-react"

export function Airdrop() {
    const wallet = useWallet();

    return <div className="">
       
       <div>
        <label className="text-xs font-medium text-gray-500">Balance</label>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-2xl font-bold text-gray-900">
            {/* Formats the number with commas */}
            {wallet} 
          </span>
          <span className="text-base font-medium text-gray-500">{currency}</span>
        </div>
      </div>

        <input className="w-full px-4 m-2 text-black py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Amount" type="text" />
    </div>
}