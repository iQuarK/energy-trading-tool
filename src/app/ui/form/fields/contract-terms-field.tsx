import React, { ReactElement, useEffect, useState } from "react";

type Props = {
  text?: string;
};

export default function ContractTermsField({
  text,
}: Props): ReactElement<any, any> {
  const [currentText, setCurrentText] = useState<string>(text ?? "");

  useEffect(() => {
    setCurrentText(text ?? "");
  }, [text]);

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="contractTerms">Contract Terms</label>
      <textarea
        name="contractTerms"
        id="contractTerms"
        onChange={(event) => setCurrentText(event.target.value)}
        value={currentText}
      />
    </div>
  );
}
