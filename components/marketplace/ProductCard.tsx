import Link from "next/link";
import { Product } from "@/types/product";
import { formatCurrency } from "@/lib/utils";

import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Find lowest no-cost EMI plan for display if possible, or just lowest EMI
  const lowestEmi = product.emiPlans.reduce((prev, curr) => {
    const prevAmount = product.price / prev.months;
    const currAmount = product.price / curr.months;
    return currAmount < prevAmount ? curr : prev;
  });

  const emiAmount = Math.round(product.price / lowestEmi.months);
  const hasNoCost = product.emiPlans.some((p) => p.isNoCost);

  return (
    <Link href={`/marketplace/${product.id}`}>
      <div className="bg-white border border-gray-100 rounded-2xl p-3 shadow-sm flex flex-col gap-2 h-full hover:shadow-md transition-shadow active:scale-[0.98]">
        <div className="w-full aspect-square rounded-xl bg-gray-50 mb-1 flex items-center justify-center shadow-inner relative overflow-hidden">
          <Image src={product.image} alt={product.name} fill className="object-contain p-2" sizes="(max-width: 450px) 50vw, 33vw" />
        </div>
        
        <div className="flex-1 flex flex-col">
          <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
            {product.brand}
          </span>
          <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-1 line-clamp-2">
            {product.name}
          </h3>
          <span className="text-xs font-bold text-gray-900">
            {formatCurrency(product.price)}
          </span>
        </div>

        <div className="bg-brand-light rounded-lg p-2 mt-auto">
          <div className="text-[10px] text-gray-600 font-medium">Starting EMI</div>
          <div className="text-xs font-bold text-brand">
            {formatCurrency(emiAmount)}/mo
          </div>
          {hasNoCost && (
            <div className="text-[9px] font-semibold text-green-600 mt-0.5">
              0% Interest
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
