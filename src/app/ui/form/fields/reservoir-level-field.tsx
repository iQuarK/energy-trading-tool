import { ReactElement, useState } from "react";
import { RulerIcon, ChartIcon } from "../../icons/";
import { ReservoirLevel } from "@/app/lib/definitions";

type Props = {
  level: ReservoirLevel | undefined;
};

export default function ReservoirLevelField({
  level,
}: Props): ReactElement<any, any> {
  const [currentLevel, setCurrentLevel] = useState<ReservoirLevel>(
    level ?? { current: "0 liters", historical: "0 liters" }
  );

  return (
    <div className="flex flex-row justify-center gap-6">
      <label>Reservoir Level</label>
      <div className="flex flex-row align-end">
        <input
          type="hidden"
          name="reservoirLevel"
          id="reservoirLevel"
          value={JSON.stringify(currentLevel)}
        />
        <RulerIcon />
        <input
          className="w-12"
          type="text"
          value={currentLevel.current}
          onChange={(event) =>
            setCurrentLevel({
              current: event.target.value,
              historical: currentLevel.historical,
            })
          }
        />
        <ChartIcon />
        <input
          className="w-12"
          type="text"
          value={currentLevel.historical}
          onChange={(event) =>
            setCurrentLevel({
              historical: event.target.value,
              current: currentLevel.current,
            })
          }
        />
      </div>
    </div>
  );
}
