"use client";
import { useState } from "react";

interface IWalletIcon {
  size: number;
  isActive?: boolean;
  onClick?: (e?: any) => void;

  strokeClassName?: string;
  className?: string;
}
const WalletIcon = (props: IWalletIcon) => {
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
          d="M4 7.14286C4 6.57454 4.22576 6.02949 4.62763 5.62763C5.02949 5.22576 5.57454 5 6.14286 5H17.9594C18.1309 5 18.2157 5 18.2851 5.024C18.3458 5.04537 18.4009 5.08012 18.4463 5.12567C18.4917 5.17122 18.5263 5.22641 18.5474 5.28714C18.5714 5.35571 18.5714 5.44143 18.5714 5.61286C18.5714 6.638 18.5714 7.15143 18.4274 7.56371C18.2997 7.92823 18.0916 8.2593 17.8184 8.53234C17.5452 8.80537 17.214 9.01336 16.8494 9.14086C16.4371 9.28571 15.9229 9.28571 14.8977 9.28571H14.2857M4 7.14286C4 7.71118 4.22576 8.25622 4.62763 8.65809C5.02949 9.05995 5.57454 9.28571 6.14286 9.28571H17.7143C18.5226 9.28571 18.9263 9.28571 19.1774 9.53686C19.4286 9.788 19.4286 10.1917 19.4286 11V12.7143M4 7.14286V16.1429C4 17.7594 4 18.5669 4.50229 19.0691C5.00457 19.5714 5.812 19.5714 7.42857 19.5714H17.7143C18.5226 19.5714 18.9263 19.5714 19.1774 19.3203C19.4286 19.0691 19.4286 18.6654 19.4286 17.8571V16.1429M19.4286 12.7143H17.2857C16.4774 12.7143 16.0737 12.7143 15.8226 12.9654C15.5714 13.2166 15.5714 13.6203 15.5714 14.4286C15.5714 15.2369 15.5714 15.6406 15.8226 15.8917C16.0737 16.1429 16.4774 16.1429 17.2857 16.1429H19.4286M19.4286 12.7143V16.1429"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
        />
      </svg>
    </div>
  );
};

WalletIcon.displayName = "WalletIcon";

export default WalletIcon;
