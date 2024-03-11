import ArrowIcon from "@/app/assets/icons/arrow";
import ChevronIcon from "@/app/assets/icons/chevron";
import Chart from "@/app/components/organism/chart";
import Image from "next/image";

interface IBalanceStatisticsSection {
  onTriggerAlert: (e?: any) => void;
}
const BalanceStatisticsSection = (props: IBalanceStatisticsSection) => {
  return (
    <div className="flex flex-col w-full xl:space-y-2 p-5 h-full rounded-xl bg-white lg:w-6/12 xl:w-6/12 2xl:w-7/12">
      <div className="flex justify-between items-center">
        <h3 className="pb-2 font-semibold">Balance statistics</h3>
        <div
          onClick={props.onTriggerAlert}
          className="flex space-x-2 py-0.5 pl-2 cursor-pointer rounded-lg text-sm font-semibold bg-grey-50 hover:bg-grey-100/50"
        >
          <p>Filter</p>
          <ChevronIcon
            size={24}
            strokeClassName="stroke-black"
            className="rotate-90"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <p className="text-2xl font-semibold">$564</p>
            <div className="flex space-x-1 items-center xl:hidden">
              <ArrowIcon
                size={12}
                strokeClassName="stroke-black"
                className="border-[1.5px] border-black rounded-full"
              />
              <p className="text-xs">6%</p>
            </div>
          </div>
          <div className="space-x-2 items-center hidden xl:flex">
            <div className="w-10 h-8 rounded-lg relative">
              <Image
                draggable={false}
                src={"/balance.avif"}
                fill
                alt="balance"
              />
            </div>
            <p className="text-xs">Your total balance</p>
          </div>
          <div className="w-full h-[1px] bg-grey-100" />
          <div className="flex-col space-y-2 ">
            <div className=" hidden xl:flex items-center space-x-2">
              <div className="w-20 h-8 rounded-lg relative">
                <Image
                  draggable={false}
                  src={"/bar-chart.jpeg"}
                  fill
                  alt="bar-chart"
                />
              </div>
              <div className="flex space-x-1 items-center">
                <ArrowIcon
                  size={12}
                  strokeClassName="stroke-black"
                  className="border-[1.5px] border-black rounded-full"
                />
                <p className="text-xs">6%</p>
              </div>
            </div>
            <p className="text-xs">Always see your earnings updates</p>
          </div>
        </div>
        <Chart />
      </div>
    </div>
  );
};
export default BalanceStatisticsSection;
