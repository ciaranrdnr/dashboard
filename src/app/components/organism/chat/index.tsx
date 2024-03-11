"use client";
import { useEffect, useRef, useState } from "react";
import Chatbox from "@/app/components/molecule/chat-box";
import ChatContent from "@/app/components/molecule/chat-content";
import useLocalStorageState from "@/app/hooks/local-storage";
interface IChat {
  id: number;
  text: string;
  role: string;
}
interface IWidgetChat {}
const datas = [
  { id: 0, text: "Are you ready now?", role: "sender" },
  { id: 1, text: "I have prepared everything", role: "recipient" },
  { id: 2, text: "Will go at 6pm", role: "recipient" },
];
const WidgetChat = (props: IWidgetChat) => {
  const [isRendered, setIsRendered] = useState(false);
  const [datasState, setDatasState] = useLocalStorageState<IChat[]>(
    "chat-datas",
    datas
  );
  const [typedChat, setTypedChat] = useState<IChat | undefined>();
  const handleChange = (value: string) => {
    const newChat: IChat = {
      id: datasState.length,
      text: value,
      role: "sender",
    };
    setTypedChat(newChat);
  };
  const handleSendChat = () => {
    if (datasState && typedChat) {
      setDatasState([...datasState, typedChat]);
      setTypedChat(undefined);
    }
  };
  const refContentElement = useRef<any>();
  const scrollToBottom = () => {
    if (refContentElement.current) {
      refContentElement.current.scrollTop =
        refContentElement?.current?.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [isRendered]);

  useEffect(() => {
    setIsRendered(true);
  }, []);
  return (
    <div className="flex flex-col p-5 space-y-3 min-w-[25vw] flex-auto h-full">
      <h3 className="font-semibold">Esther Howard</h3>
      <div className="flex flex-col space-y-4 h-full">
        {isRendered ? (
          <ChatContent
            refContent={refContentElement}
            chats={datasState}
            recipientImg={`/avatar-11.png`}
            senderImg={`/avatar-2.png`}
          />
        ) : (
          <div className="w-full h-full pb-2"></div>
        )}
        <Chatbox
          value={typedChat?.text ?? ""}
          onChange={(e) => handleChange(e.target.value)}
          onSubmit={handleSendChat}
        />
      </div>
    </div>
  );
};
export default WidgetChat;
