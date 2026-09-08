"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ShopBanner } from "@/components/shop/ShopBanner";
import { ShopTabs } from "@/components/shop/ShopTabs";
import { SearchBar } from "@/components/shop/SearchBar";
import { TopBrands } from "@/components/shop/TopBrands";
import { NearbyStores } from "@/components/shop/NearbyStores";
import { BottomNav } from "@/components/shop/BottomNav";
import { MarketplaceHome } from "@/components/marketplace/MarketplaceHome";

export type TabType = "Top Brands" | "Nearby Stores" | "1Fi Marketplace";

const TAB_MAPPING: Record<string, TabType> = {
  "top-brands": "Top Brands",
  "nearby-stores": "Nearby Stores",
  marketplace: "1Fi Marketplace",
};

const REVERSE_TAB_MAPPING: Record<TabType, string> = {
  "Top Brands": "top-brands",
  "Nearby Stores": "nearby-stores",
  "1Fi Marketplace": "marketplace",
};

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const tabQuery = searchParams.get("tab");
  const activeTab: TabType = (tabQuery && TAB_MAPPING[tabQuery]) ? TAB_MAPPING[tabQuery] : "Top Brands";

  const [searchQuery, setSearchQuery] = useState("");

  const handleTabChange = (tab: TabType) => {
    router.push(`/shop?tab=${REVERSE_TAB_MAPPING[tab]}`);
  };

  return (
    <div className="flex flex-col min-h-screen relative pb-20">
      <ShopBanner />
      
      <div className="px-4 -mt-6 relative z-10">
        <ShopTabs activeTab={activeTab} setActiveTab={handleTabChange} />
      </div>

      <div className="px-4 mt-6">
        <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      </div>

      <div className="px-4 mt-6 flex-1">
        {activeTab === "Top Brands" && <TopBrands searchQuery={searchQuery} />}
        {activeTab === "Nearby Stores" && <NearbyStores />}
        {activeTab === "1Fi Marketplace" && <MarketplaceHome />}
      </div>

      <BottomNav />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
