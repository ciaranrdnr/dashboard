import ClipIcon from "@/app/assets/icons/clip";
import EmojiIcon from "@/app/assets/icons/emoji";
import Button from "@/app/components/atom/button";
interface IChatboxProps {
  onChange?: (e?: any) => void;
  onSubmit?: (e?: any) => void;
  value: string;
}
const Chatbox = (props: IChatboxProps) => {
  return (
    <div className="flex flex-col flex-none space-y-5 p-3 bg-grey-50 rounded-lg">
      <div>
        <textarea
          value={props.value}
          className="text-xs outline-none bg-transparent w-full min-h-[16px]"
          placeholder="Type your message"
          onChange={props.onChange}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <div className="cursor-pointer hover:bg-grey-100/20 rounded-full">
            <EmojiIcon size={24} />
          </div>
          <div className="cursor-pointer hover:bg-grey-100/20 rounded-full">
            <ClipIcon size={24} />
          </div>
        </div>
        <Button
          type="submit"
          variant="contained"
          label={"Send now"}
          onClick={props.onSubmit}
        />
      </div>
    </div>
  );
};
export default Chatbox;
