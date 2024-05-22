import { ReactElement, useState } from "react";

type Props = {
  amount?: number;
  units?: string;
};

export default function FlexibilityOfSupplyField({
  amount,
  units = "MW",
}: Props): ReactElement<any, any> {
  const [currentAmount, setCurrentAmount] = useState<number>(amount ?? 0);

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="flexibilityOfSupply">Flexibility of Supply</label>

      <div className="flex flex-row align-end">
        <input
          type="number"
          name="flexibilityOfSupply"
          id="flexibilityOfSupply"
          value={currentAmount}
          onChange={(event) => setCurrentAmount(Number(event.target.value))}
        />
        {units}
      </div>
    </div>
  );
}
