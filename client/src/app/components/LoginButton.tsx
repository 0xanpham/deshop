"use client";

import { FaUserCircle } from "react-icons/fa";
import useMetamask, { IMetamaskContext } from "../hooks/useMetamask";
import { truncateAddress } from "../utils";

export default function LoginButton() {
  const { signer, connect } = useMetamask() as IMetamaskContext;

  return (
    <button className="flex items-center uppercase" onClick={connect}>
      {signer ? truncateAddress(signer.address) : "Login"}{" "}
      {signer && <FaUserCircle className="ml-2 text-4xl" />}
    </button>
  );
}
