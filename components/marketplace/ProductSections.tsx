import { Product } from "@/types/product";
import { CheckCircle2, Star, Shield, Check, X } from "lucide-react";

export function ProductHighlights({ highlights }: { highlights: string[] }) {
  if (!highlights || highlights.length === 0) return null;
  return (
    <div className="py-5 border-t border-gray-100">
      <h3 className="font-semibold text-gray-900 mb-3">Highlights</h3>
      <ul className="space-y-2">
        {highlights.map((highlight, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-gray-400 mt-1">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RatingsSummaryView({ ratingSummary }: { ratingSummary: Product["ratingSummary"] }) {
  if (!ratingSummary) return null;
  
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="flex items-center gap-1 bg-green-700 text-white px-2 py-0.5 rounded text-sm font-semibold">
        {ratingSummary.average} <Star className="w-3 h-3 fill-current" />
      </div>
      <span className="text-sm text-gray-500 font-medium">
        {ratingSummary.totalRatings.toLocaleString()} Ratings & {ratingSummary.totalReviews.toLocaleString()} Reviews
      </span>
    </div>
  );
}

export function ProductSpecifications({ groups }: { groups: Product["specificationGroups"] }) {
  if (!groups || groups.length === 0) return null;
  
  return (
    <div className="flex flex-col gap-6">
      {groups.map((group, idx) => (
        <div key={idx}>
          <h4 className="font-medium text-gray-900 mb-3 border-b border-gray-100 pb-2">{group.group}</h4>
          <div className="flex flex-col gap-3">
            {group.items.map((item, i) => (
              <div key={i} className="flex text-sm">
                <span className="w-1/3 text-gray-500">{item.label}</span>
                <span className="w-2/3 text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProductReviews({ ratingSummary, reviews }: { ratingSummary: Product["ratingSummary"], reviews: Product["reviews"] }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      {/* Distribution */}
      <div className="flex items-center gap-6 mb-2">
        <div className="text-center">
          <div className="text-4xl font-light text-gray-900">{ratingSummary.average}</div>
          <div className="flex justify-center text-green-600 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(ratingSummary.average) ? "fill-current" : "fill-gray-200 text-gray-200"}`} />
            ))}
          </div>
          <div className="text-xs text-gray-500 mt-1">{ratingSummary.totalRatings.toLocaleString()} Ratings</div>
        </div>

        <div className="flex-1 flex flex-col gap-1.5">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = ratingSummary.distribution[star as keyof typeof ratingSummary.distribution];
            const maxCount = Math.max(...Object.values(ratingSummary.distribution));
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
            const colorClass = star >= 4 ? "bg-green-500" : star === 3 ? "bg-yellow-500" : "bg-red-500";
            
            return (
              <div key={star} className="flex items-center gap-2 text-xs text-gray-600">
                <span className="w-2 text-right">{star}</span>
                <Star className="w-3 h-3 text-gray-400" />
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${colorClass}`} style={{ width: `${percentage}%` }} />
                </div>
                <span className="w-8 text-right text-gray-400 text-[10px]">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Review List */}
      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex items-center gap-2 mb-2">
              <div className={`flex items-center gap-1 text-white px-1.5 py-0.5 rounded text-xs font-semibold ${review.rating >= 4 ? "bg-green-700" : review.rating === 3 ? "bg-yellow-600" : "bg-red-600"}`}>
                {review.rating} <Star className="w-2.5 h-2.5 fill-current" />
              </div>
              <span className="font-medium text-sm text-gray-900">{review.title}</span>
            </div>
            <p className="text-sm text-gray-700 mb-3">{review.comment}</p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="font-medium text-gray-700">{review.reviewer}</span>
              {review.verified && (
                <div className="flex items-center gap-1 text-gray-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Purchase</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductWarranty({ warranty }: { warranty: Product["warranty"] }) {
  if (!warranty) return null;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center text-brand">
          <Shield className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{warranty.duration}</h4>
          <p className="text-xs text-gray-500 mt-0.5">{warranty.supportInfo}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        <div className="bg-green-50/50 p-4 rounded-xl border border-green-100/50">
          <h5 className="text-xs font-bold text-green-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Check className="w-4 h-4" /> Covered
          </h5>
          <ul className="space-y-2">
            {warranty.covered.map((item, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50/50 p-4 rounded-xl border border-red-100/50">
          <h5 className="text-xs font-bold text-red-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <X className="w-4 h-4" /> Not Covered
          </h5>
          <ul className="space-y-2">
            {warranty.notCovered.map((item, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ProductManufacturer({ manufacturer }: { manufacturer: Product["manufacturer"] }) {
  if (!manufacturer) return null;
  return (
    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
      <div className="flex flex-col gap-4">
        <div>
          <span className="text-xs text-gray-500 block mb-1">Manufacturer</span>
          <span className="font-medium text-gray-900">{manufacturer.name}</span>
        </div>
        <div>
          <span className="text-xs text-gray-500 block mb-1">Country of Origin</span>
          <span className="font-medium text-gray-900">{manufacturer.countryOfOrigin}</span>
        </div>
        <div>
          <span className="text-xs text-gray-500 block mb-1">Address</span>
          <span className="text-sm text-gray-700 leading-relaxed">{manufacturer.address}</span>
        </div>
      </div>
    </div>
  );
}
