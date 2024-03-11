import Image from "next/image";

const Card = () => {
  return (
    <div className="[&>.card]:hover:scale-110 flex relative overflow-clip flex-col justify-between w-full  lg:w-6/12 xl:w-6/12 2xl:w-5/12 h-full rounded-xl text-white">
      <div className="z-10 flex flex-col h-full justify-between bg-blue-80/50 p-5 space-y-10 lg:space-y-0">
        <div className="flex justify-between backdrop-blur-[1px] ">
          <div className="text-2xl font-bold shadow-sm">C.</div>
          <div className="italic font-bold shadow-sm">VISA</div>
        </div>
        <div className="flex justify-between items-end shadow-sm">
          <div className="flex flex-col space-y-2 backdrop-blur-[1px] ">
            <p className="shadow-sm">*** 9838</p>
            <p className="shadow-sm font-medium">Ciara Nurdenara</p>
          </div>
          <div className="shadow-sm text-xs font-semibold">03/24</div>
        </div>
      </div>
      <Image
        draggable={false}
        src={"/card-bg.jpeg"}
        alt="card-background"
        className="card transition-all"
        fill
      />
    </div>
  );
};
export default Card;
