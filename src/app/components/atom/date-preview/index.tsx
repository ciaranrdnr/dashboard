interface IDateAndTimeProps {
  time: string;
  date: string;
}
const DateAndTime = ({ date, time }: IDateAndTimeProps) => {
  return (
    <div className="flex flex-col space-y-0.5 text-black cursor-pointer">
      <p className="font-semibold text-[22px]">{time}</p>
      <p className="text-xs">{date}</p>
    </div>
  );
};
export default DateAndTime;
