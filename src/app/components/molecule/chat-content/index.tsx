import { useRef } from "react";
import BubbleChat, { TVariants } from "../bubble-chat";

interface IChatContentProps {
  chats: any[];
  senderImg: string;
  recipientImg: string;
  refContent: any;
}

const ChatContent = (props: IChatContentProps) => {
  return (
    <div
      ref={props.refContent}
      className="flex flex-col space-y-3 scroll-smooth max-h-[110px] pb-2 pr-1 h-full overflow-y-auto"
    >
      {props.chats.map((data, idx) => {
        const avatarSrc =
          data.role == "recipient" ? props.recipientImg : props.senderImg;
        return (
          <BubbleChat
            key={"bubble-chat-" + data.id}
            variant={data.role as TVariants}
            avatarSrc={avatarSrc}
            showAvatar={
              idx > 0 && props.chats[idx - 1].role == data.role ? false : true
            }
            text={data.text}
          />
        );
      })}
    </div>
  );
};
export default ChatContent;
