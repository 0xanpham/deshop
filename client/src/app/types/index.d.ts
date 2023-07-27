export {};

declare global {
  interface Window {
    ethereum: any; // whatever type you want to give. (any,number,float etc)
  }
}
