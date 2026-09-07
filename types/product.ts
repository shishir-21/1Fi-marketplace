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
  specifications: Record<string, string>;
}
