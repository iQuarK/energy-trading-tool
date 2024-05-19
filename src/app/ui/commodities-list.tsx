import React, { ReactElement, useState } from "react";
import { IEnergyOffering } from "../lib/definitions";
import classNames from "classnames";

type Props = { commodities: IEnergyOffering[] };

export default function CommoditiesList({
  commodities,
}: Props): ReactElement<any, any> {
  const [openDetails, setOpenDetails] = useState<string | null>(null);

  if (commodities.length === 0) {
    return <div>Oooops! You still have no commodities.</div>
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
      {commodities.map((c) => (
        <React.Fragment key={c.type}>
          <div>{c.type}</div>
          <div>{c.price}</div>
          <div>{c.minimumPurchaseQuantity}</div>
          <div>{c.contractTerms}</div>
          <div>{c.paymentTerms}</div>
          <div className="text-right">
            Edit | Delete |{" "}
            <a className="cursor-pointer" onClick={() => setOpenDetails(openDetails === c.type ? null : c.type)}>Details</a>
          </div>
          <div
            className={classNames(
              "col-span-6 bg-amber-200 rounded-b-md transition-all overflow-hidden",
              { "max-h-0": openDetails !== c.type,
              "max-h-300 p-4 mb-4": openDetails === c.type
               }
            )}
          >
            <div className="grid grid-cols-5 gap-2">
              <div>Capacity: 45MW</div>
              <div>Location: here</div>
              <div>Energy Output Predictions: more or less a lot</div>
              <div>Time of Availability: 8am to 7pm (11 hours)</div>
              <div>Certifications: CERT1 CERT2</div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
