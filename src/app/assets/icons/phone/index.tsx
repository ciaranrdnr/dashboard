interface IPhoneIcon {
  size: number;
}
const PhoneIcon = (props: IPhoneIcon) => {
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
      viewBox="0 0 19 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_83547)">
        <path
          d="M2.68888 7.85321C2.55127 7.16514 2.41365 6.61468 2.41365 5.9266C2.27604 5.10092 2.8265 4.41284 3.65219 4.41284H3.7898H5.99163C6.67971 4.41284 7.36778 4.9633 7.36778 5.65137C7.5054 6.33945 7.64301 7.02752 7.91824 7.71559C8.05586 8.12844 7.91824 8.6789 7.5054 9.09174L6.67971 10.055C7.64301 11.844 9.15677 13.3578 10.9458 14.3211L11.9091 13.3578C12.3219 12.945 12.8724 12.8073 13.4228 13.0826C14.1109 13.3578 14.799 13.4954 15.487 13.633C16.1751 13.7706 16.7256 14.3211 16.7256 15.1468V17.3486C16.7256 17.4862 16.7256 17.6239 16.588 17.7615C16.4504 18.3119 15.8999 18.7248 15.2118 18.7248H15.0742C12.8724 18.4495 10.8081 17.6239 8.88154 16.5229C8.4687 16.1101 7.91824 15.8349 7.5054 15.5596C6.40448 14.5963 5.44118 13.4954 4.61549 12.1193C4.20264 11.7064 3.92741 11.156 3.65219 10.6055"
          stroke="white"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5884 17.7615C16.4508 18.312 15.9004 18.7248 15.2123 18.7248H15.0747C12.8728 18.4496 10.8086 17.6239 8.88201 16.523C8.46916 16.1101 7.9187 15.8349 7.50586 15.5597C8.05632 15.4221 8.46916 15.4221 8.88201 15.5597C9.84531 15.8349 10.8086 16.1101 11.3591 15.9725C12.5976 15.8349 13.4233 14.734 15.2123 15.6973C15.9004 16.1101 16.4508 16.7982 16.5884 17.7615Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_83547">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(2 4)"
          />
        </clipPath>
      </defs>
    </svg>
    </div>
  );
};

PhoneIcon.displayName = "PhoneIcon";

export default PhoneIcon;
