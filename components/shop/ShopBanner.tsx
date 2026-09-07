import { Sparkles } from "lucide-react";

export function ShopBanner() {
  return (
    <div className="bg-brand w-full pt-12 pb-16 px-6 relative overflow-hidden text-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-dark rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-[70%]">
        <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>NO-COST EMIs</span>
        </div>
        
        <h1 className="text-[28px] leading-[1.15] font-bold mb-3 tracking-tight">
          Shop today,<br />
          <span className="italic font-medium opacity-90">Pay later using</span><br />
          Mutual funds.
        </h1>
        
        <p className="text-sm opacity-80 leading-snug pr-4">
          No credit score required. No interest.<br />
          Backed by your investments.
        </p>
      </div>

      {/* Decorative Placeholder for Illustration */}
      <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 flex items-center justify-center rotate-[-10deg]">
        <div className="w-full h-full bg-gradient-to-tr from-yellow-400 to-yellow-200 rounded-2xl shadow-xl flex items-center justify-center opacity-90 transform skew-y-6">
          <span className="text-brand font-bold text-lg rotate-[10deg]">🎁</span>
        </div>
      </div>
    </div>
  );
}
