"use client";
import { useState } from "react";
import Navbar from "./components/templates/dashboard/navbar";
import ExpenseIncome from "./components/templates/dashboard/right-sections/expense-income";
import GoPremium from "./components/templates/dashboard/right-sections/go-premium";
import SpendingHistory from "./components/templates/dashboard/right-sections/spending-history";
import MiddleSections from "./components/templates/middle-sections";
import PopUpAlert from "./components/molecule/alert";
export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const handleAlert = () => setShowAlert(!showAlert);
  return (
    <main className="relative text-black">
      <div className="flex sm:flex-row flex-col justify-stretch h-screen items-center bg-blue-20 relative overflow-x-clip overflow-y-auto">
        <Navbar />
        <MiddleSections onTriggerAlert={handleAlert} />
        <div className="h-screen lg:w-[25vw] sticky top-0 right-0 bg-white hidden sm:flex ">
          <div className="max-h-screen overflow-y-auto w-full sm:p-6 sm:space-y-6 sm:flex sm:flex-col xl:justify-center">
            <ExpenseIncome />
            <SpendingHistory onTriggerAlert={handleAlert} />
            <GoPremium />
          </div>
        </div>
      </div>
      {showAlert && (
        <PopUpAlert message="Coming Soon. go premium now!" duration={3000} />
      )}
    </main>
  );
}
