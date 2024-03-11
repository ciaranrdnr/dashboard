"use client";
import { useState } from "react";

interface ICheckboxIcon {
  size: number;
  color: string;
  checked?: boolean;
  className?: string;
  isDisabled?: boolean;
  hoverColor?: string;
  checkedColor?: string;
}
const CheckboxIcon = (props: ICheckboxIcon) => {
  const [isHover, setIsHover] = useState(false);
  const iconColor = `${isHover || props.checked ? props.hoverColor : ""}${
    !isHover && !props.checked ? props.color : ""
  }`;
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={props.className}
    >
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        {props.checked ? (
          <>
            <svg
              width={props.size}
              height={props.size}
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1"
                width={props.size - 1}
                height={props.size - 1}
                rx="3.5"
                fill={props.isDisabled ? "#EFEFEF" : iconColor}
                stroke={props.isDisabled ? "#ABAFB2" : iconColor}
                strokeLinejoin="round"
              />
              <path
                d="M4.5 8.5L7.5625 11.5625L11.9375 5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        ) : (
          <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 16 17"
            fill={props.isDisabled ? "#EFEFEF" : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="1"
              width={props.size - 1}
              height={props.size - 1}
              rx="3.5"
              stroke={props.isDisabled ? "#ABAFB2" : "#222222"}
              strokeLinejoin="round"
            />
            <path
              d="M4.5 8.5L7.5625 11.5625L11.9375 5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </svg>
    </div>
  );
};

CheckboxIcon.displayName = "CheckboxIcon";

export default CheckboxIcon;
