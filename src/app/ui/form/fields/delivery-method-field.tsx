import React, { ReactElement, useState } from "react";

type Props = {
  text?: string;
};

export default function DeliveryMethodField({
  text,
}: Props): ReactElement<any, any> {
  const [ currentDeliveryMethod, setCurrentDeliveryMethod ] = useState<string>(text ?? "");

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="deliveryMethod">Delivery Method</label>
      <input
        type="text"
        name="deliveryMethod"
        id="deliveryMethod"
        value={currentDeliveryMethod}
        onChange={ event => setCurrentDeliveryMethod(event.target.value)}
      />
    </div>
  );
}
