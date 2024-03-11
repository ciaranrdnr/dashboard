"use client";

import { useState } from "react";

interface IExitIcon {
  size: number;
  isActive?: boolean;
  onClick?: (e?: any) => void;

  strokeClassName?: string;
  className?: string;
}
const ExitIcon = (props: IExitIcon) => {
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
        viewBox={`0 0 ${props.size} ${props.size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6429 4H7C5.89543 4 5 4.89543 5 6V17.5C5 18.0115 5.20319 18.502 5.56487 18.8637C5.92654 19.2254 6.41708 19.4286 6.92857 19.4286H14.6429M15.6071 14.6071L18.5 11.7143M18.5 11.7143L15.6071 8.82143M18.5 11.7143H8.85714"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

ExitIcon.displayName = "ExitIcon";

export default ExitIcon;
