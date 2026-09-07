import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ProductDetails } from "@/components/marketplace/ProductDetails";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen relative pb-24 bg-white">
      <ProductDetails product={product} />
    </div>
  );
}
