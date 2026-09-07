import { Home, ShoppingBag, Receipt, CreditCard, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "shop", label: "Shop", icon: ShoppingBag },
  { id: "dues", label: "EMI Dues", icon: Receipt },
  { id: "limit", label: "Limit", icon: CreditCard },
  { id: "profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const activeTab = "shop";

  return (
    <div className="fixed bottom-0 w-full max-w-[450px] bg-white border-t border-gray-100 px-4 py-2 flex items-center justify-between z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        
        return (
          <button
            key={item.id}
            className={cn(
              "flex flex-col items-center justify-center gap-1 min-w-[60px] py-1 transition-colors relative",
              isActive ? "text-brand" : "text-gray-400 hover:text-gray-600"
            )}
          >
            {isActive && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand rounded-b-full shadow-[0_0_8px_rgba(78,36,198,0.4)]" />
            )}
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-medium leading-none">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
