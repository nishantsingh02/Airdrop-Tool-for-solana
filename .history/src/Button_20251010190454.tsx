import type { ReactElement } from "react"
import { send } from "vite"
import {sendAirdrop}
export function Button({children}: {
    children : string,
    OnClick : () => void
}) {
    return <div className="button-wrap px-3 py-1 text-sm rounded-md bg-blue-500 text-white cursor-pointer">
  <button onClick={() => {
    sendAirdropToUser
  }}>
    <span>{children}</span>
  </button>
</div>
}