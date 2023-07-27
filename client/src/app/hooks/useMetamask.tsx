"use client";

import { JsonRpcSigner } from "ethers";
import { ethers } from "ethers";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface IMetamaskContext {
  signer: JsonRpcSigner | null;
  connect: () => Promise<void>;
}

export const MetamaskContext = createContext<Partial<IMetamaskContext>>({});

export function MetamaskProvider({ children }: { children: ReactNode }) {
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);

  useEffect(() => {
    connect();
  }, []);

  useEffect(() => {
    window.ethereum.on("accountsChanged", function () {
      // Time to reload your interface with accounts[0]!
      connect();
    });
  }, []);

  const connect = async () => {
    if (window.ethereum == null) {
      throw "MetaMask not installed; using read-only defaults";
    } else {
      const provider = new ethers.BrowserProvider(window.ethereum);
      setSigner(await provider.getSigner());
    }
  };

  const value = { signer, connect };

  return (
    <MetamaskContext.Provider value={value}>
      {children}
    </MetamaskContext.Provider>
  );
}

export default function useMetamask(): Partial<IMetamaskContext> {
  const value = useContext(MetamaskContext);
  return value;
}
