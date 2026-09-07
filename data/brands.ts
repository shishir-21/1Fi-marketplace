export interface Brand {
  id: string;
  name: string;
  description: string;
  logoColor: string; // Used for placeholder logo
}

export const BRANDS: Brand[] = [
  {
    id: "air-india",
    name: "Air India",
    description: "No-cost EMIs upto 12 months",
    logoColor: "bg-red-600",
  },
  {
    id: "apple",
    name: "Apple Premium Reseller",
    description: "No-cost EMIs upto 24 months",
    logoColor: "bg-black",
  },
  {
    id: "croma",
    name: "Croma",
    description: "No-cost EMIs upto 12 months",
    logoColor: "bg-teal-600",
  },
  {
    id: "myntra",
    name: "Myntra",
    description: "No-cost EMIs upto 6 months",
    logoColor: "bg-pink-500",
  },
  {
    id: "amazon",
    name: "Amazon",
    description: "No-cost EMIs upto 12 months",
    logoColor: "bg-gray-800",
  },
  {
    id: "flipkart",
    name: "Flipkart",
    description: "No-cost EMIs upto 9 months",
    logoColor: "bg-blue-600",
  },
];
