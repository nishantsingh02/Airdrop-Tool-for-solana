import React, { useState } from 'react'; // Make sure to import React and useState

// Assuming your sendTokens function is defined elsewhere
// const sendTokens = (toAddress, amount) => { ... };

export function SendTokens() { // Example component structure
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = () => {
    // Basic validation
    if (!to || !amount) {
      alert("Please fill in both address and amount.");
      return;
    }
    // Call your actual send logic
    // sendTokens(to, parseFloat(amount));
    console.log(`Sending ${amount} to ${to}`);
  };

  return (
    // We'll use a flex-col layout to stack the inputs and button
    <div className="flex flex-col space-y-3 w-full max-w-xs">
      <input
        id="to"
        type="text"
        placeholder="Recipient Address"
        className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        id="amount"
        type="number" // Use type="number" for amounts
        placeholder="Amount"
        className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button 
        onClick={handleSend} // Use the local handler
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
      >
        Send
      </button>
    </div>
  );
}





// import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import {
//   LAMPORTS_PER_SOL,
//   PublicKey,
//   SystemProgram,
//   Transaction,
// } from "@solana/web3.js";

// export const SendTokens = () => {
//   const wallet = useWallet();
//   const { connection } = useConnection();

//   async function sendTokens() {
//     let to = (document.getElementById("to") as HTMLInputElement)?.value;
//     let amount = (document.getElementById("amount") as HTMLInputElement)?.value;

//     if (!wallet.publicKey) {
//       alert("Connect your wallet first!");
//       return;
//     }

//     if(!to || !amount) {
//         alert("Please enter a valid address and amount.")
//         return;
//     }

//     const transaction = new Transaction();
//     transaction.add(
//       SystemProgram.transfer({
//         fromPubkey: wallet.publicKey,
//         toPubkey: new PublicKey(to),
//         lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
//       })
//     );

//     await wallet.sendTransaction(transaction, connection);
//     alert("Sent " + amount + "SOL to" + to);
//   }

//   return (
//     <div>
//       <input id="to" type="text" placeholder="Sender Address" />
//       <input id="amount" type="text" placeholder="Amount" />
//       <button onClick={sendTokens}>Send</button>
//     </div>
//   );
// };
