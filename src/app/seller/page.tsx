"use client";
import { useState, useEffect } from "react";
import {
  EnergyOfferingFields,
  EnergyOfferings,
} from "../lib/definitions";
import Button from "../ui/button";
import CommoditiesList from "../ui/commodities-list";
import Modal from "../ui/modal";
import { store } from "../data/store";
import EnergyOfferingForm from "../ui/form/energy-offering-form";

type ModalStatus = {
  opened: boolean;
  data?: EnergyOfferingFields;
};

export default function Seller() {
  const [modalStatus, setModalStatus] = useState<ModalStatus>({
    opened: false,
  });
  const [commodities, setCommodities] = useState<EnergyOfferingFields[]>([]);

  useEffect(() => {
    store.subscribe(setCommodities);
  }, []);

  return (
    <>
      <Modal
        title="Create/Edit a new Energy Offering"
        opened={modalStatus.opened}
        onClose={() => setModalStatus({ opened: false })}
      >
        <EnergyOfferingForm fields={modalStatus.data} />
      </Modal>
      <main id="seller-page" className="min-h-screen p-4">
        <h1 className="font-bold text-lg mb-4">My Energy Offerings</h1>
        <CommoditiesList
          commodities={commodities}
          onEdit={(item: EnergyOfferingFields) => {
            setModalStatus({ opened: true, data: item });
          }}
        />
        <Button
          disabled={
            commodities.length === Object.keys(EnergyOfferings).length ||
            modalStatus.opened
          }
          onClick={() => setModalStatus({ opened: true })}
        >
          + Add a new Energy Offering
        </Button>
      </main>
    </>
  );
}
