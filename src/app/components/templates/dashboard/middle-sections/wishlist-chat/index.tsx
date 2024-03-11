import WidgetChat from "@/app/components/organism/chat";
import WidgetWishlist from "@/app/components/organism/wishlist";

const WishlistChat = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 1);
  endDate.setHours(endDate.getHours() + 3);
  endDate.setMinutes(endDate.getMinutes() + 30);
  const datas = [
    { id: 1, label: "Macbook", checked: false },
    { id: 2, label: "Bicycle", checked: false },
    { id: 3, label: "Motorcyle", checked: false },
    { id: 4, label: "Iphone 14 pro max", checked: false },
  ];

  return (
    <div className="flex bg-white rounded-xl flex-col xl:flex-row">
      <WidgetWishlist
        checkbox={{ datas: datas, variant: "grid" }}
        dateRange={{ endDate: endDate }}
        className="border-b border-r-0 xl:border-r xl:border-b-0"
      />
      <WidgetChat />
    </div>
  );
};
export default WishlistChat;
