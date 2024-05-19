import classNames from "classnames";

type Props = {
  disabled?: boolean;
  icon: JSX.Element;
  selected: boolean;
  onClick: () => void;
};

export default function EnergyOfferingOption({
    disabled,
    icon,
  selected,
  onClick,
}: Props) {
  const selectedStyle = "border-gray";
  const unselectedStyle = "border-transparent";
  const disabledStyle = "disabled:opacity-50 bg-gray-300 border-gray-400";

  return (
    <div
      className={classNames("p-2 border-2", {
        [disabledStyle]: disabled,
        [selectedStyle]: selected,
        [unselectedStyle]: !selected,

      })}
      onClick={disabled ? undefined : onClick}
    >
      {icon}
    </div>
  );
}
