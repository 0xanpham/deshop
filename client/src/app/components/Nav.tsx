import Link from "next/link";
import LoginButton from "./LoginButton";

export default function Nav() {
  return (
    <div className="fixed left-0 top-0 z-50 h-40 w-full bg-white">
      <div className="container mx-auto flex h-full items-center justify-center">
        <ul className="flex w-1/3 justify-start gap-10 uppercase">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
        </ul>
        <h1 className="w-1/3 text-center text-4xl font-bold">DESHOP</h1>
        <div className="flex w-1/3 justify-end">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
