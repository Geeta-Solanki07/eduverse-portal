"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-300 flex-wrap bg-white">
       <div className="logo">
        <Image src="/logo.png" alt="Logo" width={120} height={40} />
      </div>

      <nav>
        <ul className="flex gap-6 text-lg font-medium text-black">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
