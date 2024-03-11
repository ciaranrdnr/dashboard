const Card = () => {
  return (
    <div className="flex flex-col justify-between w-full space-y-10 lg:space-y-0 lg:w-6/12 xl:w-6/12 2xl:w-5/12  h-full p-5 rounded-xl bg-blue-80 text-white">
      <div className="flex justify-between">
        <div className="text-2xl font-bold">C.</div>
        <div className="italic font-bold">VISA</div>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col space-y-2">
          <p>*** 9838</p>
          <p>Ciara Nurdenara</p>
        </div>
        <div>03/24</div>
      </div>
    </div>
  );
};
export default Card;
