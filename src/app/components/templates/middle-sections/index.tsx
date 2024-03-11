"use client";
import BalanceStatisticsSection from "@/app/components/organism/balance-statistics";
import Card from "@/app/components/organism/card";
import GreetingsSection from "./greetings";
import WishlistChat from "./wishlist-chat";
import TransactionHistory from "@/app/components/organism/transaction-history";
import AnalyticsWidget from "@/app/components/organism/analytics";
import ExpenseIncome from "../dashboard/right-sections/expense-income";
import SpendingHistory from "../dashboard/right-sections/spending-history";
import GoPremium from "../dashboard/right-sections/go-premium";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

interface IMiddleSectionsProps {
  onTriggerAlert: (e?: any) => void;
}
const MiddleSections = (props: IMiddleSectionsProps) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(isMobile);
  }, []);
  return (
    <div className="flex flex-col space-y-5 h-full px-4 pb-7 pt-6 w-screen md:w-6/12 lg:w-8/12 xl:w-full xl:px-20 lg:pt-[5vh]">
      <GreetingsSection />
      <div className="flex lg:flex-row flex-col space-y-5 lg:space-y-0 lg:space-x-5 items-center">
        <BalanceStatisticsSection onTriggerAlert={props.onTriggerAlert} />
        <Card />
      </div>
      <WishlistChat />
      <div className="flex lg:flex-row flex-col space-y-5 lg:space-y-0 lg:space-x-5 lg:pb-10">
        <TransactionHistory onTriggerAlert={props.onTriggerAlert} />
        <AnalyticsWidget onTriggerAlert={props.onTriggerAlert} />
      </div>
      {mobile && (
        <div className="flex flex-col space-y-5 pb-10">
          <ExpenseIncome />
          <SpendingHistory onTriggerAlert={props.onTriggerAlert} />
          <GoPremium />
        </div>
      )}
    </div>
  );
};
export default MiddleSections;
