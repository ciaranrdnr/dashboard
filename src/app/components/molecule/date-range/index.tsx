import ChevronIcon from "@/app/assets/icons/chevron";
import DateAndTime from "@/app/components/atom/date-preview";

export interface IDateRangeProps {
  startDate?: Date;
  endDate: Date;
}

const DateRange = (props: IDateRangeProps) => {
  const date = new Date();

  const handleDate = (date: Date) => {
    const today = `${date.toDateString()}`;
    let todayDate = Array.from(today);
    todayDate.splice(3, 0, ",");
    todayDate.splice(8, 6, " ");
    return todayDate.join("");
  };
  const handleTime = (date: Date) => {
    const todayTime = `${date.getHours()}:${("0" + date.getMinutes()).slice(
      -2
    )}`;
    return todayTime;
  };

  const startDateConverted = handleDate(props.startDate ?? date);
  const startTimeConverted = handleTime(props.startDate ?? date);

  const endDateConverted = handleDate(props.endDate);
  const endTimeConverted = handleTime(props.endDate);

  return (
    <div className="flex items-center space-x-6">
      <DateAndTime date={startDateConverted} time={startTimeConverted} />
      <ChevronIcon size={24} strokeClassName="stroke-black" />
      <DateAndTime date={endDateConverted} time={endTimeConverted} />
    </div>
  );
};
export default DateRange;
