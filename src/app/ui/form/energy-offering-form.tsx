import React, {
  createContext,
  Dispatch,
  FormEvent,
  FormEventHandler,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Button from "../button";
import {
  baseFieldsAndLabels,
  EnergyOfferingFields,
  EnergyOfferings,
  labelsByEnergyOffering,
} from "../../lib/definitions";
import EnergyOfferingTypeField from "./fields/energy-offering-type-field";
import ProducerSpecificForm from "./producer-specific-fields/producer-specific-form";
import PriceField from "./fields/price-field";
import MinimumPurchaseQuantityField from "./fields/minimum-purchase-quantity-field";
import ContractTermsField from "./fields/contract-terms-field";
import PaymentTermsField from "./fields/payment-terms-field";
import { store } from "@/app/data/store";

type Props = {
  fields?: EnergyOfferingFields;
};

interface IEnergyOfferingContextInterface {
  currentEnergyOffering: EnergyOfferings | undefined;
  setCurrentEnergyOffering: Dispatch<
    SetStateAction<EnergyOfferings | undefined>
  >;
  isEditing: boolean;
}

const energyOfferingContextDefaultValue: IEnergyOfferingContextInterface = {
  currentEnergyOffering: undefined,
  setCurrentEnergyOffering: () => false,
  isEditing: false,
};

export const EnergyOfferingFormContext = createContext(
  energyOfferingContextDefaultValue
);

export default function EnergyOfferingForm({
  fields,
}: Props): ReactElement<any, any> {
  if (fields && !fields?.type) {
    return <>Loading form</>;
  }
  const [currentEnergyOffering, setCurrentEnergyOffering] = useState<
    EnergyOfferings | undefined
  >(fields?.type);

  useEffect(() => {
    setCurrentEnergyOffering(fields?.type);
  }, [fields]);

  const handler = (e: any) => {
    e.preventDefault();
    const baseKeys = Object.keys(baseFieldsAndLabels);
    const specificLabels = labelsByEnergyOffering[e.target.elements.type.value];

    const specificKeys = Object.keys(specificLabels);
    const elements = [...baseKeys, ...specificKeys].reduce((acc, key) => {
      return { ...acc, [key]: e.target.elements[key].value };
    }, {});
    store.upsert(elements as EnergyOfferingFields);
  };

  return (
    <EnergyOfferingFormContext.Provider
      value={{
        setCurrentEnergyOffering,
        currentEnergyOffering,
        isEditing: !!fields,
      }}
    >
      <form onSubmit={handler}>
        <fieldset className="flex flex-col gap-4">
          <EnergyOfferingTypeField />
          <PriceField price={fields?.price} />
          <MinimumPurchaseQuantityField
            amount={fields?.minimumPurchaseQuantity}
          />
          <ContractTermsField text={fields?.contractTerms} />
          <PaymentTermsField text={fields?.paymentTerms} />
          <ProducerSpecificForm fields={fields} />
          <Button type="submit">Submit</Button>
        </fieldset>
      </form>
    </EnergyOfferingFormContext.Provider>
  );
}
