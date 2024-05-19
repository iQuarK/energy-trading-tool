import React, { ReactElement } from "react";

export default function HydroIcon(): ReactElement<any, any> {
  return (
    <svg
      className="h-10 w-10 text-neutral-500"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" />{" "}
      <path d="M12 3l5 5a7 7 0 1 1 -10 0l5 -5" />
    </svg>
  );
}
