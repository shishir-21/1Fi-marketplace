import Image from "next/image";

export function ShopBanner() {
  return (
    <div className="w-full relative aspect-[16/10] bg-[#3B19A2]">
      <Image
        src="/images/banner.jpg"
        alt="Shop today, Pay later using Mutual funds"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
