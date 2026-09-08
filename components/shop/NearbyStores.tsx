import { MapPinOff } from "lucide-react";

interface NearbyStoresProps {
  searchQuery?: string;
}

export function NearbyStores({ searchQuery }: NearbyStoresProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-gray-900">Nearby Stores</h2>
      <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm">
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
          <MapPinOff className="w-8 h-8 text-gray-300" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">No nearby stores found</h3>
        <p className="text-sm text-gray-500 max-w-[200px]">
          {searchQuery 
            ? `We couldn't find any partner stores matching "${searchQuery}".` 
            : `We couldn't find any partner stores in your current location.`}
        </p>
      </div>
    </div>
  );
}
