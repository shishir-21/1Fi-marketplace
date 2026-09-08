import { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    brand: "Apple",
    category: "Mobiles",
    price: 129900,
    image: "/images/iphone17.png",
    description: "The ultimate iPhone experience with the new A18 Pro chip.",
    variants: [
      { id: "v-128", name: "128 GB", price: 129900 },
      { id: "v-256", name: "256 GB", price: 139900 },
      { id: "v-512", name: "512 GB", price: 159900 },
    ],
    emiPlans: [
      { id: "emi-3", months: 3, interestRate: 0, isNoCost: true },
      { id: "emi-6", months: 6, interestRate: 0, isNoCost: true },
      { id: "emi-12", months: 12, interestRate: 14, isNoCost: false },
    ],
    specifications: {
      Display: "6.1-inch Super Retina XDR",
      Chip: "A18 Pro chip",
      Camera: "Pro camera system (48MP Main)",
    },
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air M3",
    brand: "Apple",
    category: "Laptops",
    price: 114900,
    image: "/images/macbook.png",
    description: "Supercharged by M3. The world's most popular laptop.",
    variants: [
      { id: "v-256", name: "256 GB SSD", price: 114900 },
      { id: "v-512", name: "512 GB SSD", price: 134900 },
    ],
    emiPlans: [
      { id: "emi-6", months: 6, interestRate: 0, isNoCost: true },
      { id: "emi-12", months: 12, interestRate: 0, isNoCost: true },
      { id: "emi-24", months: 24, interestRate: 15, isNoCost: false },
    ],
    specifications: {
      Display: "13.6-inch Liquid Retina",
      Memory: "8GB unified memory",
      Battery: "Up to 18 hours",
    },
  },
  {
    id: "samsung-s24-ultra",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Mobiles",
    price: 129999,
    image: "/images/samsungs24.png",
    description: "Galaxy AI is here. Welcome to the era of mobile AI.",
    variants: [
      { id: "v-256", name: "256 GB", price: 129999 },
      { id: "v-512", name: "512 GB", price: 139999 },
    ],
    emiPlans: [
      { id: "emi-3", months: 3, interestRate: 0, isNoCost: true },
      { id: "emi-6", months: 6, interestRate: 0, isNoCost: true },
      { id: "emi-18", months: 18, interestRate: 14.5, isNoCost: false },
    ],
    specifications: {
      Display: "6.8-inch Dynamic AMOLED 2X",
      Camera: "200MP Wide-angle",
      S_Pen: "Built-in S Pen",
    },
  },
  {
    id: "sony-bravia-tv",
    name: "Sony Bravia 55 inch 4K",
    brand: "Sony",
    category: "TVs",
    price: 57990,
    image: "/images/sonytv.jpg",
    description: "Immersive 4K experience with rich colors and sharp details.",
    emiPlans: [
      { id: "emi-3", months: 3, interestRate: 0, isNoCost: true },
      { id: "emi-9", months: 9, interestRate: 0, isNoCost: true },
      { id: "emi-12", months: 12, interestRate: 14, isNoCost: false },
    ],
    specifications: {
      Resolution: "4K Ultra HD (3840 x 2160)",
      Refresh_Rate: "60 Hz",
      Sound: "20 Watts Output | Dolby Audio",
    },
  },
];
