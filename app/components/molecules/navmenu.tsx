import NavItem from "../atoms/navitem";

interface NavMenuProps {
  activePage: "home" | "destinations" | "about";
}

export default function NavMenu({ activePage }: NavMenuProps) {
  return (
    <div className="flex space-x-6 text-sm font-medium">
      <NavItem href="/" label="Home" isActive={activePage === "home"} />
      <NavItem href="/destinations" label="Destinations" isActive={activePage === "destinations"} />
      <NavItem href="/about" label="About" isActive={activePage === "about"} />
    </div>
  );
}