import React, { ReactElement } from "react";
import {
  IKineticEnergyOffering,
} from "../../../lib/definitions";
import CapacityField from "../fields/capacity-field";
import LocationField from "../fields/location-field";
import PredictabilityOfSourceField from "../fields/predictability-of-source-field";
import ConversionEfficiencyField from "../fields/conversion-efficiency-field";

type Props = {
  fields?: IKineticEnergyOffering
}

export default function KineticFields({
  fields}: Props): ReactElement<any, any> {
  return (
    <>
      <CapacityField amount={fields?.capacity} />
      <LocationField location={fields?.location} />
      <ConversionEfficiencyField amount={fields?.conversionEfficiency} />
      <PredictabilityOfSourceField text={fields?.predictabilityOfSource} />
    </>
  );
}
