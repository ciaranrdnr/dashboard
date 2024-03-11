const ExpenseIncome = () => {
  return (
    <div className="flex flex-col p-4 sm:border rounded-lg space-y-4 bg-white">
      <h3 className="font-semibold">
        <p>Expenses and income</p>
      </h3>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-[10px] font-semibold">Expense</p>
          <p className="text-sm font-semibold">75%</p>
          <p className="text-xs">2150</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex-grow w-[1px] bg-black" />
          <p>vs</p>
          <div className="flex-grow w-[1px] bg-black" />
        </div>
        <div className="flex flex-col items-end text-right">
          <p className="text-xs font-semibold">Income</p>
          <p className="text-sm font-semibold">25%</p>
          <p className="text-[10px]">750</p>
        </div>
      </div>
      <div className="flex space-x-1 w-full">
        <div className="w-3/4 h-4 bg-blue-80 hover:bg-blue-100 rounded" />
        <div className="w-1/4 h-4 bg-persimmon-80/80 hover:bg-persimmon-80 rounded" />
      </div>
    </div>
  );
};
export default ExpenseIncome;
