type NavType = "home" | "menu" | "about";

function NavLink({
  href,
  icon,
  label,
  active,
  onClick,
}: {
  href: string;
  icon: string;
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <a
      onClick={onClick}
      href={href}
      className={[
        "flex flex-col items-center justify-center pt-2 transition-all active:opacity-80",
        active
          ? "text-[#D32F2F] border-t-2 border-[#D32F2F]"
          : "text-[#E5E2E1]/60 hover:text-[#D32F2F]",
      ].join(" ")}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span className="font-['Work_Sans'] text-[10px] uppercase tracking-wider font-semibold">
        {label}
      </span>
    </a>
  );
}

export default function Navigation({
  activeNav,
  setActiveNav,
}: {
  activeNav: NavType;
  setActiveNav: React.Dispatch<React.SetStateAction<NavType>>;
}) {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 h-16 bg-[#131313]/90 backdrop-blur-xl"
    >
      <NavLink
        href="#"
        icon="home"
        label="Home"
        active={activeNav == "home"}
        onClick={() => setActiveNav("home")}
      />
      <NavLink
        href="#"
        icon="restaurant_menu"
        label="Menu"
        active={activeNav === "menu"}
        onClick={() => setActiveNav("menu")}
      />
      <NavLink
        href="#"
        icon="info"
        label="About"
        active={activeNav === "about"}
        onClick={() => setActiveNav("about")}
      />
    </nav>
  );
}
