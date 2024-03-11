interface ICrossIcon {
  size: number;
  color: string;
  hoverColor: string;
activeColor?: string;
  className?: string;
}
const CrossIcon = (props: ICrossIcon) => {
  const [isHover, setIsHover] = useState(false);
  
  return (
  <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={props.onClick}
      className={props.className}
    >
      width={props.size}
      height={props.size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6.5L6 18.5"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 18.5L6 6.5"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    </div>
  );
};

CrossIcon.displayName = "CrossIcon";

export default CrossIcon;
