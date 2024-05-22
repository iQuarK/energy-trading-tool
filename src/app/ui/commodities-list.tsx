import React, { ReactElement, useState } from "react";
import {
  EnergyOfferingFields,
  labelsByEnergyOffering,
} from "../lib/definitions";
import classNames from "classnames";
import Button from "./button";

type Props = {
  commodities: EnergyOfferingFields[];
  onEdit: (item: EnergyOfferingFields) => void;
};

export default function CommoditiesList({
  commodities,
  onEdit,
}: Props): ReactElement<any, any> {
  const [openDetails, setOpenDetails] = useState<string | null>(null);

  if (commodities.length === 0) {
    return <div>Oooops! You still have no commodities.</div>;
  }

  return (
    <div className="grid grid-cols-6 gap-2">
      <>
        <div className="font-bold">Type</div>
        <div className="font-bold">Price</div>
        <div className="font-bold">Min. Purchase Quantity</div>
        <div className="font-bold">Contract Terms</div>
        <div className="font-bold">Payment Terms</div>
        <div className="font-bold text-right">Actions</div>
      </>
      {commodities.map((c: { [key: string]: any }) => (
        <React.Fragment key={c.type}>
          <div>{c.type}</div>
          <div>{c.price}</div>
          <div>{c.minimumPurchaseQuantity}</div>
          <div>{c.contractTerms}</div>
          <div>{c.paymentTerms}</div>
          <div className="text-right">
            <Button onClick={() => onEdit(c as EnergyOfferingFields)}>
              Edit
            </Button>
            {" "}
            <Button
              onClick={() =>
                setOpenDetails(openDetails === c.type ? null : c.type)
              }
            >
              Details
            </Button>
          </div>
          <div
            className={classNames(
              "col-span-6 bg-amber-200 rounded-b-md transition-all overflow-hidden",
              {
                "max-h-0": openDetails !== c.type,
                "max-h-300 p-4 mb-4": openDetails === c.type,
              }
            )}
          >
            <div className="flex flex-col gap-2">
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
  );
}
