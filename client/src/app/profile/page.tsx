"use client";

import { useEffect, useState } from "react";
import useMetamask from "../../hooks/useMetamask";
import { redirect } from "next/navigation";
import { IUserNFT, getUserAllNFTs } from "@/api/nft";
import useWeb3 from "@/hooks/useWeb3";
import Image from "next/image";

export default function Profile() {
  const { signer } = useMetamask();
  const { provider } = useWeb3();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nfts, setNfts] = useState<IUserNFT[]>([]);

  useEffect(() => {
    setTimeout(() => {
      if (!signer) {
        redirect("/");
      }
    }, 100);
  }, [signer]);

  useEffect(() => {
    async function fetchData() {
      if (!provider || !signer) {
        return;
      }
      setIsLoading(true);
      const userNfts = await getUserAllNFTs(provider, signer.address);
      setNfts(userNfts);
      setIsLoading(false);
    }
    fetchData();
  }, [signer, provider]);

  return (
    <div className="container mx-auto min-h-screen overflow-x-hidden py-20 pt-44">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid w-full grid-cols-4 gap-10">
          {nfts.map((item, index) => (
            <div key={index} className="h-[50vh] w-full">
              <div className="h-3/4 w-full bg-gray-100 p-10">
                <div className="relative h-full w-full">
                  <Image src={item.uri} alt="nike" fill objectFit="contain" />
                </div>
              </div>
              <h2 className="my-4 text-center text-xl font-bold uppercase">
                Nike Air Force
              </h2>
              <div className="flex items-center justify-center text-xl font-semibold">
                Total {item.balance}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
