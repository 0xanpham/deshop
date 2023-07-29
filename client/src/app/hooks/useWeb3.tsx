"use client";

import zkSyncConfig from "@/config/zksync";
import { JsonRpcProvider } from "ethers";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface IWeb3Context {
  provider: JsonRpcProvider | null;
}

export const Web3Context = createContext<Partial<IWeb3Context>>({});

export function Web3Provider({ children }: { children: ReactNode }) {
  const [provider, setProvider] = useState<JsonRpcProvider | null>(null);

  const getProvider = async () => {
    setProvider(new JsonRpcProvider(zkSyncConfig.testnet.rpcUrl));
  };

  useEffect(() => {
    getProvider();
  }, []);

  const value = { provider };

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
}

export default function useWeb3(): Partial<IWeb3Context> {
  const value = useContext(Web3Context);
  return value;
}
