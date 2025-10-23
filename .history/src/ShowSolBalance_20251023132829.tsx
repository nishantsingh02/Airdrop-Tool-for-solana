import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect } from "react";

export const ShowSolBalance = () => {
  let wallet = useWallet();
  let connection = useConnection();

    useEffect(() => {
    async function getBalance() {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      document.getElementById("balance")?.innerHTML = balance / LAMPORTS_PER_SOL;
    } else {

    }
    })

    getBalance();

    return (
      <div>
        <p>SOL Balance:</p> <div id="balance"></div>
      </div>
    );
  }
};
