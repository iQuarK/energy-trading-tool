import { ReactElement, useState } from "react";

type Props = {
  amount?: number;
  units?: string;
};

export default function TemperatureGradientField({
  amount,
  units = "K/m",
}: Props): ReactElement<any, any> {
  const [currentAmount, setCurrentAmount] = useState<number>(amount ?? 0);

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="temperatureGradient">Temperature Gradient</label>

      <div className="flex flex-row align-end">
        <input
          type="number"
          name="temperatureGradient"
          id="temperatureGradient"
          value={currentAmount}
          onChange={(event) => setCurrentAmount(Number(event.target.value))}
        />
        {units}
      </div>
    </div>
  );
}
