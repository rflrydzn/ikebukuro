"use client";
import { useState } from "react";
import Menu from "@/components/menu";
import HomePage from "@/components/homepage";
import About from "@/components/about";
import Header from "@/components/header";
import Navigation from "@/components/navigation";

export default function Home() {
  const [activeNav, setActiveNav] = useState<"menu" | "home" | "about">("menu");

  return (
    <>
      <Header />
      <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
        {activeNav === "menu" && <Menu />}
        {activeNav === "home" && <HomePage />}
        {activeNav === "about" && <About />}
      </div>
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
    </>
  );
}
