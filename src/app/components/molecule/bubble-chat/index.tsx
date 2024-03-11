import Image from "next/image";

export type TVariants = "sender" | "recipient";
interface IBubbleChatProps {
  avatarSrc: string;
  text: string;
  variant?: TVariants;
  className?: string;
  showAvatar?: boolean;
}
const BubbleChat = ({
  avatarSrc,
  text,
  showAvatar,
  ...props
}: IBubbleChatProps) => {
  const variant = props.variant ?? "sender";
  return (
    <div
      className={`flex space-x-2 w-full ${
        variant == "sender" ? "flex-row-reverse space-x-reverse" : "flex-row"
      }`}
    >
      {showAvatar ? (
        <div className="w-8 h-8 flex-none rounded-full bg-persimmon-80 overflow-clip">
          <Image
            draggable={false}
            alt={text}
            width={60}
            height={60}
            src={avatarSrc}
          />
        </div>
      ) : (
        <div className="w-8 h-8 flex-none rounded-full" />
      )}

      <div
        className={`select-all flex w-fit min-h-[32px] items-center text-xs rounded-t-lg px-4 py-2 ${
          variant == "sender"
            ? "bg-blue-80 rounded-bl-lg text-white text-right justify-end"
            : "bg-persimmon-40/80 rounded-br-lg"
        }`}
      >
        {text}
      </div>
    </div>
  );
};
export default BubbleChat;
