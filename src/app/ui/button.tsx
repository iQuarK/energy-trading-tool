import React, { ReactElement } from "react";
import classNames from "classnames";

type Props = {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

export default function Button({
  children,
  disabled,
  onClick,
  type,
}: Props): ReactElement<any, any> {
  return (
    <button
      className={classNames("p-4 border-2", {
        "disabled:opacity-50 bg-gray-300 border-gray-400": disabled,
        "border-gray-950": !disabled
      })}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={onClick}
      type={ type ? type : "button"}
    >
      {children}
    </button>
  );
}
