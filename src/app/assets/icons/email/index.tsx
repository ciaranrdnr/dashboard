interface IEmailIcon {
  size: number;
}
const EmailIcon = (props: IEmailIcon) => {
  const [isHover, setIsHover] = useState(false);
  
  return (
  <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={props.onClick}
      className={props.className}
    >
      className="flex-none z-10"
      width={props.size}
      height={props.size}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_83556)">
        <path
          opacity="0.3"
          fill-rule="evenodd"
          clipRule="evenodd"
          d="M15.625 12.5V14.0484C15.625 15.0806 14.875 15.9838 13.75 16.1129C13.75 16.1129 4 16.1129 3.875 16.1129C3.125 15.8548 2.625 15.3387 2.375 14.5645C3.5 13.5322 3.875 12.629 5.875 12.629C7.5 12.5 7.875 13.5322 9.5 13.4032C11.125 13.2742 12 10.8225 14.625 11.8548C15 11.9838 15.375 12.2419 15.625 12.5Z"
          fill="white"
        />
        <path
          d="M5.125 16.1129C4.375 16.1129 4 16.1129 4 16.1129C3.125 15.8548 2.625 15.3387 2.375 14.5645C2.375 14.4355 2.25 14.1774 2.25 14.0484V6.9516C2.25 5.79031 3.125 4.88709 4.25 4.75806H13.5C14.625 4.75806 15.625 5.66128 15.625 6.9516V13.9193C15.625 14.9516 14.875 15.8548 13.75 15.9839C13.75 15.9839 10.125 15.9839 8.5 15.9839"
          stroke="white"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.375 6.95166L9.125 11.0807L15.625 7.08069"
          stroke="white"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_83556">
          <rect
            width="14"
            height="12"
            fill="white"
            transform="translate(2 4.5)"
          />
        </clipPath>
      </defs>
    </svg>
    </div>
  );
};

EmailIcon.displayName = "EmailIcon";

export default EmailIcon;
