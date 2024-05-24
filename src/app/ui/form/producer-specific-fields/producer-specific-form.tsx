import React, { ReactElement, useContext } from "react";
import { EnergyOfferingFormContext } from "../energy-offering-form";
import {
  EnergyOfferingFields,
  EnergyOfferings,
  IGasEnergyOffering,
  IHydroEnergyOffering,
  IKineticEnergyOffering,
  ISolarEnergyOffering,
  IThermalEnergyOffering,
  IWindEnergyOffering,
} from "@/app/lib/definitions";
import SolarFields from "./solar-fields";
import WindFields from "./wind-fields";
import GasFields from "./gas-fields";
import HydroFields from "./hydro-fields";
import KineticFields from "./kinetic-fields";
import ThermalFields from "./thermal-fields";

type Props = {
  fields: EnergyOfferingFields | undefined;
};

export default function ProducerSpecificForm({
  fields,
}: Props): ReactElement<any, any> {
  const { currentEnergyOffering } = useContext(EnergyOfferingFormContext);

  switch (currentEnergyOffering) {
    case EnergyOfferings.SOLAR:
      return <SolarFields fields={fields as ISolarEnergyOffering} />;
    case EnergyOfferings.WIND:
      return <WindFields fields={fields as IWindEnergyOffering} />;
    case EnergyOfferings.GAS:
      return <GasFields fields={fields as IGasEnergyOffering} />;
    case EnergyOfferings.HYDRO:
      return <HydroFields fields={fields as IHydroEnergyOffering} />;
    case EnergyOfferings.KINETIC:
      return <KineticFields fields={fields as IKineticEnergyOffering} />;
    case EnergyOfferings.THERMAL:
      return <ThermalFields fields={fields as IThermalEnergyOffering} />;
    default:
      return <></>;
  }
}
