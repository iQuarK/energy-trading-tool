import { ReactElement, useEffect, useState } from "react";

type Props = {
  price?: number;
  units?: string;
};

export default function PriceField({
  price,
  units = "EUR",
}: Props): ReactElement<any, any> {
  const [currentPrice, setCurrentPrice] = useState<number>(price ?? 0);

  useEffect(() => {
    setCurrentPrice(price ?? 0);
  }, [price]);

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="price">Price</label>

      <div className="flex flex-row align-end">
        <input
          type="number"
          name="price"
          id="price"
          value={currentPrice}
          onChange={(event) => setCurrentPrice(Number(event.target.value))}
        />
        {units}
      </div>
    </div>
  );
}
