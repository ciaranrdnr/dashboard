"use client";
import BellIcon from "@/app/assets/icons/bell";
import ChatIcon from "@/app/assets/icons/chat";
import ClockIcon from "@/app/assets/icons/clock";
import ExitIcon from "@/app/assets/icons/exit";
import GearIcon from "@/app/assets/icons/gear";
import HomeIcon from "@/app/assets/icons/home";
import PeopleIcon from "@/app/assets/icons/people";
import WalletIcon from "@/app/assets/icons/wallet";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setMobile(isMobile);
  }, []);
  useEffect(() => {
    if (!isMobile) setIsOpen(true);
  }, [isMobile]);

  const bgStyle = `bg-blue-80 hover:bg-blue-40`;
  return (
    <div
      className={`w-16 lg:w-[100px] transition-all flex ${
        isOpen ? "flex-col backdrop-blur-sm bg-white/20" : "flex-col-reverse"
      } items-center justify-between lg:bg-white h-screen py-[5vh] lg:sticky fixed top-0 left-0 z-10"`}
    >
      {isOpen ? (
        <>
          <div className="flex flex-col items-center justify-between space-y-4 lg:space-y-10">
            {!mobile && (
              <p className="font-bold text-2xl select-none cursor-pointer">
                C.
              </p>
            )}
            <ChatIcon
              className="p-2 cursor-pointer rounded-full hover:bg-persimmon-80/60 bg-persimmon-60"
              size={24}
              strokeClassName={`stroke-black`}
            />
          </div>
          <div className="bg-blue-20 flex flex-col items-center rounded-full p-1.5 relative">
            <div
              className={`absolute w-10 h-10 rounded-full transition-all ${bgStyle}`}
              style={{ top: selected * 40 + 6 }}
            ></div>
            <HomeIcon
              className={`group p-2 cursor-pointer rounded-full z-20 ${
                selected == 0 ? "" : `hover:bg-blue-40`
              }`}
              size={24}
              strokeClassName={`${
                selected == 0
                  ? "stroke-white group-hover:stroke-white/80"
                  : "stroke-black/80 hover:stroke-black"
              }`}
              isActive={selected == 0}
              onClick={() => setSelected(0)}
            />
            <BellIcon
              className={`group p-2 cursor-pointer rounded-full z-20 ${
                selected == 1 ? "" : `hover:bg-blue-40`
              }`}
              size={24}
              strokeClassName={`${
                selected == 1
                  ? "stroke-white group-hover:stroke-white/80"
                  : "stroke-black/80 hover:stroke-black"
              }`}
              isActive={selected == 1}
              onClick={() => setSelected(1)}
            />
            <ClockIcon
              className={`group p-2 cursor-pointer rounded-full z-20 ${
                selected == 2 ? "" : `hover:bg-blue-40`
              }`}
              size={24}
              strokeClassName={`${
                selected == 2
                  ? "stroke-white group-hover:stroke-white/80"
                  : "stroke-black/80 hover:stroke-black"
              }`}
              isActive={selected == 2}
              onClick={() => setSelected(2)}
            />
            <PeopleIcon
              className={`group p-2 cursor-pointer rounded-full z-20 ${
                selected == 3 ? "" : `hover:bg-blue-40`
              }`}
              size={24}
              strokeClassName={`${
                selected == 3
                  ? "stroke-white group-hover:stroke-white/80"
                  : "stroke-black/80 hover:stroke-black"
              }`}
              isActive={selected == 3}
              onClick={() => setSelected(3)}
            />
            <WalletIcon
              className={`group p-2 cursor-pointer rounded-full z-20 ${
                selected == 4 ? "" : `hover:bg-blue-40`
              }`}
              size={24}
              strokeClassName={`${
                selected == 4
                  ? "stroke-white group-hover:stroke-white/80"
                  : "stroke-black/80 hover:stroke-black"
              }`}
              isActive={selected == 4}
              onClick={() => setSelected(4)}
            />
            <GearIcon
              className={`group p-2 cursor-pointer rounded-full z-20 ${
                selected == 5 ? "" : `hover:bg-blue-40`
              }`}
              size={24}
              strokeClassName={`${
                selected == 5
                  ? "stroke-white group-hover:stroke-white/80"
                  : "stroke-black/80 hover:stroke-black"
              }`}
              isActive={selected == 5}
              onClick={() => setSelected(5)}
            />
          </div>

          <div className="bg-blue-20 flex flex-col items-center rounded-full p-1.5">
            <div className="w-10 h-10 bg-grey-50 rounded-full">
              <Image src={""} alt="" />
            </div>
            <ExitIcon
              className="p-2 cursor-pointer rounded-full"
              size={24}
              strokeClassName={`${
                selected == 0
                  ? "stroke-white group-hover:stroke-white/80"
                  : "stroke-black/80 hover:stroke-black"
              }`}
              isActive={selected == 0}
            />
          </div>
        </>
      ) : (
        <></>
      )}
      {mobile && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center box shadow-md cursor-pointer"
        >
          <p className="font-bold text-2xl select-none cursor-pointer">C.</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
