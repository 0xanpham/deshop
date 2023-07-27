import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full px-80">
      <div className="flex h-[40vh] justify-between border-y border-gray-200 py-28">
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className="flex h-full w-1/4 flex-col">
            <h2 className="mb-6 text-xl font-bold">About</h2>
            <ul className="text-gray-500">
              <li>News & Stories</li>
              <li>History</li>
              <li>Our Studio</li>
              <li>Showrooms</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between py-10">
        <ul className="flex items-center gap-10 uppercase">
          <li>About Us</li>
          <li>Blogs</li>
          <li>FAQS</li>
          <li>Order Tracking</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center gap-10">
          <h2>Connect with us</h2>
          <ul className="flex gap-5">
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
