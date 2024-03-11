"use client";
import { useState } from "react";
import Navbar from "./components/templates/dashboard/navbar";
import MiddleSections from "./components/templates/dashboard/middle-sections";
import PopUpAlert from "./components/molecule/alert";
import RightSections from "./components/templates/dashboard/right-sections";

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const handleAlert = () => setShowAlert(!showAlert);
  return (
    <main className="relative text-black">
      <div className="flex sm:flex-row flex-col justify-stretch h-screen items-center bg-blue-20 relative overflow-x-clip overflow-y-auto">
        <Navbar />
        <MiddleSections onTriggerAlert={handleAlert} />
        <RightSections onTriggerAlert={handleAlert} />
      </div>
      {showAlert && <PopUpAlert duration={3000} />}
    </main>
  );
}
