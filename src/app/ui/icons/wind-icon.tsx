import React, { ReactElement } from "react";

export default function WindIcon(): ReactElement<any, any> {
  return (
    <svg
      className="h-10 w-10 text-neutral-500"
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
      <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />{" "}
      <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />{" "}
      <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
    </svg>
  );
}
