import BalanceStatisticsSection from "@/app/components/organism/balance-statistics";
import Card from "@/app/components/organism/card";

interface ITopWidgetProps {
  onTriggerAlert: (e?: any) => void;
}
const TopWidget = ({ onTriggerAlert }: ITopWidgetProps) => {
  return (
    <div className="flex lg:flex-row flex-col space-y-5 lg:space-x-5">
      <BalanceStatisticsSection onTriggerAlert={onTriggerAlert} />
      <Card />
    </div>
  );
};
export default TopWidget;
