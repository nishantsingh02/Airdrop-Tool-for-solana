import React from "react"; // Added React import for clarity
// import {
//   ConnectionProvider,
//   WalletProvider,
// } from "@solana/wallet-adapter-react";
// import "./App.css"; // Removed: CSS imports must be removed for this environment
// import {
//   WalletModalProvider,
//   WalletMultiButton,
// } from "@solana/wallet-adapter-react-ui";
// import "@solana/wallet-adapter-react-ui/styles.css"; // Removed: CSS imports must be removed

// import { Airdrop } from "./Airdrop"; // Removed: Will define mock component below
// import { SendTokens } from "./SendTokens"; // Removed: Will define mock component below
// import { ShowSolBalance } from "./ShowSolBalance"; // This import is unused, preserving it as a comment.

// --- Mock Components ---
// To fix the compilation errors, we must mock the components
// that are imported from external packages or other files.

const ConnectionProvider = ({ children }) => <>{children}</>;
const WalletProvider = ({ children }) => <>{children}</>;
const WalletModalProvider = ({ children }) => <>{children}</>;

const WalletMultiButton = ({ className }) => (
  <button
    className={
      className ||
      "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    }
  >
    Connect Wallet (Mock)
  </button>
);

const Airdrop = () => (
  <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 w-full">
    Airdrop 1 SOL (Mock)
  </button>
);

const SendTokens = () => (
  <div className="flex flex-col space-y-2 w-full">
    <input
      type="text"
      placeholder="Recipient Address"
      className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white w-full"
    />
    <input
      type="number"
      placeholder="Amount"
      className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white w-full"
    />
    <button className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 w-full">
      Send Tokens (Mock)
    </button>
  </div>
);

// --- End of Mock Components ---

function App() {
  return (
    // <ConnectionProvider endpoint="https://api.devnet.solana.com">
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/8y8Hi7MthK7hmykqgbvfg">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          {/* Main container: 
            - Changed justify-center to justify-start to align content to the top.
            - Added py-10 for vertical padding.
            - min-h-screen ensures it takes at least the full screen height.
            - If content overflows, the page will now scroll.
          */}
          <div className="flex flex-col items-center justify-start space-y-4 text-gray-400 p-4 min-h-screen py-10">
            <WalletMultiButton className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" />

            <h3 className="text-lg font-semibold">Airdrop Some SOL</h3>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-3 rounded-md text-sm font-medium flex items-center gap-2 max-w-md">
              <span>⚠️</span>
              <span>
                This is <strong>Devnet only</strong> — you won’t get real SOL.
                Connect your wallet to <strong>Devnet</strong> before
                airdropping.
              </span>
            </div>

            {/* --- Grid Container --- 
              - Replaced flexbox with CSS Grid.
              - grid-cols-1: 1 column on small screens.
              - md:grid-cols-2: 2 columns on medium screens.
              - lg:grid-cols-4: 4 columns on large screens (since you have 4 boxes).
              - max-w-7xl: Increased max-width to better fit 4 columns.
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mt-4">
              {/* Box 1: Airdrop */}
              <div className="border border-gray-700 rounded-lg p-6 flex flex-col items-center w-full space-y-3">
                <h4 className="text-lg font-semibold text-white">
                  Airdrop SOL
                </h4>
                <Airdrop />
              </div>

              {/* Box 2: Send Tokens */}
              <div className="border border-gray-700 rounded-lg p-6 flex flex-col items-center w-full space-y-3">
                <h4 className="text-lg font-semibold text-white">
                  Send Tokens
                </h4>
                <SendTokens />
              </div>

              {/* Box 3: Send Tokens (Copy) */}
              <div className="border border-gray-700 rounded-lg p-6 flex flex-col items-center w-full space-y-3">
                <h4 className="text-lg font-semibold text-white">
                  Send Tokens
                </h4>
                <SendTokens />
              </div>

              {/* Box 4: Send Tokens (Copy) */}
              <div className="border border-gray-700 rounded-lg p-6 flex flex-col items-center w-full space-y-3">
                <h4 className="text-lg font-semibold text-white">
                  Send Tokens
                </h4>
                <SendTokens />
              </div>
            </div>
            {/* --- End of Grid Container --- */}
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;





















// import {
//   ConnectionProvider,
//   WalletProvider,
// } from "@solana/wallet-adapter-react";
// import "./App.css";
// import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import '@solana/wallet-adapter-react-ui/styles.css';

// import { Airdrop } from "./Airdrop";
// import { SendTokens } from "./SendTokens";

// function App() {
//   return (
//     // <ConnectionProvider endpoint="https://api.devnet.solana.com">
//       <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/8y8Hi7MthK7hmykqgbvfg"> 
//       <WalletProvider wallets={[]} autoConnect> 
//         <WalletModalProvider>
//           <div className="flex flex-col items-center justify-center space-y-4 text-gray-400 p-4">
//             <WalletMultiButton className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" />
//             <h3 className="text-lg font-semibold">Airdrop Some SOL</h3>
//            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-3 rounded-md text-sm font-medium flex items-center gap-2">
//   <span>⚠️</span>
//   <span>
//     This is <strong>Devnet only</strong> — you won’t get real SOL. Connect your wallet to <strong>Devnet</strong> before airdropping.
//   </span>
// </div>

//             <Airdrop />
//             <SendTokens />
            
//           </div>
//         </WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   );
// }

// export default App;
