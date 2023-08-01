import Image from "next/image";
import Filter from "./components/Filter";
import Select from "./components/Select";
import { FaEthereum } from "react-icons/fa";
import { getAllMarketItems } from "../../api/market";
import { formatEther } from "ethers";
import Link from "next/link";

export const revalidate = 0;

export default async function Browse() {
  const marketItems = await getAllMarketItems();

  return (
    <div className="container mx-auto flex min-h-screen gap-10 py-20 pt-44">
      <Filter />
      <div className="w-full">
        <div className="mb-10 flex items-center justify-between">
          <Select />
          <div className="w-fit font-semibold uppercase">
            <h2>Showing {marketItems.length} results</h2>
            <div className="mt-1 h-[1px] w-full bg-black" />
          </div>
        </div>
        <div className="grid w-full grid-cols-3 gap-6">
          {marketItems &&
            marketItems.map((item, index) => (
              <Link
                href={`/${item.id}`}
                key={index}
                className="h-[50vh] w-full"
              >
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
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
