"use client";
import { useState } from "react";

interface IPeopleIcon {
  size: number;
  isActive?: boolean;
  onClick?: (e?: any) => void;

  strokeClassName?: string;
  className?: string;
}
const PeopleIcon = (props: IPeopleIcon) => {
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
          d="M4.65577 7.375C4.79311 9.28141 6.20733 10.5 7.74952 10.5C9.29171 10.5 10.7083 9.28188 10.8433 7.375C10.9839 5.39172 9.60718 4 7.74952 4C5.89186 4 4.51514 5.42781 4.65577 7.375Z"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.74945 13.75C10.8043 13.75 12.742 15.2673 13.4779 18.2223C13.5754 18.6133 13.3302 19 12.9285 19H2.56992C2.1682 19 1.92445 18.6133 2.02055 18.2223C2.75649 15.22 4.69414 13.75 7.74945 13.75Z"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
          strokeMiterlimit="10"
        />
        <path
          d="M14.1246 8.21594C14.2342 9.73844 15.2676 10.5 16.4995 10.5C17.7314 10.5 18.9855 9.73891 19.0933 8.21594C19.2053 6.63203 18.093 5.5 16.6089 5.5C15.1249 5.5 14.0125 6.66109 14.1246 8.21594Z"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.8433 13.8438C14.6894 13.4561 15.6213 13.307 16.6089 13.307C19.0464 13.307 20.3949 14.5188 20.9831 16.8789C21.0605 17.1911 20.8645 17.5 20.5439 17.5H15.2808"
          className={props.strokeClassName}
          strokeWidth={isHover && !props.isActive ? "2" : "1.5"}
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

PeopleIcon.displayName = "PeopleIcon";

export default PeopleIcon;
