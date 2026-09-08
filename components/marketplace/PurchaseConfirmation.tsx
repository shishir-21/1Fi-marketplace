"use client";

import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product, Variant, EMIPlan } from "@/types/product";
import { formatCurrency } from "@/lib/utils";

interface PurchaseConfirmationProps {
  product: Product;
  variant: Variant | null;
  emiPlan: EMIPlan;
  totalPrice: number;
  onClose: () => void;
}

export function PurchaseConfirmation({
  product,
  variant,
  emiPlan,
  totalPrice,
  onClose,
}: PurchaseConfirmationProps) {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);

  const monthlyAmount = Math.round(totalPrice / emiPlan.months);
  // Mock interest calculation if not no-cost
  const mockInterest = emiPlan.isNoCost ? 0 : Math.round(totalPrice * (emiPlan.interestRate / 100));
  const mockTotalPayable = totalPrice + mockInterest;

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">EMI plan selected successfully</h2>
        <p className="text-gray-500 mb-8 max-w-[250px]">
          Your order has been placed using 1Fi Mutual Fund backed EMI.
        </p>
        <button
          onClick={() => {
            document.body.style.overflow = "unset";
            router.push("/shop?tab=marketplace");
          }}
          className="w-full max-w-[300px] bg-brand text-white font-semibold py-3.5 rounded-xl transition-all hover:bg-brand-dark hover:scale-[1.02] active:scale-[0.98]"
        >
          Back to Marketplace
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center sm:p-4 animate-in fade-in">
      <div className="bg-white w-full max-w-[450px] rounded-t-3xl sm:rounded-3xl flex flex-col animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 overflow-hidden max-h-[90vh]">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="font-bold text-lg text-gray-900">Order Summary</h2>
          <button onClick={onClose} className="p-2 -mr-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-50 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto">
          {/* Product Summary */}
          <div className="flex gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center relative overflow-hidden flex-shrink-0">
              <Image src={product.image} alt={product.name} fill className="object-contain p-1.5" sizes="64px" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{product.name}</h3>
              {variant && <p className="text-sm text-gray-500">{variant.name}</p>}
              <p className="font-bold text-gray-900 mt-1">{formatCurrency(totalPrice)}</p>
            </div>
          </div>

          {/* EMI Details */}
          <div className="bg-brand-light/30 rounded-2xl p-4 border border-brand-light">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand mb-3">EMI Details</h4>
            
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-600 font-medium">Tenure</span>
              <span className="font-semibold text-gray-900">{emiPlan.months} Months</span>
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-600 font-medium">Monthly Installment</span>
              <span className="font-semibold text-gray-900">{formatCurrency(monthlyAmount)}</span>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-brand/10 mb-3">
              <span className="text-sm text-gray-600 font-medium">Interest ({emiPlan.interestRate}%)</span>
              <span className="font-semibold text-gray-900">
                {emiPlan.isNoCost ? "₹0 (No Cost EMI)" : formatCurrency(mockInterest)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-900">Total Payable</span>
              <span className="font-bold text-brand text-lg">{formatCurrency(mockTotalPayable)}</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 mt-4 text-center px-4">
            *This is a mock transaction for the assignment. No real payment will be processed.
          </p>
        </div>

        <div className="p-5 bg-white border-t border-gray-100">
          <button
            onClick={() => setIsSuccess(true)}
            className="w-full bg-brand text-white font-semibold py-3.5 rounded-xl transition-all hover:bg-brand-dark"
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
}
