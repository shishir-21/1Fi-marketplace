import { BRANDS } from "@/data/brands";

interface TopBrandsProps {
  searchQuery: string;
}

export function TopBrands({ searchQuery }: TopBrandsProps) {
  const filteredBrands = BRANDS.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-gray-900">Top Brands</h2>
      
      {filteredBrands.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No brands found matching &quot;{searchQuery}&quot;
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-inner ${brand.logoColor}`}>
                {brand.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{brand.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
