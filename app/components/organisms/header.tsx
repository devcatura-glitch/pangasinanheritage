import Logo from "../molecules/logo";
import NavMenu from "../molecules/navmenu";
interface HeaderProps {
  activePage: "home" | "destinations" | "about";
}

export default function Header({ activePage }: HeaderProps) {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Logo />
        <NavMenu activePage={activePage} />
      </div>
    </nav>
  );
}