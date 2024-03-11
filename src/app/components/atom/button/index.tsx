import React from "react";
import { defaultClass, sizeClass, variantClass } from "./style";

type TButtonVariants = "contained" | "outlined" | "text";
type TButtonSize = "default" | "big";
type TButtonType = "button" | "submit" | "reset";

interface IButton {
  label?: React.ReactNode;
  type?: TButtonType;
  size?: TButtonSize;
  isDisabled?: boolean;
  isCapitalize?: boolean;
  isFullWidth?: boolean;
  variant: TButtonVariants;
  ariaAttributes?: React.AriaAttributes;

  onClick?: (e?: any) => void;
  onBlur?: () => void;
  onFocus?: () => void;

  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Button = React.forwardRef(
  (
    {
      label,
      type,
      isDisabled,
      isCapitalize,
      isFullWidth,
      variant,
      size,
      ariaAttributes,
      onClick,
      onBlur,
      onFocus,
      className,
      id,
      style,
    }: IButton,
    ref: React.LegacyRef<HTMLButtonElement>
  ) => {
    const clasNameBtn = `${defaultClass} ${variantClass[variant]} ${
      sizeClass[size ?? "default"]
    } ${isCapitalize ? "capitalize" : ""}  ${isFullWidth ? "w-full" : ""} ${
      className ?? ""
    }`;
    return (
      <button
        disabled={isDisabled}
        ref={ref}
        style={style}
        className={clasNameBtn}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        id={id}
        type={type}
        {...ariaAttributes}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
