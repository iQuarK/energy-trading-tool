"use client";
import { useState } from "react";
import { EnergyOfferings, IEnergyOffering } from "../lib/definitions";
import Button from "../ui/button";
import CommoditiesList from "../ui/commodities-list";
import Modal from "../ui/modal";
import FormEnergyOffering from "../ui/form/form-energy-offering";

const commodities: IEnergyOffering[] = [
  {
    type: EnergyOfferings.SOLAR,
    price: 34.0,
    minimumPurchaseQuantity: 10,
    contractTerms: "contract terms blah blah blah",
    paymentTerms: "payment terms blahblah",
  }
];

export default function Seller() {
  const [openedModal, setOpenedModal] = useState(false);

  return (
    <main
      id="seller-page"
      className="min-h-screen p-4"
    >
      <Modal title="Create a new Energy Offering" opened={openedModal} onClose={() => setOpenedModal(false)}>
        <FormEnergyOffering />
      </Modal>
      <h1 className="font-bold text-lg mb-4">My Energy Offerings</h1>
      <CommoditiesList commodities={commodities} />
      <Button
        disabled={commodities.length === Object.keys(EnergyOfferings).length || openedModal}
        onClick={() => setOpenedModal(true)}
      >
        + Add a new Energy Offering
      </Button>

    </main>
  );
}
