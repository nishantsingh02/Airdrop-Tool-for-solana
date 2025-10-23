import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect } from "react";

export const ShowSolBalance = () => {
  let wallet = useWallet();
  let connection = useConnection();

    useEffect(() => {
        async function getBalance() {
            if(wallet.publicKey) {
                const bal = await getBalance()
            }
        }
    }, [])

    getBalance();

    return (
      <div>
        <p>SOL Balance:</p> <div id="balance"></div>
      </div>
    );
  }
};
