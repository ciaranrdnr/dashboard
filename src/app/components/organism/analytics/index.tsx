"use client";
import ThreeDotsIcon from "@/app/assets/icons/three-dots";
import CircularGraph from "@/app/components/molecule/circular-graph";
import { useState } from "react";

interface IAnalyticsWidget {
  onTriggerAlert: (e?: any) => void;
}
const AnalyticsWidget = (props: IAnalyticsWidget) => {
  const [selected, setSelected] = useState("done");
  return (
    <div className="flex flex-col flex-none select-none space-y-5 sm:space-y-0 sm:justify-between p-5 rounded-xl bg-white w-full lg:w-4/12 ">
      <div className="flex justify-between">
        <p className="font-semibold">Analytics</p>
        <ThreeDotsIcon
          onClick={props.onTriggerAlert}
          fillClassName="fill-black"
          size={16}
          className="cursor-pointer hover:bg-blue-20 w-6 h-6 rounded-full flex items-center justify-center"
        />
      </div>
      <div className="flex items-center justify-center relative flex-none px-4">
        <CircularGraph onChange={(val) => setSelected(val)} />
        <div className="absolute flex flex-col w-full font-semibold text-center items-center top-[50%] text-md">
          <p className="text-2xl font-bold">25%</p>
          <p className="capitalize text-black/60">{selected}</p>
        </div>
      </div>
      <div className="flex justify-evenly xl:items-center flex-col xl:flex-row text-xs xl:text-sm">
        <div className="flex space-x-1 items-center">
          <div className="w-2 h-2 bg-blue-80 rounded-full" />
          <p>Done</p>
        </div>
        <div className="flex space-x-1 items-center">
          <div className="w-2 h-2 bg-persimmon-80 rounded-full" />
          <p>Progress</p>
        </div>
        <div className="flex space-x-1 items-center">
          <div className="w-2 h-2 bg-persimmon-100 rounded-full" />
          <p>To do</p>
        </div>
      </div>
    </div>
  );
};
export default AnalyticsWidget;
