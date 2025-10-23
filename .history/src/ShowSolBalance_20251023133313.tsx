import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";

export const ShowSolBalance = () => {
  let wallet = useWallet();
  let connection = useConnection();
  const [balance, setBalance] = useState<number | null>(null)

    useEffect(() => {
        async function getBalance() {
            if(wallet.publicKey) {
                const bal = await connection.getBalance(wallet.publicKey)
                setBalance(bal / LAMPORTS_PER_SOL)
            } else {
                setBalance(null);
            }
        }

           getBalance();
    }, [PublicKey])


    return (
      <div className="flex justify-between items-center w-full max-w-xs p-3 bg-gray-800 rounded-md border border-gray-700">
  <p className="text-gray-300 font-medium">
    SOL Balance:
  </p> 
  
  <div id="balance" className="text-white font-bold text-lg">
    {/* Your app logic will set this value */}
    0.00
  </div>
</div>
    );
};
