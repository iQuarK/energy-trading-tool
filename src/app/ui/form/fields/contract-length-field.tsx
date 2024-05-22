import { ReactElement, useState } from "react";

type Props = {
  text?: string;
};

export default function ContractLengthField({
  text,
}: Props): ReactElement<any, any> {
  const [currentText, setCurrentText] = useState<string>(text ?? "");

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="contractLength">Payment Terms</label>
      <textarea
        name="contractLength"
        id="contractLength"
        onChange={(event) => setCurrentText(event.target.value)}
        value={currentText}
      />
    </div>
  );
}
