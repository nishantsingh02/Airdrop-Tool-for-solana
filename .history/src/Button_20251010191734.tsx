import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"


export function Button({children}: {
    children : string
}) {
    return <div className="button-wrap px-3 py-1 text-sm rounded-md bg-blue-500 text-white cursor-pointer">
  <button>
    <span>{children}</span>
  </button>
</div>
}