import Button from "@/app/components/atom/button";
import CheckboxGroup, {
  ICheckboxGroupProps,
} from "@/app/components/molecule/checkbox-group";
import DateRange, {
  IDateRangeProps,
} from "@/app/components/molecule/date-range";
interface IWidgetlist {
  dateRange: IDateRangeProps;
  checkbox: ICheckboxGroupProps;
  className?: string;
}
const WidgetWishlist = (props: IWidgetlist) => {
  return (
    <div className={`flex flex-col p-5 ${props.className ?? ""}`}>
      <h3 className="pb-2 font-semibold">List of items to buy</h3>
      <div className="flex space-y-6 flex-col">
        <DateRange {...props.dateRange} />
        <CheckboxGroup {...props.checkbox} />
      </div>
    </div>
  );
};
export default WidgetWishlist;
