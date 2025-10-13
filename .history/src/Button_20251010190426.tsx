import type { ReactElement } from "react"
import { send } from "vite"

export function Button({children}: {
    children : string,
    OnClick : () => void
}) {
    return <div className="button-wrap px-3 py-1 text-sm rounded-md bg-blue-500 text-white cursor-pointer">
  <button onClick={() => {
    sendAirdropTO
  }}>
    <span>{children}</span>
  </button>
</div>
}