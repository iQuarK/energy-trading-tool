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

export interface ISolarEnergyOffering extends IEnergyOffering {
  capacity: string;
  location: string;
  energyOutputPredictions: string;
  timeOfAvailability: { from: string; to: string };
  certifications: string[];
}

export interface IGasEnergyOffering extends IEnergyOffering {
  capacity: string;
  deliveryMethod: string;
  flexibilityOfSupply: string;
  emissionCreditsOrPenalties: string;
  contractLength: string;
}

export interface IWindEnergyOffering extends IEnergyOffering {
  capacity: string;
  location: string;
  windSpeedPredictions: string;
  turbineEfficiency: string;
  timeOfAvailability: string;
  certifications: string[];
}

export interface IThermalEnergyOffering extends IEnergyOffering {
  capacity: string;
  heatSourceStabilty: string;
  temperatureGradient: string;
  conversionEfficiency: string;
  location: string;
  environmentalImpactAndRegulation: string[];
}

export interface IHydroEnergyOffering extends IEnergyOffering {
  capacity: string;
  waterFlowRate: number;
  reservoirLevel: string;
  regulatoryCompliance: string[];
  flexibilityOfSupply: string;
  energyStorage: string[];
}
export interface IKineticEnergyOffering extends IEnergyOffering {
  capacity: string;
  location: string;
  energyConversionEfficiency: string;
  predictabilityOfSource: string;
}

export type EnergyOffering =
  | ISolarEnergyOffering
  | IGasEnergyOffering
  | IThermalEnergyOffering
  | IWindEnergyOffering
  | IKineticEnergyOffering
  | IHydroEnergyOffering;
