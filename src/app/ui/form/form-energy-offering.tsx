import React, { ReactElement, useState } from "react";
import Button from "../button";
import KineticIcon from "../icons/kinetic";
import SunIcon from "../icons/sun";
import WindIcon from "../icons/wind";
import ThermalIcon from "../icons/thermal";
import GasIcon from "../icons/gas";
import HydroIcon from "../icons/hydro";
import { EnergyOfferings } from "../../lib/definitions";
import EnergyOfferingOption from "./energy-offering-icon";

export default function FormEnergyOffering(): ReactElement<any, any> {
  const action = (data: any) => console.log("pelila", data.values().next());
  const [energyOffering, setEnergyOffering] = useState<EnergyOfferings>(
    EnergyOfferings.SOLAR
  );

  return (
    <form action={action}>
      <fieldset className="flex flex-col">
        <div className="flex flex-row justify-between">
          <EnergyOfferingOption
            selected={energyOffering === EnergyOfferings.KINETIC}
            onClick={() => {
              setEnergyOffering(EnergyOfferings.KINETIC);
            }}
            icon={<KineticIcon />}
          />
          <EnergyOfferingOption
            selected={energyOffering === EnergyOfferings.SOLAR}
            onClick={() => {
              setEnergyOffering(EnergyOfferings.SOLAR);
            }}
            icon={<SunIcon />}
          />
          <EnergyOfferingOption
            selected={energyOffering === EnergyOfferings.WIND}
            onClick={() => {
              setEnergyOffering(EnergyOfferings.WIND);
            }}
            icon={<WindIcon />}
          />
          <EnergyOfferingOption
            disabled={true}
            selected={energyOffering === EnergyOfferings.THERMAL}
            onClick={() => {
              setEnergyOffering(EnergyOfferings.THERMAL);
            }}
            icon={<ThermalIcon />}
          />
          <EnergyOfferingOption
            selected={energyOffering === EnergyOfferings.GAS}
            onClick={() => {
              setEnergyOffering(EnergyOfferings.GAS);
            }}
            icon={<GasIcon />}
          />
          <EnergyOfferingOption
            selected={energyOffering === EnergyOfferings.HYDRO}
            onClick={() => {
              setEnergyOffering(EnergyOfferings.HYDRO);
            }}
            icon={<HydroIcon />}
          />
        </div>
        peli: <input type="text" name="peli" />
        <Button type="submit">Submit</Button>
      </fieldset>
    </form>
  );
}
