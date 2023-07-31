"use client";

import { FaUserCircle } from "react-icons/fa";
import useMetamask, { IMetamaskContext } from "../../hooks/useMetamask";
import { truncateAddress } from "../../utils";
import { toast } from "react-toastify";

export default function LoginButton() {
  const { signer, connect } = useMetamask() as IMetamaskContext;

  const handleConnect = async () => {
    try {
      await connect();
      toast.success("Connect successfully!");
    } catch (error: any) {
      toast.error(error.toString());
    }
  };

  return (
    <button className="flex items-center uppercase" onClick={handleConnect}>
      {signer ? truncateAddress(signer.address) : "Login"}{" "}
      {signer && <FaUserCircle className="ml-2 text-4xl" />}
    </button>
  );
}
