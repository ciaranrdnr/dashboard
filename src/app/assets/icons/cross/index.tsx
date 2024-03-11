interface ICrossIcon {
  size: number;
  colorClass?: string;
  className?: string;
  onClick?: (e: any) => void;
}
const CrossIcon = (props: ICrossIcon) => {
  return (
    <div onClick={props.onClick} className={props.className}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={props.colorClass}
          d="M18 6.5L6 18.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={props.colorClass}
          d="M18 18.5L6 6.5"
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
