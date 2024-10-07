"use client";

import { cn } from "@/lib/utils";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}: Props) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, { threshold: 0.4 });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.image}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
