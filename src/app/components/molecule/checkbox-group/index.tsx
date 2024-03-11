"use client";
import Checkbox from "@/app/components/atom/checkbox";
import Button from "@/app/components/atom/button";
import useLocalStorageState from "@/app/hooks/local-storage";
import { useEffect, useRef, useState } from "react";
import CrossIcon from "@/app/assets/icons/cross";

type TVariants = "horizontal" | "vertical" | "grid";

export interface ICheckboxGroupProps {
  datas: { id: number; label: string; checked: boolean }[];
  variant?: TVariants;
  className?: string;
  isDisabled?: boolean;
}

const CheckboxGroup = (props: ICheckboxGroupProps) => {
  const variant = props.variant ?? "grid";
  const variantClass = {
    horizontal: "flex-row space-x-4",
    vertical: "flex-col space-y-4",
    grid: "grid grid-cols-1 lg:grid-cols-2 gap-4",
  };
  const className =
    "flex items-center justify-between bg-blue-20 p-3 rounded-lg cursor-pointer hover:bg-blue-40/80";

  const LoadingElement = () => {
    return (
      <div
        className={`${variantClass[variant]} ${props.className} max-h-[112px] overflow-y-auto`}
      >
        {[...Array(4)].map((_, idx) => {
          return (
            <div key={"loading-check-group-" + idx} className={className}>
              <Checkbox isDisabled />
              <CrossIcon
                colorClass="fill-black"
                className="hover:bg-blue-20 w-6 h-6 rounded-full flex items-center justify-center"
                size={16}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const [isRendered, setIsRendered] = useState(false);
  const [datasState, setDatasState] = useLocalStorageState(
    "checkbox-group",
    props.datas
  );
  const [sumChecked, setSumChecked] = useLocalStorageState("sum-checked", 0);

  const refContentElement = useRef<any>();
  const scrollToBottom = () => {
    if (refContentElement.current) {
      refContentElement.current.scrollTop =
        refContentElement?.current?.scrollHeight;
    }
  };

  const handleClick = (idx: number) => {
    setDatasState(
      datasState.map((data, currentIdx) =>
        currentIdx === idx ? { ...data, checked: !data.checked } : data
      )
    );

    if (!datasState[idx].checked) {
      setSumChecked(sumChecked + 1);
    } else {
      setSumChecked(sumChecked - 1);
    }
  };
  const handleType = (value: string, idx: number) => {
    setDatasState(
      datasState.map((data, currentIdx) =>
        currentIdx === idx ? { ...data, label: value } : data
      )
    );
  };

  const handleAddItem = () => {
    setDatasState([
      ...datasState,
      { id: datasState.length, label: "Please fill", checked: false },
    ]);
  };

  const handleDelete = (id: number) => {
    const updatedDatas = datasState.filter((data) => data.id !== id);
    setDatasState(updatedDatas);

    const deletedItem = datasState.find((data) => data.id === id);
    if (deletedItem && deletedItem.checked) {
      setSumChecked(sumChecked - 1);
    }
  };

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [datasState.length]);

  return (
    <div className="flex flex-col space-y-5 text-sm ">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 text-black font-semibold text-xs">
          <p>{`${isRendered ? sumChecked : 0}/${props.datas.length}`}</p>
          <p>Shopping List</p>
        </div>
        <Button
          variant="text"
          className="p-0"
          onClick={handleAddItem}
          label={<p className="text-black font-semibold">+ Add an item</p>}
        />
      </div>

      {isRendered ? (
        <fieldset
          ref={refContentElement}
          className={`${variantClass[variant]} ${props.className} max-h-[112px] overflow-y-auto scroll-smooth`}
        >
          {datasState.map((data, idx) => {
            return (
              <div
                key={idx + "checkbox-group-" + data.id}
                className={className}
              >
                <Checkbox
                  label={data.label}
                  isChecked={data.checked}
                  onClick={() => handleClick(idx)}
                  onType={(e) => {
                    handleType(e.target.value, idx);
                  }}
                  isDisabled={props.isDisabled}
                />
                <CrossIcon
                  onClick={() => handleDelete(data.id)}
                  colorClass="stroke-black"
                  className="hover:bg-blue-20 w-6 h-6 rounded-full flex items-center justify-center"
                  size={16}
                />
              </div>
            );
          })}
        </fieldset>
      ) : (
        <LoadingElement />
      )}
    </div>
  );
};
export default CheckboxGroup;
