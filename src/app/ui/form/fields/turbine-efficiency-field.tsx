import { ReactElement, useState } from "react";

type Props = {
  amount?: number;
};

export default function TurbineEfficiencyField({
  amount,
}: Props): ReactElement<any, any> {
  const [currentAmount, setCurrentAmount] = useState<number>(amount ?? 0);

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="turbineEfficiency">Turbine Efficiency</label>

      <div className="flex flex-row align-end">
        <input
          type="number"
          name="turbineEfficiency"
          id="turbineEfficiency"
          value={currentAmount}
          onChange={(event) => setCurrentAmount(Number(event.target.value))}
        />
        %
      </div>
    </div>
  );
}
