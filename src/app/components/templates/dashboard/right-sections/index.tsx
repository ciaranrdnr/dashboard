import ExpenseIncome from "./expense-income";
import GoPremium from "./go-premium";
import SpendingHistory from "./spending-history";
interface IRightSections {
  onTriggerAlert: (e?: any) => any;
}
const RightSections = ({ onTriggerAlert }: IRightSections) => {
  return (
    <div className="h-screen lg:w-[25vw] sticky top-0 right-0 bg-white hidden sm:flex overflow-y-auto flex-col sm:p-6 sm:space-y-6">
      <ExpenseIncome />
      <SpendingHistory onTriggerAlert={onTriggerAlert} />
      <GoPremium />
    </div>
  );
};
export default RightSections;
