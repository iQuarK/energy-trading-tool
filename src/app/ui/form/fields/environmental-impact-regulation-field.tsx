import { ReactElement, useState } from "react";

type Props = {
  text?: string;
};

export default function EnvironmentalImpactRegulationField({
  text,
}: Props): ReactElement<any, any> {
  const [currentText, setCurrentText] = useState<string>(text ?? "");

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="environmentalImpactAndRegulation">Environmental Impact and Regulation</label>
      <textarea
        name="environmentalImpactAndRegulation"
        id="environmentalImpactAndRegulation"
        onChange={(event) => setCurrentText(event.target.value)}
        value={currentText}
      />
    </div>
  );
}
