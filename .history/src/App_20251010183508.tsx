import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import "./App.css";
import { WalletConnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css';

import { Airdrop } from "./Airdrop";
import { Button } from "./Button";

function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect> 
        <WalletModalProvider>
          <div className="text-gray-400">
              <WalletMultiButton />
              <h3>Airdrop Some SOL</h3>
          </div>
          <Airdrop />
          <Button children={"connect"} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
