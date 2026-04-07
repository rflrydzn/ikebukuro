"use client";
import { useState } from "react";
// ─── Data ────────────────────────────────────────────────────────────────────

const RAMEN_ITEMS = [
  {
    id: "tonkotsu",
    name: "Tonkatsu Ramen",
    description:
      "Slow-simmered pork bone broth, tender chashu pork, soft-boiled egg, and black garlic oil.",
    price: "$18.50",
    src: "https://storage.imagerouter.io/2736a723-00a8-4595-8a50-9017f7d51084.jpg",
    alt: "Gourmet Tonkotsu ramen with creamy broth, sliced pork belly, wood ear mushrooms, and nori in a black ceramic bowl",
    imageLeft: false,
  },
  {
    id: "nagasaki",
    name: "Nagasaki Ramen",
    description:
      "Seafood-based dashi with tiger prawns, scallops, cabbage, and seasonal sprouts.",
    price: "$21.00",
    src: "https://storage.imagerouter.io/2f14559d-92b5-42cf-8c0e-ef8b7f6d6fdb.png",
    alt: "Japanese seafood ramen with shrimp, mussels, and cabbage in a rich white broth, styled in an editorial food photography way",
    imageLeft: true,
  },
  {
    id: "miso",
    name: "Miso Ginger",
    description:
      "Fermented red miso with a ginger kick, corn, butter, and bamboo shoots.",
    price: "$16.50",
    src: "https://storage.imagerouter.io/b47dff2d-42ac-4b52-9175-6b57c809a1b1.png",
    alt: "Miso ramen with charred corn, bamboo shoots, and green onions in a dark moody setting with dramatic lighting",
    imageLeft: false,
  },
] as const;

const EXTRA_ITEMS = [
  { id: "egg", icon: "egg", name: "Ajitsuke Tamago", price: "+$2.50" },
  {
    id: "noodles",
    icon: "restaurant_menu",
    name: "Extra Noodles",
    price: "+$3.00",
  },
  {
    id: "bamboo",
    icon: "energy_savings_leaf",
    name: "Spicy Bamboo",
    price: "+$1.50",
  },
  { id: "oil", icon: "water_drop", name: "Black Garlic Oil", price: "+$1.00" },
] as const;

const TABS = ["ramen", "sushi", "appetizers", "drinks", "extras"] as const;
type Tab = (typeof TABS)[number];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative mt-4">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary-container" />
      <div className="px-6 py-4 pl-8 flex items-end justify-between">
        <h2 className="font-headline font-extrabold text-5xl tracking-tighter text-on-surface">
          {title}
        </h2>
        {subtitle && (
          <div className="text-primary-container font-headline font-bold text-xs uppercase tracking-[0.2em]">
            {subtitle}
          </div>
        )}
      </div>
    </section>
  );
}

function MenuItem({
  name,
  description,
  price,
  src,
  alt,
  imageLeft,
}: (typeof RAMEN_ITEMS)[number]) {
  const image = (
    <div className="col-span-5 relative">
      <div className="aspect-square bg-surface-container-high relative overflow-hidden">
        <img className="w-full h-full object-cover" src={src} alt={alt} />
      </div>
    </div>
  );

  const text = (
    <div className={`col-span-7 space-y-2 ${imageLeft ? "pl-4" : ""}`}>
      <h3 className="font-headline font-bold text-xl uppercase tracking-wider text-on-surface">
        {name}
      </h3>
      <p className="text-on-surface/70 text-xs leading-relaxed font-light">
        {description}
      </p>
      <div className="flex items-center gap-4 pt-2">
        <span className="text-primary-container font-headline font-bold text-lg">
          {price}
        </span>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-12 gap-4 items-center">
      {imageLeft ? (
        <>
          {image}
          {text}
        </>
      ) : (
        <>
          {text}
          {image}
        </>
      )}
    </div>
  );
}

function ExtraItem({ icon, name, price }: (typeof EXTRA_ITEMS)[number]) {
  return (
    <div className="bg-surface-container p-6 flex flex-col items-center text-center space-y-3">
      <span className="material-symbols-outlined text-primary-container text-4xl">
        {icon}
      </span>
      <h4 className="font-headline font-bold text-sm uppercase tracking-widest">
        {name}
      </h4>
      <span className="text-primary-container font-headline font-bold text-base">
        {price}
      </span>
    </div>
  );
}

function TabButton({
  id,
  active,
  onClick,
}: {
  id: Tab;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      id={`tab-${id}`}
      onClick={onClick}
      className={[
        "tab-btn font-headline font-bold uppercase tracking-[0.1em] text-sm whitespace-nowrap pb-1 transition-colors",
        active
          ? "text-primary-container border-b-2 border-primary-container"
          : "text-on-surface/60 hover:text-on-surface",
      ].join(" ")}
    >
      {id}
    </button>
  );
}

// ─── Tab content panels ───────────────────────────────────────────────────────

function RamenPanel() {
  return (
    <div>
      <SectionHeader title="RAMEN" subtitle="Crafted by Hand" />
      <div className="px-6 space-y-12 mt-8">
        {RAMEN_ITEMS.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

function ExtrasPanel() {
  return (
    <div className="mt-4 px-6">
      <SectionHeader title="EXTRAS" />
      <div className="grid grid-cols-2 gap-4 mt-8">
        {EXTRA_ITEMS.map((item) => (
          <ExtraItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

function ComingSoonPanel({ label }: { label: string }) {
  return (
    <div className="px-6 py-20 text-center opacity-40 uppercase tracking-widest text-sm">
      {label} Coming Soon
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("ramen");

  function handleTabChange(tab: Tab) {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      {/* Top app bar */}

      <main className="pb-24">
        {/* Tab bar */}
        <nav
          aria-label="Menu categories"
          className="sticky top-20 z-50 bg-background/95 backdrop-blur-md flex overflow-x-auto no-scrollbar py-4 px-6 gap-8"
        >
          {TABS.map((tab) => (
            <TabButton
              key={tab}
              id={tab}
              active={activeTab === tab}
              onClick={() => handleTabChange(tab)}
            />
          ))}
        </nav>

        {/* Tab panels */}
        {activeTab === "ramen" && <RamenPanel />}
        {activeTab === "sushi" && <ComingSoonPanel label="Sushi" />}
        {activeTab === "appetizers" && <ComingSoonPanel label="Appetizers" />}
        {activeTab === "drinks" && <ComingSoonPanel label="Drinks" />}
        {activeTab === "extras" && <ExtrasPanel />}

        {/* Footer watermark */}
        <section className="py-16 px-6 text-center" aria-hidden="true">
          <p className="font-headline font-extrabold text-3xl italic opacity-10 leading-none uppercase">
            Spirit of the Master
          </p>
        </section>
      </main>

      {/* Bottom nav */}
    </div>
  );
}
