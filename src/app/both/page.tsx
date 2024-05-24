"use client";
import React from "react";
import Seller from "../page";
import Buyer from "../buyer/page";

export default function Both() {

  return (
    <div className="flex flex-row justify-start align-start">
      <Seller />
      <div className="bg-stone-950 w-1"></div>
      <Buyer />
    </div>
  );
}
