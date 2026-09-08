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
    highlights: [
      "256 GB ROM",
      "A18 Pro Chip",
      "48MP + 48MP + 48MP Camera",
      "18MP Front Camera",
      "6.3-inch Super Retina XDR Display",
      "3988 mAh Battery"
    ],
    ratingSummary: {
      average: 4.7,
      totalRatings: 5105,
      totalReviews: 2739,
      distribution: { 5: 3500, 4: 1200, 3: 250, 2: 55, 1: 100 }
    },
    reviews: [
      { id: "r1", rating: 5, title: "Excellent phone", comment: "Great camera and smooth performance.", reviewer: "Rahul S.", verified: true },
      { id: "r2", rating: 4, title: "Good but expensive", comment: "Amazing display, battery is decent.", reviewer: "Priya M.", verified: true }
    ],
    specificationGroups: [
      {
        group: "Display",
        items: [
          { label: "Display Size", value: "6.3 inch" },
          { label: "Resolution", value: "2622 × 1206" },
          { label: "Display Type", value: "OLED Super Retina XDR" },
          { label: "Refresh Rate", value: "Up to 120Hz ProMotion" }
        ]
      },
      {
        group: "Processor",
        items: [
          { label: "Processor", value: "A18 Pro" },
          { label: "CPU", value: "6-core" },
          { label: "GPU", value: "6-core" }
        ]
      },
      {
        group: "Camera",
        items: [
          { label: "Rear Camera", value: "48MP Main + 48MP Ultrawide + 48MP Telephoto" },
          { label: "Front Camera", value: "18MP TrueDepth" }
        ]
      }
    ],
    warranty: {
      duration: "1 Year Manufacturer Warranty",
      supportInfo: "Contact Apple Support or visit an authorized service center.",
      covered: ["Manufacturing defects", "Hardware malfunctions"],
      notCovered: ["Physical damage", "Liquid damage", "Normal wear and tear"]
    },
    manufacturer: {
      name: "Apple Inc.",
      countryOfOrigin: "India",
      address: "Apple Park, Cupertino, CA, USA / Assembled in India"
    }
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
    highlights: [
      "8-Core CPU & 8-Core GPU",
      "8GB Unified Memory",
      "13.6-inch Liquid Retina Display",
      "Up to 18 hours battery life",
      "MagSafe 3 charging port",
      "1080p FaceTime HD camera"
    ],
    ratingSummary: {
      average: 4.8,
      totalRatings: 3402,
      totalReviews: 1240,
      distribution: { 5: 2800, 4: 500, 3: 80, 2: 12, 1: 10 }
    },
    reviews: [
      { id: "r1", rating: 5, title: "Best ultra-portable", comment: "The M3 chip is incredibly fast and battery lasts all day.", reviewer: "Vikram K.", verified: true },
      { id: "r2", rating: 5, title: "Perfect for students", comment: "Lightweight and powerful enough for all my tasks.", reviewer: "Anjali T.", verified: true }
    ],
    specificationGroups: [
      {
        group: "Processor & Memory",
        items: [
          { label: "Processor", value: "Apple M3 chip" },
          { label: "RAM", value: "8GB Unified Memory" },
          { label: "Storage", value: "256GB PCIe SSD" }
        ]
      },
      {
        group: "Display & Audio",
        items: [
          { label: "Screen Size", value: "13.6 inch" },
          { label: "Resolution", value: "2560 x 1664" },
          { label: "Audio", value: "4-speaker sound system with Spatial Audio" }
        ]
      },
      {
        group: "Connectivity",
        items: [
          { label: "Ports", value: "2x Thunderbolt / USB 4, MagSafe 3, 3.5mm headphone jack" },
          { label: "Wireless", value: "Wi-Fi 6E, Bluetooth 5.3" }
        ]
      }
    ],
    warranty: {
      duration: "1 Year Limited Warranty",
      supportInfo: "Includes 90 days of complimentary technical support.",
      covered: ["Hardware defects", "Battery defects (if capacity < 80%)"],
      notCovered: ["Accidental drops", "Water spills", "Software issues from third-party apps"]
    },
    manufacturer: {
      name: "Apple Inc.",
      countryOfOrigin: "China",
      address: "Apple Park, Cupertino, CA, USA"
    }
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
    highlights: [
      "12GB RAM | 256GB ROM",
      "6.8-inch Dynamic AMOLED 2X Display",
      "200MP + 50MP + 12MP + 10MP Quad Camera",
      "12MP Front Camera",
      "5000 mAh Battery",
      "Snapdragon 8 Gen 3 Processor",
      "Titanium Frame & Built-in S Pen"
    ],
    ratingSummary: {
      average: 4.6,
      totalRatings: 4210,
      totalReviews: 1850,
      distribution: { 5: 2900, 4: 950, 3: 200, 2: 60, 1: 100 }
    },
    reviews: [
      { id: "r1", rating: 5, title: "AI features are mind-blowing", comment: "The live translation and circle to search change how I use a phone.", reviewer: "Aditya P.", verified: true },
      { id: "r2", rating: 4, title: "Great camera, slightly heavy", comment: "Zoom is incredible. Phone is a bit heavy to hold for long.", reviewer: "Neha S.", verified: true }
    ],
    specificationGroups: [
      {
        group: "Display",
        items: [
          { label: "Screen Size", value: "6.8 inch" },
          { label: "Resolution", value: "3120 x 1440 (Quad HD+)" },
          { label: "Refresh Rate", value: "1-120Hz Adaptive" },
          { label: "Protection", value: "Corning Gorilla Armor" }
        ]
      },
      {
        group: "Camera",
        items: [
          { label: "Primary Camera", value: "200MP OIS" },
          { label: "Telephoto", value: "50MP (5x) + 10MP (3x)" },
          { label: "Ultrawide", value: "12MP" }
        ]
      },
      {
        group: "Battery & Charging",
        items: [
          { label: "Capacity", value: "5000 mAh" },
          { label: "Fast Charging", value: "45W Wired" },
          { label: "Wireless Charging", value: "15W" }
        ]
      }
    ],
    warranty: {
      duration: "1 Year Standard Warranty",
      supportInfo: "Service available at authorized Samsung Care centers nationwide.",
      covered: ["Software glitches", "Hardware failures under normal use"],
      notCovered: ["Display cracks", "Unauthorized repairs", "Liquid damage"]
    },
    manufacturer: {
      name: "Samsung Electronics",
      countryOfOrigin: "Vietnam",
      address: "Suwon-si, Gyeonggi-do, South Korea"
    }
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
    highlights: [
      "Supported Apps: Netflix, Prime Video, Disney+ Hotstar, YouTube",
      "Operating System: Google TV",
      "Resolution: Ultra HD (4K) 3840 x 2160 Pixels",
      "Sound Output: 20 W",
      "Refresh Rate: 60 Hz",
      "X1 4K HDR Processor"
    ],
    ratingSummary: {
      average: 4.5,
      totalRatings: 1890,
      totalReviews: 820,
      distribution: { 5: 1100, 4: 500, 3: 150, 2: 90, 1: 50 }
    },
    reviews: [
      { id: "r1", rating: 5, title: "Stunning picture quality", comment: "Colors are very natural, typical Sony quality.", reviewer: "Manoj D.", verified: true },
      { id: "r2", rating: 4, title: "Good TV, sound could be better", comment: "Video is great, but recommend buying a soundbar.", reviewer: "Kiran R.", verified: true }
    ],
    specificationGroups: [
      {
        group: "Display Features",
        items: [
          { label: "Display Size", value: "55 inch" },
          { label: "Screen Type", value: "LED" },
          { label: "HD Technology", value: "Ultra HD (4K)" },
          { label: "Motion Enhancer", value: "Motionflow XR 200" }
        ]
      },
      {
        group: "Audio Features",
        items: [
          { label: "Number of Speakers", value: "2" },
          { label: "Sound Technology", value: "Dolby Audio, Clear Phase" },
          { label: "Speaker Output", value: "20 W" }
        ]
      },
      {
        group: "Smart TV Features",
        items: [
          { label: "OS", value: "Google TV" },
          { label: "Built-In Wi-Fi", value: "Yes" },
          { label: "Voice Search", value: "Yes (Google Assistant)" }
        ]
      }
    ],
    warranty: {
      duration: "1 Year Comprehensive Warranty",
      supportInfo: "Free installation and demo provided by Sony authorized technicians.",
      covered: ["Panel defects", "Motherboard issues", "Remote control defects"],
      notCovered: ["Physical damage to screen", "Voltage surge damage"]
    },
    manufacturer: {
      name: "Sony India Pvt. Ltd.",
      countryOfOrigin: "India",
      address: "A-18, Mohan Co-operative Industrial Estate, Mathura Road, New Delhi"
    }
  }
];
