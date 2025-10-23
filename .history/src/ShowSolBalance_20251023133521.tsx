import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export const ShowSolBalance = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    async function getBalance() {
      if (publicKey) {
        const bal = await connection.getBalance(publicKey);
        setBalance(bal / LAMPORTS_PER_SOL);
      } else {
        setBalance(null);
      }
    }

    getBalance();
  }, [publicKey, connection]);

  return (
    <div>
      <p>SOL Balance:</p>
      <div id="balance">
        {balance !== null ? `${balance} SOL` : "Connect your wallet"}
      </div>
    </div>
  );
};
