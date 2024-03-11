"use client";
import Image from "next/image";
import SortButton from "@/app/components/molecule/sort";
import ThreeDotsIcon from "@/app/assets/icons/three-dots";
import { useEffect, useState } from "react";
import { sortDataByDate } from "@/app/helper";

type TVariants = "debit" | "credit";
interface ITDetail {
  avatarSrc?: string;
  name?: string;
  date: string;
  value?: number;
  variant: TVariants;
  onTriggerAlert: (e?: any) => void;
}
interface ITransactionHistorySection {
  onTriggerAlert: (e?: any) => void;
}

const TransactionDetail = ({
  avatarSrc,
  date,
  name,
  value,
  variant,
  ...props
}: ITDetail) => {
  const dateConverted = new Date(date);
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);
  return (
    <div className="flex justify-between cursor-default">
      <div className="flex space-x-4 items-center">
        <div className="w-10 h-10 rounded-full bg-blue-60 overflow-clip">
          <Image
            draggable={false}
            className="hover:scale-150 transition-all scale-125"
            width={40}
            height={40}
            alt={name ?? "avatar"}
            src={avatarSrc ?? ""}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold select-all">
            {name ?? "Bessie Cooper"}
          </p>
          <p className="text-xs">
            {isRendered ? dateConverted?.toLocaleString() : "02 Jan"}
          </p>
        </div>
      </div>

      <div className="flex space-x-4 items-center justify-end">
        <p className="text-sm font-semibold text-right select-all">
          {variant == "credit" ? "-" : "+"}${value ?? 0}
        </p>
        <ThreeDotsIcon
          onClick={props.onTriggerAlert}
          fillClassName="fill-black"
          size={16}
          className="cursor-pointer hover:bg-blue-20 w-6 h-6 rounded-full flex items-center justify-center"
        />
      </div>
    </div>
  );
};

const TransactionHistory = (props: ITransactionHistorySection) => {
  const datas = [
    {
      id: 0,
      name: "Carol",
      date: "2024-03-10T20:24:50.729Z",
      value: 300,
      avatarSrc: "/avatar-6.png",
      variant: "debit",
    },
    {
      id: 2,
      name: "Ashley Hawkins",
      date: "2024-03-10T14:29:02.692Z",
      value: 100,
      avatarSrc: "/avatar-3.png",
      variant: "credit",
    },
    {
      id: 3,
      name: "Floyd Miles",
      date: "2024-03-10T08:58:46.726Z",
      value: 20,
      avatarSrc: "/avatar-4.png",
      variant: "credit",
    },
    {
      id: 4,
      name: "Braidley Cooper",
      date: "2024-03-10T09:44:45.926Z",
      value: 300,
      avatarSrc: "/avatar-11.png",
      variant: "debit",
    },
    {
      id: 5,
      name: "Will Smith",
      date: "2024-03-10T13:35:39.436Z",
      value: 1000,
      avatarSrc: "/avatar-7.png",
      variant: "debit",
    },
  ];
  const [sortBy, setSortBy] = useState<"asc" | "dsc">("asc");
  const [datasState, setDatasState] = useState(datas);

  useEffect(() => {
    setDatasState(sortDataByDate(datas, sortBy));
  }, [sortBy]);

  return (
    <div className="flex flex-col select-none space-y-5 p-5 rounded-xl bg-white w-full lg:w-8/12 ">
      <div className="flex justify-between">
        <p className="font-semibold">Last transactions</p>
        <SortButton sortBy={sortBy} onChange={(e) => setSortBy(e)} />
      </div>
      <div className="flex-col flex space-y-5 max-h-[180px] overflow-y-auto pr-[3px]">
        {datasState.map((data) => {
          return (
            <div
              key={"transaction-" + data.id}
              className="flex flex-col space-y-5"
            >
              <div className="w-full h-[1px] bg-grey-100/50" />
              <TransactionDetail
                onTriggerAlert={props.onTriggerAlert}
                {...data}
                variant={data.variant as TVariants}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TransactionHistory;
