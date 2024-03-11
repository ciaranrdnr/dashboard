"use client";
import { useState } from "react";

interface IEmojiIcon {
  size: number;
  isActive?: boolean;
  onClick?: (e?: any) => void;

  strokeClassName?: string;
  className?: string;
}
const EmojiIcon = (props: IEmojiIcon) => {
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
          d="M9.14286 10H9.15143M14.2857 10H14.2943M4 11.7143C4 12.7273 4.19954 13.7305 4.58721 14.6664C4.97489 15.6024 5.54312 16.4528 6.25946 17.1691C6.9758 17.8854 7.82622 18.4537 8.76216 18.8414C9.6981 19.229 10.7012 19.4286 11.7143 19.4286C12.7273 19.4286 13.7305 19.229 14.6664 18.8414C15.6024 18.4537 16.4528 17.8854 17.1691 17.1691C17.8854 16.4528 18.4537 15.6024 18.8414 14.6664C19.229 13.7305 19.4286 12.7273 19.4286 11.7143C19.4286 10.7012 19.229 9.6981 18.8414 8.76216C18.4537 7.82622 17.8854 6.9758 17.1691 6.25946C16.4528 5.54312 15.6024 4.97489 14.6664 4.58722C13.7305 4.19954 12.7273 4 11.7143 4C10.7012 4 9.6981 4.19954 8.76216 4.58722C7.82622 4.97489 6.9758 5.54312 6.25946 6.25946C5.54312 6.9758 4.97489 7.82622 4.58721 8.76216C4.19954 9.6981 4 10.7012 4 11.7143Z"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.57153 14.2857C9.85086 14.5708 10.1843 14.7973 10.5522 14.9519C10.9202 15.1065 11.3153 15.1862 11.7144 15.1862C12.1135 15.1862 12.5086 15.1065 12.8766 14.9519C13.2445 14.7973 13.5779 14.5708 13.8572 14.2857"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

EmojiIcon.displayName = "EmojiIcon";

export default EmojiIcon;
