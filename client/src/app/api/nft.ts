import { DeShopNFTABI } from "@/abi";
import { JsonRpcProvider, ethers } from "ethers";

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
  console.log("URI", data);
  return data.toString();
}
