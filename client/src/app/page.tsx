import Image from "next/image";
import Carousel from "./components/Carousel";
import Link from "next/link";
import { getAllCategories, getAllMarketItems } from "./api/market";

export const revalidate = 0;

export default async function Home() {
  const marketItems = await getAllMarketItems();
  const categories = await getAllCategories();

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
      <Carousel categories={categories} data={marketItems} />
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
      <Carousel categories={categories} data={marketItems} />
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
