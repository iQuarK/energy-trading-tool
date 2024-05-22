export enum EnergyOfferings {
  SOLAR = "solar",
  GAS = "gas",
  WIND = "wind",
  HYDRO = "hydro",
  KINETIC = "kinetic",
  THERMAL = "thermal",
}

export interface IEnergyOffering {
  type: EnergyOfferings;
  price: number;
  minimumPurchaseQuantity: number;
  contractTerms: string;
  paymentTerms: string;
}

export type TimeOfAvailability = { sunset: string; sunshine: string };

export interface ISolarEnergyOffering extends IEnergyOffering {
  capacity: number;
  location: string;
  energyOutputPredictions: string;
  timeOfAvailability: TimeOfAvailability;
  certifications: string;
}

export interface IGasEnergyOffering extends IEnergyOffering {
  capacity: number;
  deliveryMethod: string;
  flexibilityOfSupply: number;
  emissionCreditsOrPenalties: string;
  contractLength: string;
}

export interface IWindEnergyOffering extends IEnergyOffering {
  capacity: number;
  location: string;
  windSpeedPredictions: string;
  turbineEfficiency: number;
  timeOfAvailability: TimeOfAvailability;
  certifications: string;
}

export interface IThermalEnergyOffering extends IEnergyOffering {
  capacity: number;
  heatSourceStabilty: string;
  temperatureGradient: number;
  conversionEfficiency: number;
  location: string;
  environmentalImpactAndRegulation: string;
}

export type ReservoirLevel = { current: string; historical: string };

export interface IHydroEnergyOffering extends IEnergyOffering {
  capacity: number;
  waterFlowRate: number;
  reservoirLevel: ReservoirLevel;
  regulatoryCompliance: string;
  flexibilityOfSupply: number;
  energyStorage: number;
}

export interface IKineticEnergyOffering extends IEnergyOffering {
  capacity: number;
  location: string;
  conversionEfficiency: number;
  predictabilityOfSource: string;
}

export type EnergyOfferingFields =
  | ISolarEnergyOffering
  | IGasEnergyOffering
  | IThermalEnergyOffering
  | IWindEnergyOffering
  | IKineticEnergyOffering
  | IHydroEnergyOffering;

export const baseFieldsAndLabels: { [key: string]: any } = {
  type: "Type of Energy",
  price: "Price",
  minimumPurchaseQuantity: "Minimum Purchase Quantity",
  contractTerms: "Contract Terms",
  paymentTerms: "Payment Terms",
};

export const solarFieldsAndLabels: { [key: string]: any } = {
  capacity: "Capacity",
  location: "Location",
  energyOutputPredictions: "Energy Output Prediciton",
  timeOfAvailability: "Time of Availability",
  certifications: "Certifications",
};

export const gasFieldsAndLabels: { [key: string]: any } = {
  capacity: "Capacity",
  deliveryMethod: "Delivery Method",
  flexibilityOfSupply: "Flexibility of Supply",
  emissionCreditsOrPenalties: "Emission Credit of Penalties",
  contractLength: "Contract Length",
};

export const windFieldsAndLabels: { [key: string]: any } = {
  capacity: "Capacity",
  location: "Location",
  windSpeedPredictions: "Wind Speed Predictions",
  turbineEfficiency: "Turbine Efficiency",
  timeOfAvailability: "Time of Availability",
  certifications: "Certifications",
};

export const thermalFieldsAndLabels: { [key: string]: any } = {
  capacity: "Capacity",
  location: "Location",
  heatSourceStabilty: "Heat Source Stability",
  temperatureGradient: "Temperature Gradient",
  conversionEfficiency: "Conversion Efficiency",
  environmentalImpactAndRegulation: "Environmental Impact and Regulation",
};

export const kineticFieldsAndLabels: { [key: string]: any } = {
  capacity: "Capacity",
  location: "Location",
  conversionEfficiency: "Conversion Efficiency",
  predictabilityOfSource: "Predictability of Source",
};

export const hydroFieldsAndLabels: { [key: string]: any } = {
  capacity: "Capacity",
  waterFlowRate: "Water Flow Rate",
  reservoirLevel: "Reservoir Level",
  regulatoryCompliance: "Regulatory Compliance",
  flexibilityOfSupply: "Flexibility of Supply",
  energyStorage: "Energy Storage",
};

export const labelsByEnergyOffering = {
  [EnergyOfferings.SOLAR as string]: solarFieldsAndLabels,
  [EnergyOfferings.GAS as string]: gasFieldsAndLabels,
  [EnergyOfferings.THERMAL as string]: thermalFieldsAndLabels,
  [EnergyOfferings.WIND as string]: windFieldsAndLabels,
  [EnergyOfferings.KINETIC as string]: kineticFieldsAndLabels,
  [EnergyOfferings.HYDRO as string]: hydroFieldsAndLabels,
};
