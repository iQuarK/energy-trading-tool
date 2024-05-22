import React, { ReactElement, useEffect, useRef } from "react";

type Props = {
  children: JSX.Element;
  opened: boolean;
  onClose: () => void;
  title: string;
};

export default function Modal({
  children,
  opened,
  onClose,
  title,
}: Props): ReactElement<any, any> {
  const dialogRef = useRef(null);

  const openModal= () => {
    if (dialogRef.current && opened) {
      (dialogRef.current as HTMLDialogElement).showModal();
    }
  };

  const closeModal = () => {
    if (dialogRef.current) {
      (dialogRef.current as HTMLDialogElement).close();
      onClose();
    }
  };

  useEffect(() => {
    if (opened) {
      openModal();
    } else {
      closeModal();
    }
  }, [opened]);

  return (
    <dialog ref={dialogRef} className="min-w-96 p-6 w-2/6">
      <div className="flex justify-between mb-4 font-bold items-center">
        <h2>{title}</h2>
        <button className="border-2 rounded px-2" onClick={closeModal}>X</button>
      </div>
      {children}
    </dialog>
  );
}
