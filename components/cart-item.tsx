import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { Minus, Plus, XCircle } from "lucide-react";

interface CartItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: StaticImageData;
}

export function CartItem({
  name,
  description,
  price,
  quantity,
  image,
}: CartItemProps) {
  return (
    <div className="grid md:grid-cols-5 grid-cols-4 place-content-center items-center border-b">
      <div className=" col-span-2 flex  items-center gap-2 p-4 py-4 border-b">
        <button
          className="text-rose-500 hover:text-rose-600 self-start md:self-center"
          aria-label="Remove item"
        >
          <XCircle className="h-4 w-4" />
        </button>
        <div>
          <div className="relative h-16 w-16 overflow-hidden rounded-md ">
            <Image src={image.src} alt={name} fill className="object-cover" />
          </div>
          <div className="space-y-1">
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>

      <div className="w-20 text-righ hidden md:block">${price.toFixed(2)}</div>

      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <input
          type="number"
          value={quantity}
          className="w-12 text-center border rounded-md"
          readOnly
        />
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="w-20 text-right">${price.toFixed(2)}</div>
    </div>
  );
}
