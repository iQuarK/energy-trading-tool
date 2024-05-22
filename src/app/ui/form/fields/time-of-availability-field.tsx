import { ReactElement, useState } from "react";
import SunshineIcon from "../../icons/sunshine-icon";
import SunsetIcon from "../../icons/sunset-icon";
import { TimeOfAvailability } from "@/app/lib/definitions";

type Props = {
  timeOfAvailability: TimeOfAvailability | undefined;
};

export default function TimeOfAvailabilityField({
  timeOfAvailability,
}: Props): ReactElement<any, any> {
  const [currentTOA, setCurrentTOA] = useState<TimeOfAvailability>(
    timeOfAvailability ?? { sunset: "X am", sunshine: "X pm" }
  );

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="timeOfAvailability-sunset">Time of Availability</label>
      <div className="flex flex-row align-end">
        <input
          type="hidden"
          name="timeOfAvailability"
          id="timeOfAvailability"
          value={JSON.stringify(currentTOA)}
        />
        <SunsetIcon />
        <input
          className="w-12"
          type="text"
          value={currentTOA.sunset}
          onChange={(event) =>
            setCurrentTOA({
              sunset: event.target.value,
              sunshine: currentTOA.sunshine,
            })
          }
        />
        <SunshineIcon />
        <input
          className="w-12"
          type="text"
          value={currentTOA.sunshine}
          onChange={(event) =>
            setCurrentTOA({
              sunshine: event.target.value,
              sunset: currentTOA.sunset,
            })
          }
        />
      </div>
    </div>
  );
}
