import React, { useContext } from "react";
import { EnergyOfferings } from "@/app/lib/definitions";
import classNames from "classnames";
import { EnergyOfferingFormContext } from "../energy-offering-form";

type Props = {
  disabled?: boolean;
  icon: JSX.Element;
  energyOffering: EnergyOfferings;
};

export default function EnergyOfferingOption({
    disabled,
    icon,
    energyOffering,
}: Props) {
  const selectedStyle = "border-gray";
  const unselectedStyle = "border-transparent";
  const disabledStyle = "disabled:opacity-50 bg-gray-300 border-gray-400";

  const { currentEnergyOffering, setCurrentEnergyOffering } = useContext(EnergyOfferingFormContext)
  const selected = currentEnergyOffering === energyOffering
  const onClick = () => setCurrentEnergyOffering(energyOffering);

  return (
    <div
      className={classNames("p-2 border-4", {
        [disabledStyle]: disabled,
        [selectedStyle]: selected,
        [unselectedStyle]: !selected,

      })}
      onClick={disabled ? undefined : onClick}
    >
      {icon}
    </div>
  );
}
