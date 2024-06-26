import React, { ReactElement } from "react";

export default function SunsetIcon(): ReactElement<any, any> {
  return (
    <svg
      className="h-8 w-8 text-neutral-500"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" />{" "}
      <path d="M3 17h1m16 0h1M5.6 10.6l.7.7m12.1-.7l-.7.7M8 17a4 4 0 0 1 8 0" />{" "}
      <line x1="3" y1="21" x2="21" y2="21" />{" "}
      <path d="M12 9v-6l3 3m-6 0l3 -3" />
    </svg>
  );
}
