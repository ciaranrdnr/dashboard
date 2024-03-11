import React, { useState, useEffect, ReactNode } from "react";
import Button from "../../atom/button";
import Link from "next/link";
interface PopUpAlertProps {
  title?: string;
  description?: string;
  duration?: number;
  cta?: ReactNode;
  className?: string;
  wrapClassName?: string;
}
const PopUpAlert = ({
  title,
  description,
  duration = 3000,
  cta,
  className,
  wrapClassName,
}: PopUpAlertProps) => {
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
      className={`fixed top-0 transition-all left-0 w-screen flex h-screen z-40 ${
        wrapClassName ?? "items-center justify-center backdrop-blur-[2px]"
      }`}
    >
      <div
        className={`bg-white transition-all shadow-md rounded-xl p-5 flex flex-col space-y-2 justify-center ${
          className ?? ""
        }`}
      >
        <div>
          <p className="font-bold">{title ?? "Premium Features"}</p>
          <p className="text-sm text-justify">
            {description ?? "Upgrade to premium now"}
          </p>
        </div>
        {cta ?? (
          <Link href={"https://ciaraa.com"} target="_blank">
            <Button label={"subscribe"} size="big" variant="contained" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PopUpAlert;
