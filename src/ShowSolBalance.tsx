import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";

export const ShowSolBalance = () => {
  let wallet = useWallet();
  let {connection} = useConnection();
  const [balance, setBalance] = useState<number | null>(null)

    useEffect(() => {
        async function getBalance() {
            if(wallet.publicKey) {
                //@ts-ignore
                const bal = await connection.getBalance(wallet.publicKey)
                setBalance(bal / LAMPORTS_PER_SOL)
            } else {
                setBalance(null);
            }
        }

           getBalance();
    }, [wallet.publicKey, connection])


    return (
      <div>
      <p>SOL Balance:</p>
      <div id="balance">
        {balance !== null ? `${balance} SOL` : "Connect your wallet"}
      </div>
    </div>
    );
};
