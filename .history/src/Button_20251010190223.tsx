import type { ReactElement } from "react"

export function Button({children}: {
    children : string,
    OnClick : () => {}
}) {
    return <div className="button-wrap px-3 py-1 text-sm rounded-md bg-blue-500 text-white cursor-pointer">
  <button>
    <span>{children}</span>
  </button>
</div>
}