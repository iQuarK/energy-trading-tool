import React, { ReactElement, useState } from "react";
import Image from "next/image";

type Props = {
  location?: string;
};

export default function LocationField({
  location,
}: Props): ReactElement<any, any> {
  const [currentLocation, setCurrentLocation] = useState<string>(location ?? "");

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row justify-center gap-6">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={currentLocation}
          onChange={(event) => setCurrentLocation(event.target.value)}
        />
      </div>
      <Image
        className="self-center"
        src="/map.png"
        alt="Vercel Logo"
        width={300}
        height={110}
        priority
      />
    </div>
  );
}
