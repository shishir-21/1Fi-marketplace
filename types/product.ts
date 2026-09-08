export interface Variant {
  id: string;
  name: string;
  price: number;
}

export interface EMIPlan {
  id: string;
  months: number;
  interestRate: number; // e.g. 0 for no-cost, 14 for 14%
  isNoCost: boolean;
}

export interface Review {
  id: string;
  rating: number;
  title: string;
  comment: string;
  reviewer: string;
  verified: boolean;
}

export interface RatingSummary {
  average: number;
  totalRatings: number;
  totalReviews: number;
  distribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export interface SpecificationGroup {
  group: string;
  items: { label: string; value: string }[];
}

export interface Warranty {
  duration: string;
  supportInfo: string;
  covered: string[];
  notCovered: string[];
}

export interface Manufacturer {
  name: string;
  countryOfOrigin: string;
  address: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string; // URL or placeholder string
  description: string;
  variants?: Variant[];
  emiPlans: EMIPlan[];
  highlights: string[];
  ratingSummary: RatingSummary;
  reviews: Review[];
  specificationGroups: SpecificationGroup[];
  warranty: Warranty;
  manufacturer: Manufacturer;
}
