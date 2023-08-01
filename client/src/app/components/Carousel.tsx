"use client";

import Image from "next/image";
import { IMarketItem } from "../../api/market";
import { FaEthereum } from "react-icons/fa";
import { formatEther } from "ethers";
import { useState } from "react";
import Link from "next/link";

export default function Carousel({
  data,
  categories,
  title,
}: {
  data: IMarketItem[];
  categories: string[];
  title?: string;
}) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const next = () => {
    if (currentPage < data.length / 4 - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const back = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const pageDivision = (
    data: IMarketItem[],
    itemsPerPage: number,
  ): IMarketItem[][] => {
    const result = [];
    let i = 0;
    while (i < data.length) {
      const pageList = [];
      for (let j = 0; j < itemsPerPage; j++) {
        pageList.push(data[i]);
        i++;
      }
      result.push(pageList);
    }
    return result;
  };

  return (
    <section className="mb-28 w-full">
      <div className="flex items-center justify-between uppercase">
        {title ? (
          <span className="font-semibold">{title}</span>
        ) : (
          <ul className="flex items-center gap-12 font-semibold">
            {categories.map((category, index) => (
              <li
                className="cursor-pointer border-b border-transparent hover:border-black"
                key={index}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center gap-2">
          <button className="uppercase hover:font-semibold" onClick={back}>
            Back
          </button>
          <div className="h-4 w-[1px] bg-black" />
          <button className="uppercase hover:font-semibold" onClick={next}>
            Next
          </button>
        </div>
      </div>
      <div
        className="my-10 flex h-[50vh] w-[200%] duration-300 ease-out"
        style={{ transform: `translateX(-${currentPage * 50}%)` }}
      >
        {data &&
          pageDivision(data, 4).map((item, index: any) => (
            <div
              className="flex h-full w-1/2 items-center justify-between gap-10"
              key={index}
            >
              {item.map((marketItem, index) => (
                <Link
                  className="h-full w-1/4"
                  key={marketItem.id}
                  href={`/${marketItem.id}`}
                >
                  <div className="h-3/4 w-full bg-gray-100 p-10">
                    <div className="relative h-full w-full">
                      <Image
                        src={marketItem.uri}
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
                    {formatEther(marketItem.price)}
                  </div>
                </Link>
              ))}
            </div>
          ))}
      </div>
    </section>
  );
}
