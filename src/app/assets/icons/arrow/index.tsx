"use client";
import { useState } from "react";

interface IArrowIcon {
  size: number;
  isActive?: boolean;
  onClick?: (e?: any) => void;

  strokeClassName?: string;
  className?: string;
}
const ArrowIcon = (props: IArrowIcon) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={props.onClick}
      className={props.className}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 19V5M12 5L5 12M12 5L19 12"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

ArrowIcon.displayName = "ArrowIcon";

export default ArrowIcon;
