import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// ── Supabase client ───────────────────────────────────────────────────────────
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
);

// ── Types ─────────────────────────────────────────────────────────────────────
interface Tab {
  id: number;
  slug: string;
  label: string;
  sort_order: number;
}

interface Category {
  id: number;
  tab_slug: string;
  slug: string;
  label: string;
  note: string | null;
  sort_order: number;
}

interface MenuItem {
  id: number;
  category_slug: string;
  name: string;
  description: string | null;
  price: string | null;
  unit: string | null;
  image_url: string | null;
  image_alt: string | null;
  image_left: boolean;
  icon: string | null;
  sort_order: number;
}

// ── Sub-components ────────────────────────────────────────────────────────────

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

// Featured card — image + text, alternating left/right (original design)
function MenuItem({ item }: { item: MenuItem }) {
  const image = (
    <div className="col-span-5 relative">
      <div className="aspect-square bg-surface-container-high relative overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={item.image_url!}
          alt={item.image_alt ?? item.name}
        />
      </div>
    </div>
  );

  const text = (
    <div className={`col-span-7 space-y-2 ${item.image_left ? "pl-4" : ""}`}>
      <h3 className="font-headline font-bold text-xl uppercase tracking-wider text-on-surface">
        {item.name}
      </h3>
      {item.unit && (
        <p className="text-primary-container font-headline font-bold text-xs uppercase tracking-[0.15em]">
          {item.unit}
        </p>
      )}
      {item.description && (
        <p className="text-on-surface/70 text-xs leading-relaxed font-light">
          {item.description}
        </p>
      )}
      <div className="flex items-center gap-4 pt-2">
        <span className="text-primary-container font-headline font-bold text-lg">
          {item.price}
        </span>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-12 gap-4 items-center">
      {item.image_left ? (
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

function CategoryBlock({
  category,
  items,
}: {
  category: Category;
  items: MenuItem[];
}) {
  if (!items.length) return null;

  return (
    <div>
      <SectionHeader
        title={category.label}
        subtitle={category.note ?? undefined}
      />
      <div className="px-6 space-y-12 mt-8">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function TabButton({
  tab,
  active,
  onClick,
}: {
  tab: Tab;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      id={`tab-${tab.slug}`}
      onClick={onClick}
      className={[
        "tab-btn font-headline font-bold uppercase tracking-widest text-sm whitespace-nowrap pb-1 transition-colors",
        active
          ? "text-primary-container border-b-2 border-primary-container"
          : "text-on-surface/60 hover:text-on-surface",
      ].join(" ")}
    >
      {tab.label}
    </button>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Menu() {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<Tab | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [itemsMap, setItemsMap] = useState<Record<string, MenuItem[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      const [tabsRes, catsRes, itemsRes] = await Promise.all([
        supabase.from("tabs").select("*").order("sort_order"),
        supabase.from("categories").select("*").order("sort_order"),
        supabase.from("menu_items").select("*").order("sort_order"),
      ]);

      const fetchedTabs = (tabsRes.data ?? []) as Tab[];
      const fetchedCats = (catsRes.data ?? []) as Category[];
      const fetchedItems = (itemsRes.data ?? []) as MenuItem[];

      // Group items by category_slug
      const grouped: Record<string, MenuItem[]> = {};
      fetchedCats.forEach((c) => {
        grouped[c.slug] = [];
      });
      fetchedItems.forEach((item) => {
        if (!grouped[item.category_slug]) grouped[item.category_slug] = [];
        grouped[item.category_slug].push(item);
      });

      setTabs(fetchedTabs);
      setCategories(fetchedCats);
      setItemsMap(grouped);
      if (fetchedTabs.length > 0) setActiveTab(fetchedTabs[0]);
      setLoading(false);
    }

    fetchAll();
  }, []);

  function handleTabChange(tab: Tab) {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const activeCategories = categories.filter(
    (c) => c.tab_slug === activeTab?.slug,
  );

  return (
    <main className="pb-24">
      {/* Tab bar */}
      <nav
        aria-label="Menu categories"
        className="sticky top-20 z-50 bg-background/95 backdrop-blur-md flex overflow-x-auto no-scrollbar py-4 px-6 gap-8"
      >
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            tab={tab}
            active={activeTab?.slug === tab.slug}
            onClick={() => handleTabChange(tab)}
          />
        ))}
      </nav>

      {/* Content */}
      {loading || !activeTab ? (
        <div className="px-6 py-20 text-center opacity-40 uppercase tracking-widest text-sm">
          Loading…
        </div>
      ) : (
        <div className="space-y-6 mt-2">
          {activeCategories.map((cat) => (
            <CategoryBlock
              key={cat.id}
              category={cat}
              items={itemsMap[cat.slug] ?? []}
            />
          ))}
        </div>
      )}

      {/* Footer watermark */}
      <section className="py-16 px-6 text-center" aria-hidden="true">
        <p className="font-headline font-extrabold text-3xl italic opacity-10 leading-none uppercase">
          Spirit of the Master
        </p>
      </section>
    </main>
  );
}
