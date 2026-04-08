import Logo from "@/public/logo.png";

export default function Header() {
  return (
    <header className="bg-[#131313] flex justify-between items-center px-6 h-20 w-full sticky top-0 z-60">
      <button
        aria-label="Open menu"
        className="material-symbols-outlined text-[#E5E2E1] hover:bg-[#D32F2F]/10 transition-colors p-2 active:scale-95 duration-150 cursor-pointer"
      >
        menu
      </button>

      <img src={Logo.src} className="w-48" />

      <button
        aria-label="Search"
        className="material-symbols-outlined text-[#E5E2E1] hover:bg-[#D32F2F]/10 transition-colors p-2 active:scale-95 duration-150 cursor-pointer"
      >
        search
      </button>
    </header>
  );
}
