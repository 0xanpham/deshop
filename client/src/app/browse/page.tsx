import Image from "next/image";
import Filter from "./components/Filter";
import Select from "./components/Select";
import { FaEthereum } from "react-icons/fa";

export default function Browse() {
  return (
    <div className="container mx-auto flex min-h-screen gap-10 py-20 pt-44">
      <Filter />
      <div className="w-full">
        <div className="mb-10 flex items-center justify-between">
          <Select />
          <div className="w-fit font-semibold uppercase">
            <h2>Showing 12 results</h2>
            <div className="mt-1 h-[1px] w-full bg-black" />
          </div>
        </div>
        <div className="grid w-full grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
            <div key={index} className="h-[50vh] w-full">
              <div className="h-3/4 w-full bg-gray-100 p-10">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/nike.png"
                    alt="nike"
                    fill
                    objectFit="contain"
                  />
                </div>
              </div>
              <h2 className="my-4 text-center text-xl font-bold uppercase">
                Nike Air Force
              </h2>
              <div className="flex items-center justify-center text-xl font-semibold">
                <FaEthereum />
                10
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
