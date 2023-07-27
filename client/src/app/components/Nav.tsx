export default function Nav() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-40 w-full items-center justify-center bg-white px-80 text-xl">
      <ul className="flex w-1/3 justify-start gap-10 uppercase">
        <li>Home</li>
        <li>About Us</li>
      </ul>
      <h1 className="w-1/3 text-center text-4xl font-bold">DESHOP</h1>
      <div className="flex w-1/3 justify-end">
        <button className="uppercase">Login</button>
      </div>
    </div>
  );
}
