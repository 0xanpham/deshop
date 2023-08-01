import marketConfig from "@/config/market";
import nftConfig from "@/config/nft";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto min-h-screen overflow-x-hidden py-20 pt-44">
      <section className="mb-28 flex h-[50vh] w-full items-center">
        <div className="flex h-full w-1/2 flex-col justify-center">
          <h1 className="text-5xl font-bold">
            Building an open digital economy
          </h1>
          <p className="my-10">
            At OpenSea, we&apos;re excited about a brand new type of digital
            good called a non-fungible token, or NFT. NFTs have exciting new
            properties: they’re unique, provably scarce, tradeable, and usable
            across multiple applications. Just like physical goods, you can do
            whatever you want with them! You could throw them in the trash, gift
            them to a friend across the world, or go sell them on an open
            marketplace. But unlike physical goods, they&apos;re armed with all
            the programmability of digital goods.
          </p>
          <p>
            A core part of our vision is that open protocols like Ethereum and
            interoperable standards like ERC-721 and ERC-1155 will enable
            vibrant new economies. We&apos;re building tools that allow
            consumers to trade their items freely, creators to launch new
            digital works, and developers to build rich, integrated marketplaces
            for their digital items.
          </p>
          <div className="mt-10 flex h-16 w-full items-center gap-8">
            <a
              className="flex h-full w-80 items-center justify-center bg-black text-center font-bold uppercase text-white"
              href={`https://goerli.explorer.zksync.io/address/${marketConfig.testnet.address}`}
              target="_blank"
            >
              View Market Contract
            </a>
            <a
              className="flex h-full w-80 items-center justify-center bg-black text-center font-bold uppercase text-white"
              href={`https://goerli.explorer.zksync.io/address/${nftConfig.testnet.address}`}
              target="_blank"
            >
              View NFT Contract
            </a>
          </div>
        </div>
        <div className="h-full w-1/2 p-20">
          <div className="relative h-full w-full grayscale">
            <Image
              src="https://static.opensea.io/about/All-NFT-Categories-Illustration.svg"
              alt="banner"
              fill
              objectFit="obtain"
            />
          </div>
        </div>
      </section>
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
