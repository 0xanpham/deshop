import { DeShopMarketABI, DeShopNFTABI } from "@/abi";
import { JsonRpcProvider, ethers } from "ethers";
import { getAllMarketItems } from "./market";
import nftConfig from "@/config/nft";

export interface IUserNFT {
  uri: string;
  balance: string;
}

export async function getURI(
  provider: JsonRpcProvider,
  contractAddress: string,
  tokenId: string,
): Promise<string> {
  const contract = new ethers.Contract(contractAddress, DeShopNFTABI, provider);
  let data;
  try {
    data = await contract.uri(tokenId);
  } catch (error) {
    throw new Error("Failed to fetch item uri");
  }
  return data.toString();
}

export async function getUserAllNFTs(
  provider: JsonRpcProvider,
  userAddress: string,
): Promise<IUserNFT[]> {
  const nfts: IUserNFT[] = [];
  const marketItems = await getAllMarketItems();
  const nftContract = new ethers.Contract(
    nftConfig.testnet.address,
    DeShopNFTABI,
    provider,
  );
  for (let marketItem of marketItems) {
    const balance = await nftContract.balanceOf(userAddress, marketItem.id);
    if (balance > 0) {
      nfts.push({
        uri: marketItem.uri,
        balance: balance.toString(),
      });
    }
  }
  return nfts;
}
