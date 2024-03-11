"use client";
import ThreeDotsIcon from "@/app/assets/icons/three-dots";
import CircularGraph from "@/app/components/molecule/circular-graph";
import { useState } from "react";

const AnalyticsWidget = () => {
  const [selected, setSelected] = useState("done");
  return (
    <div className="flex flex-col select-none space-y-5 lg:space-y-0 lg:justify-between p-5 rounded-xl bg-white w-full lg:w-4/12 ">
      <div className="flex justify-between">
        <p className="font-semibold">Analytics</p>
        <ThreeDotsIcon
          fillClassName="fill-black"
          size={16}
          className="cursor-pointer hover:bg-blue-20 w-6 h-6 rounded-full flex items-center justify-center"
        />
      </div>
      <div className="flex items-center justify-center relative">
        <CircularGraph onChange={(val) => setSelected(val)} />
        <div className="absolute flex flex-col w-full font-semibold text-center items-center top-[50%] text-md">
          <p className="text-2xl font-bold">25%</p>
          <p className="capitalize text-black/60">{selected}</p>
        </div>
      </div>
      <div className="flex justify-evenly items-center">
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