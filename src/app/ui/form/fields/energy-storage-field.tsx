import { ReactElement, useState } from "react";

type Props = {
  amount?: number;
  units?: string;
};

export default function EnergyStorageField({
  amount,
  units = "GW",
}: Props): ReactElement<any, any> {
  const [currentAmount, setCurrentAmount] = useState<number>(amount ?? 0);

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="energyStorage">Energy Storage</label>

      <div className="flex flex-row align-end">
        <input
          type="number"
          name="energyStorage"
          id="energyStorage"
          value={currentAmount}
          onChange={(event) => setCurrentAmount(Number(event.target.value))}
        />
        {units}
      </div>
    </div>
  );
}
