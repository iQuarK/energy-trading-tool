import React, { ReactElement, useState } from "react";

type Props = {
  text?: string;
};

export default function PredictabilityOfSourceField({
  text,
}: Props): ReactElement<any, any> {
  const [currentText, setCurrentText] = useState<string>(text ?? "");

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="predictabilityOfSource">Predictability of Source</label>
      <textarea
        name="predictabilityOfSource"
        id="predictabilityOfSource"
        onChange={(event) => setCurrentText(event.target.value)}
        value={currentText}
      />
    </div>
  );
}
