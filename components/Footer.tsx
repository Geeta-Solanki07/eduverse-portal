"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-black text-center p-5 text-sm bg-white border-t border-gray-300">
      <Link href="#">About</Link>
      <Link href="#" className="mx-3">Terms</Link>
      <Link href="#">Career</Link>
      <Link href="#" className="mx-3">Privacy Policy</Link>
    </footer>
  );
}
