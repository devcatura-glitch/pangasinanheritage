import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link 
      href={href} 
      className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition shadow-lg inline-block text-center"
    >
      {children}
    </Link>
  );
}