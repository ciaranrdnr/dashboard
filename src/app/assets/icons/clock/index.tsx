"use client";
import { useState } from "react";

interface IClockIcon {
  size: number;
  isActive?: boolean;
  onClick?: (e?: any) => void;

  strokeClassName?: string;
  className?: string;
}
const ClockIcon = (props: IClockIcon) => {
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
          d="M11.2857 7.42857V11.7143H7M11.2857 19.4286C12.2988 19.4286 13.3019 19.229 14.2378 18.8414C15.1738 18.4537 16.0242 17.8854 16.7405 17.1691C17.4569 16.4528 18.0251 15.6024 18.4128 14.6664C18.8005 13.7305 19 12.7273 19 11.7143C19 10.7012 18.8005 9.6981 18.4128 8.76216C18.0251 7.82622 17.4569 6.9758 16.7405 6.25946C16.0242 5.54312 15.1738 4.97489 14.2378 4.58721C13.3019 4.19954 12.2988 4 11.2857 4C9.23976 4 7.2776 4.81275 5.83089 6.25946C4.38418 7.70617 3.57143 9.66833 3.57143 11.7143C3.57143 13.7602 4.38418 15.7224 5.83089 17.1691C7.2776 18.6158 9.23976 19.4286 11.2857 19.4286Z"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

ClockIcon.displayName = "ClockIcon";

export default ClockIcon;
