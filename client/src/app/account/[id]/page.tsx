import { getUserAllNFTs } from "@/api/nft";
import Image from "next/image";

export default async function Account({ params }: { params: { id: string } }) {
  const nfts = await getUserAllNFTs(params.id);

  return (
    <div className="container mx-auto min-h-screen overflow-x-hidden py-20 pt-44">
      <div className="grid w-full grid-cols-4 gap-10">
        {nfts.map((item, index) => (
          <div key={index} className="h-[50vh] w-full">
            <div className="h-3/4 w-full bg-gray-100 p-10">
              <div className="relative h-full w-full">
                <Image src={item.uri} alt="nike" fill objectFit="contain" />
              </div>
            </div>
            <h2 className="my-4 text-center text-xl font-bold uppercase">
              Nike Air Force
            </h2>
            <div className="flex items-center justify-center text-xl font-semibold">
              Total {item.balance}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
