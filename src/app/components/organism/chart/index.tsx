const Chart = () => {
  return (
    <div className="flex text-xs h-full space-x-2 font-semibold pt-4 w-full cursor-default">
      {/* left indicator */}
      <div className="flex flex-col justify-between h-full pb-4 w-1/5 items-end">
        <p>$60</p>
        <p>$40</p>
        <p>$20</p>
        <p>$0</p>
      </div>
      {/* bar */}
      <div className="flex flex-col space-y-2 w-1/5">
        <div className="flex items-end w-full h-full space-x-1 relative">
          <div className="w-1/2 h-full bg-blue-80/80 hover:bg-blue-100" />
          <div className="w-1/2 h-3/4 bg-blue-60/60 hover:bg-blue-60" />
        </div>
        <p>Dec</p>
      </div>
      <div className="flex flex-col space-y-2 w-1/5">
        <div className="flex items-end w-full h-full space-x-1 relative">
          <div className="w-1/2 h-3/6 bg-blue-80/80 hover:bg-blue-100" />
          <div className="w-1/2 h-2/6 bg-blue-60/60 hover:bg-blue-60" />
        </div>
        <p>Jan</p>
      </div>
      <div className="flex flex-col space-y-2 w-1/5">
        <div className="flex items-end w-full h-full space-x-1 relative">
          <div className="w-1/2 h-5/6 bg-blue-80/80 hover:bg-blue-100" />
          <div className="w-1/2 h-4/6 bg-blue-60/60 hover:bg-blue-60" />
        </div>
        <p>Feb</p>
      </div>
      <div className="flex flex-col space-y-2 w-1/5">
        <div className="flex items-end w-full h-full space-x-1 relative">
          <div className="w-1/2 h-full bg-blue-80/80 hover:bg-blue-100" />
          <div className="w-1/2 h-4/6 bg-blue-60/60 hover:bg-blue-60" />
        </div>
        <p>Mar</p>
      </div>
    </div>
  );
};
export default Chart;
