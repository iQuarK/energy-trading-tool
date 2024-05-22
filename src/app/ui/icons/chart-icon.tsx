import React, { ReactElement } from "react";

export default function ChartIcon(): ReactElement<any, any> {
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
      <line x1="4" y1="19" x2="20" y2="19" />{" "}
      <polyline points="4 15 8 9 12 11 16 6 20 10" />
    </svg>
  );
}
