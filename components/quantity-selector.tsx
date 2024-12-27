import { Minus, Plus } from 'lucide-react'
import { Button } from "~/components/ui/button"

interface QuantitySelectorProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Button
        variant="outline"
        size="icon"
        onClick={onDecrease}
        className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
      >
        <Minus className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
      </Button>
      <span className="w-8 sm:w-12 text-center text-sm sm:text-base">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={onIncrease}
        className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
      >
        <Plus className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
      </Button>
    </div>
  )
}

