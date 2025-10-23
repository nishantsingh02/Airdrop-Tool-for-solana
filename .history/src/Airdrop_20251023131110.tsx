import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop() {
  const wallet = useWallet(); // does not create a new wallet — it’s only for accessing and interacting with an existing connected wallet
  const { connection } = useConnection();

  async function sendAirdropToUser() {
    const amount: any = document.getElementById("inputBox");
    if (!wallet.publicKey) return; // that mean wallet does not exist

    await connection.requestAirdrop(
      wallet.publicKey,
      amount.value * 1000000000
    );
    alert(`Airdroped ${amount.value} SOL`);
    console.log(wallet);
  }

  return (
    <div className="">
      {/* Public key */}
      <div className="bg-gray-100 p-3 md:p-4 rounded-lg shadow-sm">
        <p className="text-gray-700 text-sm md:text-base font-medium mb-2">
          Hi User, This is your Public Key
        </p>
        <div className="flex items-center gap-2 bg-white p-2 rounded border border-gray-200">
          <code className="text-xs md:text-sm text-gray-800 flex-1 truncate">
            {wallet.publicKey?.toString()}
          </code>
          <button
            onClick={() => {
              navigator.clipboard.writeText(wallet.publicKey?.toString() || "");
              // Add toast notification here if desired
            }}
            className="text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0"
            title="Copy to clipboard"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* input Box code */}
      <input
        id="inputBox"
        className="w-full px-4 m-2 bg-white text-gray-900 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400"
        placeholder="Amount"
        type="text"
      />
      <div className="text-xl">
        <button
         onClick={() => sendAirdropToUser()}>
          <span>Airdrop</span>
        </button>
      </div>
    </div>
  );
}
