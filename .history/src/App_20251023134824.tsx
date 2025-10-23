// Import React from a CDN
import React from "https://esm.sh/react@18.2.0";

// --- Fix for Build Errors ---
// The original code had errors because it was trying to import external
// packages (like '@solana') and local files (like './Airdrop') that
// aren't available in this single-file environment.
//
// 1. Imports from '@solana' are changed to pull from a CDN (esm.sh).
// 2. The local CSS import ('./App.css') is removed.
// 3. The local component imports ('./Airdrop', './SendTokens') are replaced
//    with placeholder components defined directly in this file.

import {
  ConnectionProvider,
  WalletProvider,
} from "https://esm.sh/@solana/wallet-adapter-react@0.15.34";
// Removed: import "./App.css";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "https://esm.sh/@solana/wallet-adapter-react-ui@0.9.35";
// Import the CSS from the CDN
import "https://esm.sh/@solana/wallet-adapter-react-ui@0.9.35/styles.css";

// Removed: import { Airdrop } from "./Airdrop";
// Removed: import { SendTokens } from "./SendTokens";
// Removed: import { ShowSolBalance } from "./ShowSolBalance"; (was unused)

// --- Placeholder Components ---
// These components are defined here to resolve the import errors.
// They are styled to fit the existing layout.

/**
 * Placeholder component for Airdrop functionality.
 */
const Airdrop = () => {
  return (
    <div className="text-white bg-gray-800 p-4 rounded-lg w-full max-w-xs text-center">
      <p className="text-sm text-gray-400 mb-3">Airdrop Component</p>
      <button className="w-full px-3 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition-colors">
        Airdrop 1 SOL
      </button>
    </div>
  );
};

/**
 * Placeholder component for Send Tokens functionality.
 */
const SendTokens = () => {
  return (
    <div className="text-white bg-gray-800 p-4 rounded-lg w-full max-w-xs flex flex-col items-center space-y-3">
      <p className="text-sm text-gray-400">Send Tokens Component</p>
      <input
        type="text"
        placeholder="Recipient Address"
        className="p-2 rounded bg-gray-700 border border-gray-600 w-full text-sm text-white placeholder-gray-400"
      />
      <input
        type="number"
        placeholder="Amount (SOL)"
        className="p-2 rounded bg-gray-700 border border-gray-600 w-full text-sm text-white placeholder-gray-400"
      />
      <button className="w-full px-3 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors">
        Send
      </button>
    </div>
  );
};

// --- Main App Component ---

function App() {
  return (
    // <ConnectionProvider endpoint="https://api.devnet.solana.com">
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/8y8Hi7MthK7hmykqgbvfg">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          {/* Main container: 
            - Removed 'justify-center' and changed 'min-h-screen' to 'min-h-dvh' to fix scrolling. Content now starts from the top.
            - Increased padding (p-6 md:p-10) and spacing (space-y-6) for a cleaner look.
          */}
          <div className="flex flex-col items-center space-y-6 text-gray-400 p-6 md:p-10 min-h-dvh">
            <WalletMultiButton className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" />

            <h3 className="text-lg font-semibold text-white">Airdrop Some SOL</h3>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-3 rounded-md text-sm font-medium flex items-center gap-2 max-w-md">
              <span>⚠️</span>
              <span>
                This is <strong>Devnet only</strong> — you won’t get real SOL.
                Connect your wallet to <strong>Devnet</strong> before
                airdropping.
              </span>
            </div>

            {/* --- Grid Layout Container --- 
              - Changed from 'flex' to 'grid'
              - 'grid-cols-1' on mobile (stacking them)
              - 'md:grid-cols-2' on medium screens and up (2x2 grid)
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-6">
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

              {/* Box 3: Send Tokens */}
              <div className="border border-gray-700 rounded-lg p-6 flex flex-col items-center w-full space-y-3">
                <h4 className="text-lg font-semibold text-white">
                  Send Tokens
                </h4>
                <SendTokens />
              </div>

              {/* Box 4: Send Tokens */}
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
