import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"

const wallet = useWallet()
const { connection } = useConnection()

function sendAirdropToUser() {
  //@ts
  connection.requestAirdrop(wallet.publicKey, LAMPORTS_PER_SOL)
}

export function Button({children}: {
    children : string
}) {
    return <div className="button-wrap px-3 py-1 text-sm rounded-md bg-blue-500 text-white cursor-pointer">
  <button onClick={sendAirdropToUser}>
    <span>{children}</span>
  </button>
</div>
}