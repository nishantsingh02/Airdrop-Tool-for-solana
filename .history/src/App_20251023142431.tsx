import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import "./App.css";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

import { Airdrop } from "./Airdrop";
import { SendTokens } from "./SendTokens";
import { ShowSolBalance } from "./ShowSolBalance";

function App() {
  return (
    // <ConnectionProvider endpoint="https://api.devnet.solana.com">
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/8y8Hi7MthK7hmykqgbvfg">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          {/* Main container: added min-h-screen for better vertical centering */}
          <div className="flex flex-col items-center justify-center space-y-4 text-gray-400 p-4 min-h-screen">
            
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

            <div className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow-lg text-xl shadow-purple-500/50">
  <ShowSolBalance />
</div>

            {/* --- New Container for your components --- */}
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl mt-4">
              
              {/* Box 1: Airdrop */}
              <div className="border border-gray-700 rounded-lg p-6 flex flex-col items-center w-full md:flex-1 space-y-3">
                <h4 className="text-lg font-semibold text-white">
                  Airdrop SOL
                </h4>
                <Airdrop />
              </div>

              {/* Box 2: Send Tokens */}
              <div className="border border-gray-700 rounded-lg p-6 flex flex-col items-center w-full md:flex-1 space-y-3">
                <h4 className="text-lg font-semibold text-white">
                  Send Tokens
                </h4>
                <SendTokens />
              </div>
              


            </div>
            {/* --- End of New Container --- */}

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
