
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import "./App.css";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css';

import { Airdrop } from "./Airdrop";

function App() {
  return (
    // <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/8y8Hi7MthK7hmykqgbvfg"> 
      <WalletProvider wallets={[]} autoConnect> 
        <WalletModalProvider>
          <div className="flex flex-col items-center justify-center space-y-4 text-gray-400 p-4">
            <WalletMultiButton className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" />
            <h3 className="text-lg font-semibold">Airdrop Some SOL</h3>
            <div className="text-sm">
              ⚠️ This is Devnet only — you won’t get real SOL. Connect your wallet to Devnet before airdropping.
            </div>
            <Airdrop />
            
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
