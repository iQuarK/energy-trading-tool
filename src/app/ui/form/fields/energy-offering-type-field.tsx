import React, { ReactElement, useContext, useEffect, useState } from "react";
import EnergyOfferingOption from "./energy-offering-icon";
import { EnergyOfferings } from "@/app/lib/definitions";
import KineticIcon from "../../icons/kinetic-icon";
import SunIcon from "../../icons/sun-icon";
import WindIcon from "../../icons/wind-icon";
import ThermalIcon from "../../icons/thermal-icon";
import GasIcon from "../../icons/gas-icon";
import HydroIcon from "../../icons/hydro-icon";
import { EnergyOfferingFormContext } from "../energy-offering-form";

type Props = {};

export default function EnergyOfferingTypeField({}: Props): ReactElement<
  any,
  any
> {
  const { currentEnergyOffering, isEditing } = useContext(
    EnergyOfferingFormContext
  );

  return (
    <div className="flex flex-row justify-center gap-6">
      <input
        type="hidden"
        name="type"
        id="type"
        value={currentEnergyOffering ?? ""}
      />
      {[
        { energyOffering: EnergyOfferings.KINETIC, icon: <KineticIcon /> },
        { energyOffering: EnergyOfferings.SOLAR, icon: <SunIcon /> },
        { energyOffering: EnergyOfferings.WIND, icon: <WindIcon /> },
        { energyOffering: EnergyOfferings.THERMAL, icon: <ThermalIcon /> },
        { energyOffering: EnergyOfferings.GAS, icon: <GasIcon /> },
        { energyOffering: EnergyOfferings.HYDRO, icon: <HydroIcon /> },
      ].map(({ energyOffering, icon }) => (
        <EnergyOfferingOption
          key={energyOffering}
          energyOffering={energyOffering}
          icon={icon}
          disabled={isEditing}
        />
      ))}
    </div>
  );
}
