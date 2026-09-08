"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Product, Variant, EMIPlan } from "@/types/product";
import { formatCurrency, cn } from "@/lib/utils";
import { PurchaseConfirmation } from "./PurchaseConfirmation";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const router = useRouter();
  
  // Default to first variant if exists
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    product.variants ? product.variants[0] : null
  );
  
  const [selectedEmi, setSelectedEmi] = useState<EMIPlan | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;

  const isProceedDisabled =
    (product.variants && !selectedVariant) || !selectedEmi;

  return (
    <>
      <div className="flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
          <button onClick={() => router.push("/shop?tab=marketplace")} className="p-2 -ml-2 rounded-full hover:bg-gray-50 text-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-semibold text-lg line-clamp-1 flex-1">{product.name}</h1>
        </div>

        {/* Image */}
        <div className={cn("w-full aspect-[4/3] flex items-center justify-center text-7xl", product.image)}>
          📱
        </div>

        {/* Basic Info */}
        <div className="px-4 py-5 border-b border-gray-100">
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-1 block">
            {product.brand}
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
            {product.name}
          </h2>
          <div className="text-xl font-bold text-gray-900">
            {formatCurrency(currentPrice)}
          </div>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Variants */}
        {product.variants && (
          <div className="px-4 py-5 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-3">Select Variant</h3>
            <div className="flex flex-wrap gap-3">
              {product.variants.map((variant) => {
                const isSelected = selectedVariant?.id === variant.id;
                return (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      "px-4 py-2 border rounded-xl text-sm font-medium transition-all",
                      isSelected
                        ? "border-brand bg-brand-light text-brand shadow-sm"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    )}
                  >
                    {variant.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* EMI Plans */}
        <div className="px-4 py-5 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3">Choose EMI Plan</h3>
          <div className="flex flex-col gap-3">
            {product.emiPlans.map((plan) => {
              const monthlyAmount = Math.round(currentPrice / plan.months);
              const isSelected = selectedEmi?.id === plan.id;
              
              return (
                <button
                  key={plan.id}
                  onClick={() => setSelectedEmi(plan)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl border text-left transition-all relative overflow-hidden",
                    isSelected
                      ? "border-brand bg-brand-light/50 shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  )}
                >
                  <div className={cn(
                    "w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center transition-colors border",
                    isSelected ? "border-brand bg-brand" : "border-gray-300"
                  )}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-gray-900">{plan.months} Months</span>
                      <span className="font-bold text-gray-900">{formatCurrency(monthlyAmount)}/mo</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      {plan.isNoCost ? (
                        <span className="font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                          No Cost EMI
                        </span>
                      ) : (
                        <span className="text-gray-500">
                          {plan.interestRate}% Interest
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Specifications */}
        <div className="px-4 py-5">
          <h3 className="font-semibold text-gray-900 mb-3">Specifications</h3>
          <div className="flex flex-col gap-2">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex text-sm py-2 border-b border-gray-50 last:border-0">
                <span className="w-1/3 text-gray-500 font-medium">{key.replace("_", " ")}</span>
                <span className="w-2/3 text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 w-full max-w-[450px] bg-white border-t border-gray-100 p-4 pb-6 z-30 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
        <button
          disabled={isProceedDisabled}
          onClick={() => setShowConfirmation(true)}
          className="w-full bg-brand text-white font-semibold py-3.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-dark"
        >
          Proceed with EMI
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && selectedEmi && (
        <PurchaseConfirmation
          product={product}
          variant={selectedVariant}
          emiPlan={selectedEmi}
          totalPrice={currentPrice}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </>
  );
}
