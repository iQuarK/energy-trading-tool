import React, { ReactElement, useState } from "react";
import {
  EnergyOfferingFields,
  labelsByEnergyOffering,
} from "../lib/definitions";
import classNames from "classnames";
import Button from "./button";

type Props = {
  commodities: EnergyOfferingFields[];
  trades: EnergyOfferingFields[];
  onTrade: (item: EnergyOfferingFields) => void;
};

export default function CommoditiesTrade({
  commodities,
  trades,
  onTrade,
}: Props): ReactElement<any, any> {
  const [openDetails, setOpenDetails] = useState<string | null>(null);
  const noFilter = "All";
  const [filter, setFilter] = useState<string | null>(noFilter);

  if (commodities.length === 0) {
    return <div>Oooops! There are no commodities yet!</div>;
  }

  // Filter
  const handleFilter = (e: any) => setFilter(e.target.value);
  const filterSet = new Set(commodities.map((item) => item.type));
  let filterValues: string[] = [];
  filterSet.forEach((item) => filterValues.push(item));

  const filteredCommodities =
    filter === noFilter
      ? commodities
      : commodities.filter((item) => item.type === filter);

  // Trade
  const isTraded = (fields: EnergyOfferingFields) =>
    trades.filter((item) => item.type === fields.type).length > 0;
  return (
    <>
      <label htmlFor="filter">Filter by energy source:</label>
      <select onChange={handleFilter}>
        <option value={noFilter}>{noFilter}</option>
        {filterValues.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>

      <div className="grid grid-cols-4 gap-2">
        <>
          <div className="font-bold">Type</div>
          <div className="font-bold">Price</div>
          <div className="font-bold">Min. Purchase Quantity</div>
          <div className="font-bold text-right">Actions</div>
        </>
        {filteredCommodities
          .filter((item) => item.type)
          .map((c: { [key: string]: any }) => (
            <React.Fragment key={c.type}>
              <div className="flex self-center">{c.type}</div>
              <div className="flex self-center">{c.price}</div>
              <div className="flex self-center">
                {c.minimumPurchaseQuantity}
              </div>
              <div className="text-right">
                <Button
                  onClick={() =>
                    setOpenDetails(openDetails === c.type ? null : c.type)
                  }
                >
                  Details
                </Button>{" "}
                <Button
                  onClick={() => onTrade(c as EnergyOfferingFields)}
                  disabled={isTraded(c as EnergyOfferingFields)}
                >
                  {isTraded(c as EnergyOfferingFields) ? "Traded" : "Trade"}
                </Button>
              </div>
              <div
                className={classNames(
                  "col-span-4 bg-amber-200 rounded-b-md transition-all overflow-hidden",
                  {
                    "max-h-0": openDetails !== c.type,
                    "max-h-300 p-4 mb-4": openDetails === c.type,
                  }
                )}
              >
                <div className="flex flex-col gap-2">
                  <div>
                    <b>Contract Terms:</b> {c.contractTerms}
                  </div>
                  <div>
                    <b>Payment Terms:</b> {c.paymentTerms}
                  </div>
                  {Object.keys(labelsByEnergyOffering[c.type] ?? {}).map(
                    (key: string) => (
                      <div key={key}>
                        <b>{labelsByEnergyOffering[c.type][key]}:</b>{" "}
                        {JSON.stringify(c[key])}
                      </div>
                    )
                  )}
                </div>
              </div>
            </React.Fragment>
          ))}
      </div>
    </>
  );
}
