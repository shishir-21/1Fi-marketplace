import { TabType } from "@/app/shop/page";
import { cn } from "@/lib/utils";

interface ShopTabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const TABS: TabType[] = ["Top Brands", "Nearby Stores", "1Fi Marketplace"];

export function ShopTabs({ activeTab, setActiveTab }: ShopTabsProps) {
  return (
    <div className="bg-brand-light p-1 rounded-full shadow-sm flex items-center w-full overflow-x-auto hide-scrollbar">
      {TABS.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 relative px-4 py-2.5 text-sm font-medium rounded-full transition-all whitespace-nowrap",
              isActive
                ? "bg-white text-brand shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            {tab}
            {isActive && (
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
