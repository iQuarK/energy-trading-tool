import React, { ReactElement, useState } from "react";

type Props = {
  amount?: number;
  units?: string;
};

export default function CapacityField({
  amount,
  units = "Kw",
}: Props): ReactElement<any, any> {
  const [currentAmount, setCurrentAmount] = useState<number>(amount ?? 0);

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="capacity">Capacity</label>

      <div className="flex flex-row align-start" data-testid="capacity-parent">
        <input
          type="number"
          name="capacity"
          id="capacity"
          data-testid="capacity"
          value={currentAmount}
          onChange={(event) => setCurrentAmount(Number(event.target.value))}
        />
        {units}
      </div>
    </div>
  );
}
