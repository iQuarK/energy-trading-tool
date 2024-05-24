import React, { ReactElement, useState } from "react";

type Props = {
  amount?: number;
  units?: string;
};

export default function WaterFlowRateField({
  amount,
  units = "(m^3)/s",
}: Props): ReactElement<any, any> {
  const [currentAmount, setCurrentAmount] = useState<number>(amount ?? 0);

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="waterFlowRate">Water Flow Rate</label>

      <div className="flex flex-row align-end">
        <input
          type="number"
          name="waterFlowRate"
          id="waterFlowRate"
          value={currentAmount}
          onChange={(event) => setCurrentAmount(Number(event.target.value))}
        />
        {units}
      </div>
    </div>
  );
}
