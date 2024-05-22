import React, { ReactElement } from "react";
import { ISolarEnergyOffering } from "../../../lib/definitions";
import CapacityField from "../fields/capacity-field";
import LocationField from "../fields/location-field";
import EnergyOutputPredictionField from "../fields/energy-output-prediction-field";
import TimeOfAvailabilityField from "../fields/time-of-availability-field";
import CertificationsField from "../fields/certifications-field";

type Props = {
  fields?: ISolarEnergyOffering;
};

export default function SolarFields({ fields }: Props): ReactElement<any, any> {
  return (
    <>
      <CapacityField amount={fields?.capacity} />
      <LocationField location={fields?.location} />
      <EnergyOutputPredictionField text={fields?.energyOutputPredictions} />
      <TimeOfAvailabilityField
        timeOfAvailability={fields?.timeOfAvailability}
      />
      <CertificationsField certifications={fields?.certifications} />
    </>
  );
}
