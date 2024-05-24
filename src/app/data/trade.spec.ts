import { describe, expect, test } from "@jest/globals";
import { trade } from "./trade";
import {
  EnergyOfferingFields,
  ISolarEnergyOffering,
  IWindEnergyOffering,
} from "../lib/definitions";
import { Dispatch, SetStateAction } from "react";

const sampleDataWind = {
  type: "wind",
  price: 12.0,
  minimumPurchaseQuantity: 5,
  contractTerms: "contract terms WIND blah blah blah",
  paymentTerms: "payment terms WIND blahblah",
  capacity: 50,
  location: "Bristol, UK",
  windSpeedPredictions: "Wind Speed Predictions",
  turbineEfficiency: 3,
  timeOfAvailability: { sunset: "11 am", sunshine: "9pm" },
  certifications: "Some certifications",
};
const sampleDataSolar = {
  type: "solar",
  price: 34.0,
  minimumPurchaseQuantity: 10,
  contractTerms: "contract terms blah blah blah",
  paymentTerms: "payment terms blahblah",
  capacity: 22,
  location: "London, UK",
  energyOutputPredictions: "It is going to rain",
  timeOfAvailability: {
    sunset: "8am",
    sunshine: "7pm",
  },
  certifications: "AENOR, UNE...",
};
describe("Store", () => {
  test("should upsert insert data", () => {
    let dataSubscribed: EnergyOfferingFields[] = [];
    const setData = (data: EnergyOfferingFields[]) => {
      dataSubscribed = data;
    };
    trade.subscribe(
      setData as Dispatch<SetStateAction<EnergyOfferingFields[]>>
    );
    trade.init();
    trade.upsert(sampleDataWind as IWindEnergyOffering);
    trade.upsert(sampleDataSolar as ISolarEnergyOffering);
    expect(dataSubscribed).toEqual([sampleDataWind, sampleDataSolar]);
  });

  test("should upsert update data", () => {
    let dataSubscribed: EnergyOfferingFields[] = [];
    const setData = (data: EnergyOfferingFields[]) => {
      dataSubscribed = data;
    };
    trade.subscribe(
      setData as Dispatch<SetStateAction<EnergyOfferingFields[]>>
    );
    const modifiedSampleDataSolar = { ...sampleDataSolar, price: 68.1 };

    trade.upsert(modifiedSampleDataSolar as ISolarEnergyOffering);
    expect(dataSubscribed).toEqual([sampleDataWind, modifiedSampleDataSolar]);
  });
});
