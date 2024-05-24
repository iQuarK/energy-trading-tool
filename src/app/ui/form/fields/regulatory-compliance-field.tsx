import React, { ReactElement, useState } from "react";

type Props = {
  text?: string;
};

export default function RegulatoryComplianceField({
  text,
}: Props): ReactElement<any, any> {
  const [currentText, setCurrentText] = useState<string>(text ?? "");

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="regulatoryCompliance">Regulatory Compliance</label>
      <textarea
        name="regulatoryCompliance"
        id="regulatoryCompliance"
        onChange={(event) => setCurrentText(event.target.value)}
        value={currentText}
      />
    </div>
  );
}
