import Image from "next/image";
import { FaEthereum } from "react-icons/fa";

export default function Detail() {
  return (
    <div className="container mx-auto min-h-screen pb-20 pt-44">
      <section className="mb-28 flex gap-10 border-t border-gray-200 py-16">
        <div className="h-[50vh] w-[40%] bg-gray-100 px-16">
          <div className="relative h-full w-full">
            <Image src="/images/nike.png" alt="nike" fill objectFit="contain" />
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
            <FaEthereum /> 100
          </div>
          <div className="my-10 h-[1px] w-full bg-gray-200" />
          <div>
            <h2 className="text-xl font-semibold uppercase">Properties</h2>
            <div className="mt-2 h-1 w-12 bg-black" />
            <ul className="my-6 list-none">
              <li>Made in Vietname</li>
              <li>Studded magnet closure</li>
              <li>3 compartments</li>
            </ul>
          </div>
          <button className="mt-auto h-20 w-48 bg-black text-xl font-bold uppercase text-white">
            Buy
          </button>
        </div>
      </section>
      <section className="w-full">
        <div className="flex items-center justify-between uppercase">
          <h2 className="text-xl font-bold uppercase">Related products</h2>
          <div className="flex items-center gap-2">
            <button className="uppercase">Back</button>
            <div className="h-4 w-[1px] bg-black" />
            <button className="uppercase">Next</button>
          </div>
        </div>
        <div className="items-between my-10 flex h-[50vh] w-full gap-10">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="h-full w-1/4">
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
      </section>
    </div>
  );
}
