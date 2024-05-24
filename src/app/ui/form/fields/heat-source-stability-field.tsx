import React, { ReactElement, useState } from "react";

type Props = {
  text?: string;
};

export default function HeatSourceStabilityField({
  text,
}: Props): ReactElement<any, any> {
  const [currentText, setCurrentText] = useState<string>(text ?? "");

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="heatSourceStabilty">Heat Source Stability</label>
      <textarea
        name="heatSourceStabilty"
        id="heatSourceStabilty"
        onChange={(event) => setCurrentText(event.target.value)}
        value={currentText}
      />
    </div>
  );
}
