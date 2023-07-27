"use client";

import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function Select() {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className="relative z-10 h-12 w-40 bg-gray-200">
      <button
        className="flex h-full w-full items-center justify-center gap-1"
        onClick={() => setIsActive((prev) => !prev)}
      >
        Default Sorting {isActive ? <BsChevronUp /> : <BsChevronDown />}
      </button>
      {isActive && (
        <ul className="absolute top-full flex w-full translate-y-2 flex-col items-center bg-gray-200">
          <li className="flex h-12 items-center">High to low</li>
          <li className="flex h-12 items-center">Low to high</li>
        </ul>
      )}
    </div>
  );
}
