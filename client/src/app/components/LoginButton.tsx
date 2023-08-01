"use client";

import { FaUserCircle } from "react-icons/fa";
import useMetamask, { IMetamaskContext } from "../../hooks/useMetamask";
import { truncateAddress } from "../../utils";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const { signer, connect } = useMetamask() as IMetamaskContext;
  const router = useRouter();

  const handleConnect = async () => {
    try {
      await connect();
      toast.success("Connect successfully!");
    } catch (error: any) {
      toast.error(error.toString());
    }
  };

  const openProfile = () => {
    router.push("/profile");
  };

  return (
    <button
      className="flex items-center uppercase"
      onClick={() => {
        !signer ? handleConnect() : openProfile();
      }}
    >
      {signer ? truncateAddress(signer.address) : "Login"}{" "}
      {signer && <FaUserCircle className="ml-2 text-4xl" />}
    </button>
  );
}
