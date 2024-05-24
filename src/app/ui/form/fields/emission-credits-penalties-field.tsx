import React, { ReactElement, useState } from "react";

type Props = {
  text?: string;
};

export default function EmissionCreditsPenaltiesField({
  text,
}: Props): ReactElement<any, any> {
  const [currentText, setCurrentText] = useState<string>(text ?? "");

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="emissionCreditsOrPenalties">Emission Credits or Penalties</label>
      <textarea
        name="emissionCreditsOrPenalties"
        id="emissionCreditsOrPenalties"
        onChange={(event) => setCurrentText(event.target.value)}
        value={currentText}
      />
    </div>
  );
}
