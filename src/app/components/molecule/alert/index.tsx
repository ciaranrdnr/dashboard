import React, { useState, useEffect } from "react";
import Button from "../../atom/button";
import Link from "next/link";
interface PopUpAlertProps {
  message: string;
  duration?: number;
}
const PopUpAlert = ({ message, duration = 3000 }: PopUpAlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;
  return (
    <div
      onClick={() => setIsVisible(false)}
      className="fixed top-0 transition-all  left-0 w-screen flex items-center justify-center h-screen z-20 backdrop-blur-[2px]"
    >
      <div className="bg-white transition-all shadow-md rounded-xl p-5 flex flex-col space-y-2 justify-center">
        <div>
          <p className="font-bold">Premium Features</p>
          <p className="text-sm">Upgrade to premium now</p>
        </div>
        <Link href={"https://ciaraa.com"} target="_blank">
          <Button label={"subscribe"} size="big" variant="contained" />
        </Link>
      </div>
    </div>
  );
};

export default PopUpAlert;
