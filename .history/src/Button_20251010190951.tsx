import type { ReactElement } from "react"


function airdrop

export function Button({children}: {
    children : string
}) {
    return <div className="button-wrap px-3 py-1 text-sm rounded-md bg-blue-500 text-white cursor-pointer">
  <button onClick={sendAirdropToUser}>
    <span>{children}</span>
  </button>
</div>
}