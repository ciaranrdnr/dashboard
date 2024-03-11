"use client";
import { useState } from "react";

interface IHomeIcon {
  size: number;
  isActive?: boolean;
  onClick?: (e?: any) => void;

  strokeClassName?: string;
  className?: string;
}
const HomeIcon = (props: IHomeIcon) => {
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
          d="M4 11.5076C4 10.2022 4 9.54948 4.30196 8.97559C4.60502 8.40171 5.17257 7.97778 6.30878 7.12801L7.41082 6.30419C9.46612 4.76903 10.491 4 11.7143 4C12.9376 4 13.9636 4.76806 16.0178 6.30323L17.1198 7.12705C18.2549 7.97682 18.8236 8.40075 19.1255 8.97463C19.4286 9.54852 19.4286 10.2012 19.4286 11.5066V15.5834C19.4286 17.3964 19.4286 18.3019 18.7828 18.8653C18.137 19.4286 17.0989 19.4286 15.0204 19.4286H8.40816C6.32971 19.4286 5.29159 19.4286 4.6458 18.8653C4 18.3019 4 17.3964 4 15.5834V11.5076Z"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
        />
        <path
          d="M14.4695 16.8572V14.6222C14.4695 14.3673 14.3534 14.1228 14.1467 13.9425C13.94 13.7622 13.6597 13.6609 13.3674 13.6609H10.0613C9.76902 13.6609 9.48871 13.7622 9.28204 13.9425C9.07537 14.1228 8.95926 14.3673 8.95926 14.6222V16.8572"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

HomeIcon.displayName = "HomeIcon";

export default HomeIcon;
