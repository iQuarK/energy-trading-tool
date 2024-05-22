import React, { ReactElement } from "react";
import CapacityField from "../fields/capacity-field";
import { IWindEnergyOffering } from "@/app/lib/definitions";
import LocationField from "../fields/location-field";
import TimeOfAvailabilityField from "../fields/time-of-availability-field";
import CertificationsField from "../fields/certifications-field";
import TurbineEfficiencyField from "../fields/turbine-efficiency-field";
import WindSpeedPredictionsField from "../fields/wind-speed-predictions-field";

type Props = {
  fields?: IWindEnergyOffering;
};

export default function WindFields({ fields }: Props): ReactElement<any, any> {
  return (
    <>
      <CapacityField amount={fields?.capacity} />
      <LocationField location={fields?.location} />
      <WindSpeedPredictionsField text={fields?.windSpeedPredictions} />
      <TurbineEfficiencyField amount={fields?.turbineEfficiency} />
      <TimeOfAvailabilityField
        timeOfAvailability={fields?.timeOfAvailability}
      />
      <CertificationsField certifications={fields?.certifications} />
    </>
  );
}
