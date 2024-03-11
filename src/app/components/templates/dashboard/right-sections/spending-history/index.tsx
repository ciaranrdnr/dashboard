"use client";
import Image from "next/image";
import ThreeDotsIcon from "@/app/assets/icons/three-dots";
import Button from "@/app/components/atom/button";
import ArrowIcon from "@/app/assets/icons/arrow";
import { useMemo, useState } from "react";

type TVariants = "entertainment" | "shopping" | "health" | "food";
interface ITDetail {
  name?: string;
  date?: string;
  variant: TVariants;
}
interface ISpendingHistoryProps {
  onTriggerAlert: (e?: any) => void;
}
const SpendingDetail = ({ name, date, variant }: ITDetail) => {
  const img = {
    entertainment: "/game.avif",
    shopping: "/shopping.avif",
    health: "/health.avif",
    food: "/food.jpeg",
  };
  return (
    <div className="flex justify-between cursor-default">
      <div className="flex space-x-4 items-center">
        <div className="w-12 h-12 flex-none rounded-full bg-blue-60 overflow-clip">
          <Image
            draggable={false}
            width={48}
            height={48}
            alt={name ?? ""}
            src={img[variant as TVariants] ?? ""}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold select-all line-clamp-2">
            {name ?? "Bessie Cooper"}
          </p>
          <p className="text-xs">{date ?? "02 Jan"}</p>
        </div>
      </div>
    </div>
  );
};

const SpendingHistory = (props: ISpendingHistoryProps) => {
  const [isViewAll, setIsViewAll] = useState(false);
  const datas = [
    {
      id: 0,
      name: "Online store",
      variant: "shopping",
    },
    {
      id: 2,
      name: "Medical checkup",
      variant: "health",
    },
    {
      id: 3,
      name: "Tickets",
      variant: "entertainment",
    },
    {
      id: 4,
      name: "Adidas shoes",
      variant: "shopping",
    },
    {
      id: 5,
      name: "Nasi padang with rendang",
      variant: "food",
    },
  ];
  const dataTrimmed = useMemo(() => {
    if (isViewAll) {
      return datas;
    }
    return datas.slice(0, 3);
  }, [isViewAll, datas]);
  return (
    <div className="flex flex-col items-center select-none space-y-4 p-4 rounded-xl sm:border bg-white w-full">
      <div className="flex justify-between w-full">
        <p className="font-semibold">Latest spendings</p>
        <ThreeDotsIcon
          onClick={props.onTriggerAlert}
          fillClassName="fill-black"
          size={16}
          className="cursor-pointer hover:bg-blue-20 w-6 h-6 rounded-full flex items-center justify-center"
        />
      </div>
      <div className="flex-col w-full flex space-y-4 ">
        {dataTrimmed.map((data) => {
          return (
            <div key={"spending" + data.id} className="flex flex-col space-y-4">
              <div className="w-full h-[1px] bg-grey-100/50" />
              <SpendingDetail {...data} variant={data.variant as TVariants} />
            </div>
          );
        })}
      </div>
      <Button
        variant="text"
        onClick={() => setIsViewAll(!isViewAll)}
        label={
          <div className="flex space-x-1">
            <p>{isViewAll ? "View less" : "View All"}</p>
            <ArrowIcon
              className="rotate-90"
              size={16}
              strokeClassName="stroke-bg-blue-80"
            />
          </div>
        }
      />
    </div>
  );
};
export default SpendingHistory;
