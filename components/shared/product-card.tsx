import Image from "next/image";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  className,
}: Props) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex h-[260px] justify-center rounded-lg bg-secondary p-6">
          <Image
            src={imageUrl}
            alt={name}
            width={215}
            height={215}
            className="object-contain"
          />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чедер и пармезан,сырный соус, томаты,
          альфредо, чеснок
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[20px]">
            от <b>{price}грн</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
