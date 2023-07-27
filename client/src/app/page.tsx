import Image from "next/image";
import { FaEthereum } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen py-20 pt-44">
      <section className="mb-28 flex h-[60vh] w-full items-center bg-gray-100 p-24">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">CHERNER ARMCHAIR</h1>
          <p className="mb-10 text-lg text-gray-500">
            The 1985 moulded plywood armchair by Morman Cherner
          </p>
          <button className="border-b border-black font-semibold uppercase">
            View Now
          </button>
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
      <section className="mb-28 w-full">
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
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="h-full w-1/4">
              <div className="h-3/4 w-full bg-gray-100 p-10">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/nike.png"
                    alt="nike"
                    fill
                    style={{ objectFit: "contain" }}
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
      <section className="mb-28 w-full">
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
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="h-full w-1/4">
              <div className="h-3/4 w-full bg-gray-100 p-10">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/nike.png"
                    alt="nike"
                    fill
                    style={{ objectFit: "contain" }}
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
