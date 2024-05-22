import React, { ReactElement } from "react";
import {
  IGasEnergyOffering,
} from "../../../lib/definitions";
import CapacityField from "../fields/capacity-field";
import DeliveryMethodField from "../fields/delivery-method-field";
import FlexibilityOfSupplyField from "../fields/flexibility-of-supply-field";
import EmissionCreditsPenaltiesField from "../fields/emission-credits-penalties-field";
import ContractLengthField from "../fields/contract-length-field";

type Props = {
  fields?: IGasEnergyOffering
}

export default function GasFields({
  fields}: Props): ReactElement<any, any> {
  return (
    <>
      <CapacityField amount={fields?.capacity} />
      <DeliveryMethodField text={fields?.deliveryMethod} />
      <FlexibilityOfSupplyField amount={fields?.flexibilityOfSupply} />
      <EmissionCreditsPenaltiesField text={fields?.emissionCreditsOrPenalties} />
      <ContractLengthField text={fields?.contractLength} />
    </>
  );
}
