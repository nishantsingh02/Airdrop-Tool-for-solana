
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import "./App.css";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css';

import { Airdrop } from "./Airdrop";
import { SendTokens } from "./SendTokens";

function App() {
  return (
    // <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/8y8Hi7MthK7hmykqgbvfg"> 
      <WalletProvider wallets={[]} autoConnect> 
        <WalletModalProvider>
          <div className="flex flex-col items-center justify-center space-y-4 text-gray-400 p-4">
            <WalletMultiButton className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" />
            <h3 className="text-lg font-semibold">Airdrop Some SOL</h3>
           <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-3 rounded-md text-sm font-medium flex items-center gap-2">
  <span>⚠️</span>
  <span>
    This is <strong>Devnet only</strong> — you won’t get real SOL. Connect your wallet to <strong>Devnet</strong> before airdropping.
  </span>
</div>

            <Airdrop />
            <SendTokens />
            
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
