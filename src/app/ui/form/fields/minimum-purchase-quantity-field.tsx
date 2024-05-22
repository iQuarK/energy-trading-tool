import { ReactElement, useEffect, useState } from "react";

type Props = {
  amount?: number;
  units?: string;
};

export default function MinimumPurchaseQuantityField({
  amount,
  units = "units",
}: Props): ReactElement<any, any> {
  const [currentAmount, setCurrentAmount] = useState<number>(amount ?? 0);

  useEffect(() => {
    setCurrentAmount(amount ?? 0);
  }, [amount]);

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="minimumPurchaseQuantity">Minimum Purchase Quantity</label>
      <div className="flex flex-row align-end">
        <input
          type="number"
          name="minimumPurchaseQuantity"
          id="minimumPurchaseQuantity"
          value={currentAmount}
          onChange={(event) => setCurrentAmount(Number(event.target.value))}
        />
        {units}
      </div>
    </div>
  );
}
