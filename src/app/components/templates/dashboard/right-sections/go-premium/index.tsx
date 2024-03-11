import Button from "@/app/components/atom/button";
import Image from "next/image";
import Link from "next/link";

const GoPremium = () => {
  return (
    <div className="flex flex-col select-none space-y-4 p-4 rounded-xl border bg-white w-full">
      <div className="flex">
        <h3 className="text-center w-full font-bold">Go to premium</h3>
      </div>
      <Link href={"https://ciaraa.com"} target="_blank">
        <div className="w-20 h-20 rounded-lg overflow-clip cursor-pointer">
          <Image
            className="hover:scale-[1.4] transition-all scale-125 hover:animate-shake"
            draggable={false}
            alt="go premium"
            width={80}
            height={80}
            src={"/premium.png"}
          />
        </div>
      </Link>
      <div className="flex flex-col space-y-1">
        <p className="text-base font-semibold">Need more features?</p>
        <p className="text-xs text-grey-100 pb-2">
          Update your account to premium to get more features.
        </p>
        <Link href={"https://ciaraa.com"} target="_blank">
          <Button label="Get now" variant="contained" size="big" />
        </Link>
      </div>
    </div>
  );
};
export default GoPremium;
