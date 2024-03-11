"use client";
import { useState } from "react";

interface IChevronIcon {
  size: number;
  isActive?: boolean;
  onClick?: (e?: any) => void;

  strokeClassName?: string;
  className?: string;
}
const ChevronIcon = (props: IChevronIcon) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={props.onClick}
      className={props.className}
    >
      <svg
        width={props.size}
        height={props.size}
        viewBox={`0 0 24 24`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.2856 6.85715L15.4285 12L10.2856 17.1429"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

ChevronIcon.displayName = "ChevronIcon";

export default ChevronIcon;
