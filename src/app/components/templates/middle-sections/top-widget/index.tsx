import BalanceStatisticsSection from "@/app/components/organism/balance-statistics";
import Card from "@/app/components/organism/card";

const TopWidget = () => {
  return (
    <div className="flex lg:flex-row flex-col space-y-5 lg:space-x-5">
      <BalanceStatisticsSection />
      <Card />
    </div>
  );
};
export default TopWidget;
