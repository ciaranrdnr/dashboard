"use client";
import { useState } from "react";

interface IClipIcon {
  size: number;
  isActive?: boolean;
  onClick?: (e?: any) => void;

  strokeClassName?: string;
  className?: string;
}
const ClipIcon = (props: IClipIcon) => {
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
          d="M14.6024 7.39562L8.94195 13.0561C8.77777 13.2146 8.64682 13.4043 8.55673 13.614C8.46664 13.8237 8.41922 14.0493 8.41724 14.2775C8.41526 14.5058 8.45875 14.7321 8.54518 14.9434C8.63161 15.1546 8.75924 15.3465 8.92064 15.5079C9.08203 15.6693 9.27396 15.797 9.48521 15.8834C9.69646 15.9698 9.92281 16.0133 10.151 16.0113C10.3793 16.0093 10.6048 15.9619 10.8146 15.8718C11.0243 15.7818 11.2139 15.6508 11.3725 15.4866L16.8851 9.82619C17.5114 9.1778 17.8579 8.30939 17.85 7.40799C17.8422 6.50659 17.4807 5.64433 16.8432 5.00693C16.2058 4.36952 15.3436 4.00796 14.4422 4.00013C13.5408 3.9923 12.6724 4.33881 12.024 4.96505L6.51052 10.6246C5.54335 11.5918 5 12.9036 5 14.2713C5 15.6391 5.54335 16.9509 6.51052 17.9181C7.47769 18.8852 8.78945 19.4286 10.1572 19.4286C11.525 19.4286 12.8368 18.8852 13.8039 17.9181L19.1816 12.5524"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

ClipIcon.displayName = "ClipIcon";

export default ClipIcon;
