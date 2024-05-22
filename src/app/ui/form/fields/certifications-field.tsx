import { ReactElement, useState } from "react";

type Props = {
  certifications?: string;
};

export default function CertificationsField({
  certifications,
}: Props): ReactElement<any, any> {
  const [currentCertifications, setCurrentCertifications] =
    useState<string>(certifications ?? "");

  return (
    <div className="flex flex-row justify-center gap-6">
      <label htmlFor="certifications">Certifications</label>
      <input
        type="text"
        name="certifications"
        id="certifications"
        value={currentCertifications}
        onChange={(event) => setCurrentCertifications(event.target.value)}
      />
    </div>
  );
}
