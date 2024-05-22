import { ReactElement, useState } from "react";

type Props = {
  text?: string;
};

export default function EnergyOutputPredictionField({
  text,
}: Props): ReactElement<any, any> {
  const [ currentEOP, setCurrentEOP ] = useState<string>(text ?? "");

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="energyOutputPredictions">Energy output predictions</label>
      <input
        type="text"
        name="energyOutputPredictions"
        id="energyOutputPredictions"
        value={currentEOP}
        onChange={ event => setCurrentEOP(event.target.value)}
      />
    </div>
  );
}
