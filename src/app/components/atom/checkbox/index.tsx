"use client";
import CheckboxIcon from "@/app/assets/icons/checkbox";

interface ICheckbox {
  label?: String;
  isDisabled?: boolean;
  isChecked?: boolean;
  ariaAttributes?: React.AriaAttributes;

  onClick?: (e?: any) => void;
  onType?: (e?: any) => void;

  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Checkbox = ({
  label,
  isDisabled,
  isChecked,
  onType,
  ...props
}: ICheckbox) => {
  const defaultClass = `
    flex space-x-1 cursor-pointer items-center outline-none w-full
    disabled:cursor-default`;
  const cbClassName = `${defaultClass} ${props.className ?? ""}`;

  return (
    <label className={cbClassName}>
      <div className="">
        <input
          type="checkbox"
          disabled={isDisabled}
          onChange={props.onClick}
          className="hidden"
          checked={isChecked}
        />
        <CheckboxIcon
          color={"#4656E3"}
          hoverColor={"#4656E3"}
          checkedColor={"#4656E3"}
          size={16}
          isDisabled={isDisabled}
          checked={isChecked}
        />
      </div>
      <input
        type="text"
        placeholder="item"
        className={`select-all px-1 ${isDisabled ? "text-grey-100" : ""} ${
          label ? "" : "bg-blue-40/50"
        } w-full bg-transparent outline-none`}
        onChange={onType}
        value={label?.toString()}
      ></input>
    </label>
  );
};

export default Checkbox;
