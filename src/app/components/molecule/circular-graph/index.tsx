interface ICircularGraph {
  onChange: (e?: any) => void;
}
const CircularGraph = (props: ICircularGraph) => {
  return (
    <div>
      <svg
        width="226"
        height="120"
        viewBox="0 0 226 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 112.225C7 112.225 11.1857 7.03922 112.186 7.03922C215.742 7.03921 219 112.225 219 112.225"
          stroke="#F5F5FD"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M189.446 37.9898C189.446 37.9898 166.175 7.03924 112.186 7.03922"
          strokeWidth="14"
          strokeLinecap="round"
          className="cursor-pointer stroke-persimmon-100/60 hover:stroke-persimmon-100"
          onMouseEnter={() => props.onChange("to do")}
        />
        <path
          d="M37 37.0392C46 25.5 78 6.00957 112.185 7.03921"
          strokeWidth="14"
          strokeLinecap="round"
          className="cursor-pointer stroke-persimmon-80/60 hover:stroke-persimmon-80"
          onMouseEnter={() => props.onChange("progress")}
        />
        <path
          d="M7 112.225C7 112.225 9.0944 68.2423 37.0198 37.2917"
          strokeWidth="14"
          strokeLinecap="round"
          className="cursor-pointer stroke-blue-80/60 hover:stroke-blue-80"
          onMouseEnter={() => props.onChange("done")}
        />
      </svg>
    </div>
  );
};
export default CircularGraph;
