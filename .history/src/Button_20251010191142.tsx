import { useConnection } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"

const { connection } = useConnection()

function sendAirdropToUser() {
  connection.requestAirdrop(Wallet.publicKey, LAMPORTS_PER_SOL)
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