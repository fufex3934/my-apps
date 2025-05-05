"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
function Navbar() {
  const pathname = usePathname();
  return (
    <header>
      <nav className="bg-gray-800 p-4 text-white flex items-center justify-between">
        <Image src={"/avatar.png"} alt="avatar " width={40} height={40} />
        <ul className="flex items-center justify-center space-x-4">
          <Link href={"/"}>
            <li
              className={`hover:text-gray-300 ${
                pathname === "/" ? "text-blue-400 font-bold" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link href={"/blog"}>
            <li
              className={`hover:text-gray-300 ${
                pathname === "/blog" ? "text-blue-400 font-bold" : ""
              }`}
            >
              Blog
            </li>
          </Link>
          <Link href={"/blog/create"}>
            <li  className={`hover:text-gray-300 ${
                pathname === "/blog/create" ? "text-blue-400 font-bold" : ""
              }`}>Create Post</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
