import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
}

export default function NavItem({ href, label, isActive }: NavItemProps) {
  return (
    <Link 
      href={href} 
      className={isActive ? "text-blue-300 font-bold" : "hover:text-blue-300 transition"}
    >
      {label}
    </Link>
  );
}