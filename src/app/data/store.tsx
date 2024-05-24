import { BehaviorSubject } from "rxjs";
import { EnergyOfferingFields } from "../lib/definitions";
import { Dispatch, SetStateAction } from "react";

export const subject$ = new BehaviorSubject<EnergyOfferingFields[]>([]);
const initialState: EnergyOfferingFields[] = [];
let state: EnergyOfferingFields[] = [];

// Here the store is encapsulated to get all the functionalities we need
// sucha as init with the data coming from the JSON file, upsert operation, etc.
export const store = {
  init: (data: EnergyOfferingFields[]) => {
    state = data ?? initialState;
    subject$.next(state);
  },
  subscribe: (setState: Dispatch<SetStateAction<EnergyOfferingFields[]>>) =>
    subject$.subscribe(setState),

  upsert: (energyOffering: EnergyOfferingFields) => {
    const index = state.findIndex((item) => item.type === energyOffering.type);

    if (index < 0) {
      // insert
      state = [...state, energyOffering];
    } else {
      // update
      state = [
        ...state.slice(0, index),
        energyOffering,
        ...state.slice(index + 1, state.length),
      ];
    }
    subject$.next(state);
  },
};

fetch("/sample-energies.json")
  .then((res) => res.json())
  .then((data) => store.init(data));
