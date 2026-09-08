# 1Fi Marketplace

**Live Demo:** https://1-fi-marketplace-7doihca82-shishir-21s-projects.vercel.app/shop
## Overview

This project is an independent implementation created for the 1Fi SDE Intern Assignment.

The original 1Fi Shop experience was used as a visual and product reference. The core assignment feature — a new **1Fi Marketplace** — was added as an integrated tab within the existing Shop layout.

This implementation is completely standalone and was built from scratch without access to the original 1Fi source code.

## Tech Stack

- **Next.js 15** — React framework using the App Router
- **React** — Component-based UI development
- **TypeScript** — Type-safe application development
- **Tailwind CSS v4** — Responsive styling and UI implementation
- **Lucide React** — Icons
- **Vercel** — Deployment and hosting

## Features

### Shop Experience

- **1Fi-inspired Shop UI**: Recreated the visual style and interaction patterns of the 1Fi Shop experience.
- **Top Brands**: Browse partner-style brands with EMI information.
- **Nearby Stores**: Browse nearby store listings with location information.
- **Shared Search**: Context-aware search for brands, stores, and marketplace products.
- **Floating Bottom Navigation**: Mobile-first navigation matching the app-style experience.

### 1Fi Marketplace

- **Marketplace Tab**: Integrated directly into the existing Shop experience.
- **Product Listing**: Browse products with images, names, brands, pricing, and relevant details.
- **Product Search**: Search products by name or brand.
- **Category Filtering**: Filter products by categories such as Mobiles, Laptops, TVs, Appliances, and Lifestyle.
- **Product Variants**: Select available product variants such as storage options.
- **Real Product Images**: Product listings use dedicated product images stored locally in the project.

### Product Details

- Product image and product information
- Product pricing
- Product highlights
- Product variant selection
- EMI plan selection
- Product specifications
- Ratings and reviews
- Rating distribution
- Warranty information
- Manufacturer information
- Product description
- Responsive product detail layout
- Sticky product header
- Fixed EMI action button

### EMI & Purchase Flow

- Select a product variant
- Select an EMI plan
- View calculated monthly EMI
- Select from available EMI durations
- Proceed with the selected EMI plan
- View purchase confirmation
- Mock purchase flow with no real transaction processing

## User Flow

```text
Shop
  ↓
1Fi Marketplace
  ↓
Search / Category Filter
  ↓
Product Listing
  ↓
Product Details
  ↓
Select Variant
  ↓
Select EMI Plan
  ↓
Proceed with EMI
  ↓
Purchase Confirmation
