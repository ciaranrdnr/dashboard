import Button from "@/app/components/atom/button";

interface ISortButton {
  sortBy: "asc" | "dsc";
  onChange: (e?: any) => void;
}
const SortButton = (props: ISortButton) => {
  return (
    <div className="flex space-x-2">
      <Button
        onClick={() => props.onChange("dsc")}
        variant="text"
        label={
          <div className="[&>div]:hover:scale-x-100">
            <p className="text-black">Newest</p>
            {props.sortBy == "dsc" && (
              <div className="h-[1px] w-full bg-black scale-x-100 transition-all" />
            )}
          </div>
        }
      />
      <Button
        onClick={() => props.onChange("asc")}
        variant="text"
        label={
          <div className="[&>div]:hover:scale-x-100">
            <p className="text-black">Oldest</p>
            {props.sortBy == "asc" && (
              <div className="h-[1px] w-full bg-black" />
            )}
          </div>
        }
      />
    </div>
  );
};
export default SortButton;
