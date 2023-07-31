import { DeShopMarketABI, DeShopNFTABI } from "@/abi";
import marketConfig from "@/config/market";
import zkSyncConfig from "@/config/zksync";
import { JsonRpcProvider, formatEther, parseUnits } from "ethers";
import { ethers } from "ethers";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import Carousel from "./components/Carousel";
import Link from "next/link";

export const revalidate = 0;

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

async function getURI(
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

async function getAllMarketItems(): Promise<IMarketItem[]> {
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
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch market items");
  }
}

export default async function Home() {
  const marketItems = await getAllMarketItems();

  return (
    <div className="container mx-auto min-h-screen overflow-x-hidden py-20 pt-44">
      <section className="mb-28 flex h-[60vh] w-full items-center bg-gray-100 p-24">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">CHERNER ARMCHAIR</h1>
          <p className="mb-10 text-lg text-gray-500">
            The 1985 moulded plywood armchair by Morman Cherner
          </p>
          <Link
            href={"/browse"}
            className="border-b border-black font-semibold uppercase"
          >
            View Now
          </Link>
        </div>
        <div className="relative h-full w-1/2">
          <Image
            src="/images/nike.png"
            alt="banner"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
      {/* <section className="mb-28 w-full">
        <div className="flex items-center justify-between uppercase">
          <ul className="flex items-center gap-4 font-semibold">
            <li>Furniture</li>
            <li>Furniture</li>
            <li>Furniture</li>
            <li>Furniture</li>
            <li className="border-b border-black">All</li>
          </ul>
          <div className="flex items-center gap-2">
            <button className="uppercase">Back</button>
            <div className="h-4 w-[1px] bg-black" />
            <button className="uppercase">Next</button>
          </div>
        </div>
        <div className="items-between my-10 flex h-[50vh] w-full gap-10">
          {marketItems &&
            marketItems.slice(0, 4).map((item, index: any) => (
              <div key={index} className="h-full w-1/4">
                <div className="h-3/4 w-full bg-gray-100 p-10">
                  <div className="relative h-full w-full">
                    <Image src={item.uri} alt="nike" fill objectFit="contain" />
                  </div>
                </div>
                <h2 className="my-4 text-center text-xl font-bold uppercase">
                  Nike Air Force
                </h2>
                <div className="flex items-center justify-center text-xl font-semibold">
                  <FaEthereum />
                  {formatEther(item.price)}
                </div>
              </div>
            ))}
        </div>
      </section> */}
      <Carousel data={marketItems} />
      <section className="relative mb-28 flex h-[30vh] w-full items-center bg-gray-100 px-24">
        <div>
          <h1 className="text-5xl font-bold">CHERNER</h1>
          <p className="mb-10 text-lg text-gray-500">by Morman Cherner</p>
          <button className="border-b border-black font-semibold uppercase">
            View Now
          </button>
        </div>
        <div className="absolute bottom-20 right-24 h-full w-1/2">
          <Image
            src="/images/nike.png"
            alt="banner"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
      {/* <section className="mb-28 w-full">
        <div className="flex items-center justify-between uppercase">
          <ul className="flex items-center gap-4 font-semibold">
            <li>Furniture</li>
            <li>Furniture</li>
            <li>Furniture</li>
            <li>Furniture</li>
            <li className="border-b border-black">All</li>
          </ul>
          <div className="flex items-center gap-2">
            <button className="uppercase">Back</button>
            <div className="h-4 w-[1px] bg-black" />
            <button className="uppercase">Next</button>
          </div>
        </div>
        <div className="items-between my-10 flex h-[50vh] w-full gap-10">
          {marketItems &&
            marketItems.slice(4, 8).map((item, index) => (
              <div key={index} className="h-full w-1/4">
                <div className="h-3/4 w-full bg-gray-100 p-10">
                  <div className="relative h-full w-full">
                    <Image src={item.uri} alt="nike" fill objectFit="contain" />
                  </div>
                </div>
                <h2 className="my-4 text-center text-xl font-bold uppercase">
                  Nike Air Force
                </h2>
                <div className="flex items-center justify-center text-xl font-semibold">
                  <FaEthereum />
                  {formatEther(item.price)}
                </div>
              </div>
            ))}
        </div>
      </section> */}
      <Carousel data={marketItems} />
      <section className="mb-28 flex h-[40vh] w-full flex-col items-center justify-center bg-gray-100 p-24">
        <h1 className="text-4xl font-bold">KEEP UPDATED</h1>
        <p className="my-4 mb-10 text-lg italic text-gray-500">
          Sign up for our newsletters to receive updates an exclusive offer
        </p>
        <div className="flex w-full items-center justify-center gap-1">
          <input
            className="h-14 w-[28rem] border border-gray-500 bg-transparent px-4 py-2 text-gray-500 outline-none"
            placeholder="Enter your email"
          />
          <button className="h-14 w-40 bg-black uppercase text-white">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
