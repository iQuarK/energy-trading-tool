import React, { ReactElement, useEffect, useState } from "react";

type Props = {
  text?: string;
};

export default function WindSpeedPredictionsField({
  text,
}: Props): ReactElement<any, any> {
  const [currentText, setCurrentText] = useState<string>(text ?? "");

  useEffect(() => {
    setCurrentText(text ?? "");
  }, []);

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="windSpeedPredictions">Wind Speed Predictions</label>
      <textarea
        name="windSpeedPredictions"
        id="windSpeedPredictions"
        onChange={(event) => setCurrentText(event.target.value)}
        value={currentText}
      />
    </div>
  );
}
