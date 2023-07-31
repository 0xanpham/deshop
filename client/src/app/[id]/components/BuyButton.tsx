"use client";

import { buy } from "@/app/api/market";
import useMetamask from "@/app/hooks/useMetamask";
import { useState } from "react";
import { toast } from "react-toastify";

export default function BuyButton({
  id,
  price,
}: {
  id: string;
  price: string;
}) {
  const [txHash, setTxHash] = useState<string | null>(null);
  const { signer } = useMetamask();

  const handleBuy = async () => {
    if (!signer) {
      toast.error("Please connect your wallet first");
      return;
    }
    try {
      const txReceipt = await buy(signer, id, price);
      toast.success("Buy successfully");
      setTxHash(txReceipt.hash);
    } catch (error: any) {
      toast.error(error.toString());
    }
  };

  return (
    <div className="mt-auto flex h-20 w-full items-center gap-8">
      {!txHash ? (
        <button
          onClick={handleBuy}
          className="mt-auto h-full w-48 bg-black text-xl font-bold uppercase text-white"
        >
          Buy
        </button>
      ) : (
        <a
          className="flex h-full w-96 items-center justify-center bg-black text-center text-xl font-bold uppercase text-white"
          href={`https://goerli.explorer.zksync.io/tx/${txHash}`}
          target="_blank"
        >
          View on explorer
        </a>
      )}
    </div>
  );
}
