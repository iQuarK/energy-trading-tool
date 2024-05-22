import React, { ReactElement } from "react";
import {
  IThermalEnergyOffering,
} from "../../../lib/definitions";
import CapacityField from "../fields/capacity-field";
import LocationField from "../fields/location-field";
import HeatSourceStabilityField from "../fields/heat-source-stability-field";
import TemperatureGradientField from "../fields/temperature-gradient-field";
import ConversionEfficiencyField from "../fields/conversion-efficiency-field";
import EnvironmentalImpactRegulationField from "../fields/environmental-impact-regulation-field";

type Props = {
  fields?: IThermalEnergyOffering
}

export default function ThermalFields({
  fields}: Props): ReactElement<any, any> {
  return (
    <>
      <CapacityField amount={fields?.capacity} />
      <HeatSourceStabilityField text={fields?.heatSourceStabilty} />
      <TemperatureGradientField amount={fields?.temperatureGradient} />
      <ConversionEfficiencyField amount={fields?.conversionEfficiency} />
      <LocationField location={fields?.location} />
      <EnvironmentalImpactRegulationField text={fields?.environmentalImpactAndRegulation} />
    </>
  );
}
