"use client";
import React, { useEffect, useState } from "react";
import CommoditiesTrade from "../ui/commodities-trade";
import { store } from "../data/store";
import { EnergyOfferingFields } from "../lib/definitions";
import { trade } from "../data/trade";

export default function Buyer() {
  const [commodities, setCommodities] = useState<EnergyOfferingFields[]>([]);
  const [trades, setTrades] = useState<EnergyOfferingFields[]>([]);

  useEffect(() => {
    store.subscribe(setCommodities);
    trade.subscribe(setTrades);
  }, []);

  return  <>
  <main id="seller-page" className="min-h-screen p-4">
    <h1 className="font-bold text-lg mb-4">Trading</h1>
    <CommoditiesTrade
      commodities={commodities}
      trades={trades}
      onTrade={(item: EnergyOfferingFields) => trade.upsert(item)}
    />
    
  </main>
</>;
}
