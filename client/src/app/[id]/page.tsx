import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import { getAllMarketItems, getMarketItemById } from "../../api/market";
import { formatEther } from "ethers";
import { notFound } from "next/navigation";
import BuyButton from "./components/BuyButton";
import Carousel from "../components/Carousel";

export const revalidate = 0;

export default async function Detail({ params }: { params: { id: string } }) {
  const marketItems = await getAllMarketItems();
  const marketItem = await getMarketItemById(params.id);

  if (!marketItem) {
    notFound();
  }

  return (
    <div className="container mx-auto min-h-screen overflow-x-hidden pb-20 pt-44">
      <section className="mb-28 flex gap-10 border-t border-gray-200 py-16">
        <div className="h-[50vh] w-[40%] bg-gray-100 px-16">
          <div className="relative h-full w-full">
            <Image src={marketItem.uri} alt="nike" fill objectFit="contain" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold uppercase text-black">
            NIKE AIR FORCE
          </h1>
          <p className="my-10 text-gray-500">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
          <div className="flex items-center gap-1 text-2xl font-bold">
            <FaEthereum /> {formatEther(marketItem.price)}
          </div>
          <div className="my-10 h-[1px] w-full bg-gray-200" />
          <div>
            <h2 className="text-xl font-semibold uppercase">Properties</h2>
            <div className="mt-2 h-1 w-12 bg-black" />
            <ul className="my-6 list-none">
              <li>Made in Vietnam</li>
              <li>Studded magnet closure</li>
              <li>3 compartments</li>
            </ul>
          </div>
          <BuyButton id={marketItem.id} price={marketItem.price} />
        </div>
      </section>
      <Carousel data={marketItems} categories={[]} title="More products" />
    </div>
  );
}
