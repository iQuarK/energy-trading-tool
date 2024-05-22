import React, { ReactElement } from "react";
import { IHydroEnergyOffering } from "../../../lib/definitions";
import CapacityField from "../fields/capacity-field";
import FlexibilityOfSupplyField from "../fields/flexibility-of-supply-field";
import WaterFlowRateField from "../fields/water-flow-rate-field";
import RegulatoryComplianceField from "../fields/regulatory-compliance-field";
import EnergyStorageField from "../fields/energy-storage-field";
import ReservoirLevelField from "../fields/reservoir-level-field";

type Props = {
  fields?: IHydroEnergyOffering;
};

export default function HydroFields({ fields }: Props): ReactElement<any, any> {
  return (
    <>
      <CapacityField amount={fields?.capacity} />
      <WaterFlowRateField amount={fields?.waterFlowRate} />
      <ReservoirLevelField level={fields?.reservoirLevel} />
      <RegulatoryComplianceField text={fields?.regulatoryCompliance} />
      <FlexibilityOfSupplyField amount={fields?.flexibilityOfSupply} />
      <EnergyStorageField amount={fields?.energyStorage} />
    </>
  );
}
