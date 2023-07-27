import { FaEthereum } from "react-icons/fa";

export default function Filter() {
  return (
    <div className="min-h-screen w-96">
      <h2 className="text-2xl font-semibold uppercase">Filter</h2>
      <div className="mt-2 h-1 w-12 bg-black" />
      <h2 className="mt-8 text-lg font-bold uppercase">Category</h2>
      <div className="my-4 h-[1px] w-full bg-gray-200" />
      <ul className="flex flex-col gap-2 text-gray-500">
        <li>Sneakers</li>
        <li>Hoodies</li>
        <li>Necklaces</li>
        <li>Shirts</li>
      </ul>
      <h2 className="mt-8 text-lg font-bold uppercase">Price range</h2>
      <div className="my-4 h-[1px] w-full bg-gray-200" />
      <ul className="flex flex-col gap-2 text-gray-500">
        <li className="flex items-center">0 - 10 ETH</li>
        <li className="flex items-center">10 - 20 ETH</li>
        <li className="flex items-center">20 - 30 ETH</li>
        <li className="flex items-center">&gt; 30 ETH</li>
      </ul>
    </div>
  );
}
