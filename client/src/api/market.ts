import { DeShopMarketABI } from "@/abi";
import marketConfig from "@/config/market";
import zkSyncConfig from "@/config/zksync";
import { ethers } from "ethers";
import { getURI } from "./nft";
import { setTimeout } from "timers/promises";
import { Signer } from "ethers";
import { TransactionReceipt } from "ethers";

export interface IMarketItem {
  id: string;
  category: string;
  contractAddress: string;
  tokenId: string;
  seller: string;
  price: string;
  isActive: boolean;
  uri: string;
}

export async function getAllMarketItems(): Promise<IMarketItem[]> {
  const provider = new ethers.JsonRpcProvider(
    zkSyncConfig.testnet.rpcUrl,
    undefined,
  );
  const contract = new ethers.Contract(
    marketConfig.testnet.address,
    DeShopMarketABI,
    provider,
  );
  let data;
  try {
    data = await contract.getAllMarketItems();
    data = Promise.all(
      data.map(async (item: any): Promise<IMarketItem> => {
        return {
          id: item[0].toString(),
          category: item[1].toString(),
          contractAddress: item[2].toString(),
          tokenId: item[3].toString(),
          seller: item[4].toString(),
          price: item[5].toString(),
          isActive: item[6],
          uri: await getURI(provider, item[2].toString(), item[3].toString()),
        };
      }),
    );
    return data;
    // return data;
  } catch (error) {
    throw new Error("Failed to fetch market items");
  }
}

export async function getMarketItemById(
  id: string,
): Promise<IMarketItem | undefined> {
  try {
    const marketItems = await getAllMarketItems();
    const marketItem = marketItems.find((item) => item.id === id);
    return marketItem;
  } catch (error) {
    throw new Error("Failed to fetch market item with id " + id);
  }
}

export async function getAllCategories(): Promise<string[]> {
  const provider = new ethers.JsonRpcProvider(
    zkSyncConfig.testnet.rpcUrl,
    undefined,
  );
  const contract = new ethers.Contract(
    marketConfig.testnet.address,
    DeShopMarketABI,
    provider,
  );
  let data;
  try {
    data = await contract.getAllCategories();
    console.log(data);
    return data as string[];
  } catch (error) {
    throw new Error("Failed to fetch market items");
  }
}

export async function buy(
  signer: Signer,
  id: string,
  price: string,
): Promise<TransactionReceipt> {
  try {
    const contract = new ethers.Contract(
      marketConfig.testnet.address,
      DeShopMarketABI,
      signer,
    );
    const tx = await contract.buy(id, { value: price });
    const txReceipt = await tx.wait();
    return txReceipt as TransactionReceipt;
  } catch (error: any) {
    throw "Failed to buy, please try again";
  }
}
