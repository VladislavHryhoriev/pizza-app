"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

const cats = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
];

export const Categories = () => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div className="inline-flex gap-1 rounded-2xl bg-gray-50 p-1">
      {cats.map(({ name, id }) => (
        <a
          href={`/#${name}`}
          key={name}
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            categoryActiveId === id
              ? "bg-white text-primary shadow-md shadow-gray-200"
              : "",
          )}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
