# 1Fi Marketplace

## Overview
This project is an independent implementation created for the 1Fi SDE Intern Assignment. 
The original 1Fi Shop experience was used as a visual and product reference. The core assignment feature—a new "1Fi Marketplace"—was added as an integrated tab within the existing Shop layout. This implementation is completely standalone and built from scratch without any access to the original 1Fi source code.

## Features
- **1Fi-inspired Shop UI**: Recreated the look and feel of the live 1Fi shop page.
- **Top Brands & Nearby Stores**: Authentic recreation of the tabs and layout.
- **Marketplace**: A fully functional tab allowing users to browse products.
- **Product Search & Filtering**: Filter by category and search by name/brand.
- **Product Details**: View variants, specifications, and full descriptions.
- **EMI Plans & Calculation**: Mock calculation of monthly EMIs with selectable interest and no-cost EMI options.
- **Purchase Confirmation**: A clean, animated confirmation modal for placing mock orders.
- **Responsive Design**: Designed Mobile-first to look like a native application within a desktop browser frame.

## Tech Stack
- **Next.js 15 (App Router)**
- **TypeScript**
- **React**
- **Tailwind CSS v4**
- **Lucide React** (Icons)

## Running Locally

To run the project locally, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Architecture
- **App Router (`/app`)**: Contains layout structure, `shop` page, and dynamic `marketplace/[id]` routing.
- **Components (`/components`)**: 
  - `shop/`: Components for the base Shop UI (Banner, Tabs, TopBrands, etc.).
  - `marketplace/`: Components for the marketplace experience (ProductGrid, ProductDetails, PurchaseConfirmation).
- **Data (`/data`)**: Contains local mock data for products, categories, and brands to keep UI components pure.
- **Types (`/types`)**: Strong TypeScript definitions for Products, Variants, and EMI Plans.

## Important Note
**All product, brand, and EMI data in this project is mock data created specifically for the assignment.** No real transactions are performed, and this data does not represent actual 1Fi partner or financial data.
