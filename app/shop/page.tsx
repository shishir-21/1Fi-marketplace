"use client";

import { useState } from "react";
import { ShopBanner } from "@/components/shop/ShopBanner";
import { ShopTabs } from "@/components/shop/ShopTabs";
import { SearchBar } from "@/components/shop/SearchBar";
import { TopBrands } from "@/components/shop/TopBrands";
import { NearbyStores } from "@/components/shop/NearbyStores";
import { BottomNav } from "@/components/shop/BottomNav";
import { MarketplaceHome } from "@/components/marketplace/MarketplaceHome";

export type TabType = "Top Brands" | "Nearby Stores" | "1Fi Marketplace";

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState<TabType>("Top Brands");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen relative pb-20">
      <ShopBanner />
      
      <div className="px-4 -mt-6 relative z-10">
        <ShopTabs activeTab={activeTab} setActiveTab={setActiveTab} />
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
