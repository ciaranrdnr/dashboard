"use client";
import { useState } from "react";

interface IChatIcon {
  size: number;
  isActive?: boolean;
  onClick?: (e?: any) => void;

  strokeClassName?: string;
  className?: string;
}
const ChatIcon = (props: IChatIcon) => {
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
          d="M15.1429 8.42857H18.5714C18.7988 8.42857 19.0168 8.51888 19.1775 8.67962C19.3383 8.84037 19.4286 9.05839 19.4286 9.28571V18.7143L16.5717 16.3409C16.4175 16.2129 16.2235 16.1429 16.0231 16.1429H9.14286C8.91553 16.1429 8.69751 16.0526 8.53677 15.8918C8.37602 15.7311 8.28571 15.513 8.28571 15.2857V12.7143M15.1429 8.42857V5.85714C15.1429 5.62981 15.0526 5.4118 14.8918 5.25105C14.7311 5.09031 14.513 5 14.2857 5H4.85714C4.62981 5 4.4118 5.09031 4.25105 5.25105C4.09031 5.4118 4 5.62981 4 5.85714V15.2857L6.85686 12.9114C7.01114 12.7846 7.20486 12.7143 7.40543 12.7143H8.28571M15.1429 8.42857V11.8571C15.1429 12.0845 15.0526 12.3025 14.8918 12.4632C14.7311 12.624 14.513 12.7143 14.2857 12.7143H8.28571"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

ChatIcon.displayName = "ChatIcon";

export default ChatIcon;
