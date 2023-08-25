import React, { MouseEvent, KeyboardEvent, useState } from "react";
import { Input, Drawer, Switch } from "antd";

interface IState {
  label: string;
  value: string;
}
interface MySelectProps {
  openSelect: boolean;
  onSelectClose: Function;
  handleLabelChange: Function;
  handlePlaceHolderChange: Function;
  HandleSelect: Function;
  HandleMultiSelect: Function;
  options: IState[];
  appendObject: Function;
}

const SelectDrawer: React.FC<MySelectProps> = ({
  openSelect,
  onSelectClose,
  handleLabelChange,
  handlePlaceHolderChange,
  HandleSelect,
  HandleMultiSelect,
  options,
  appendObject,
}) => {
  const [optionLabel, setOptionLabel] = useState<string>("");
  const [optionValue, setOptionValue] = useState<string>("");
  const [isMulti, setIsMulti] = useState<boolean>(false);

  const AppendOptions = () => {
    appendObject({ label: optionLabel, value: optionValue });
  };
  const handleOptionLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionLabel(e.target.value);
  };

  const handleOptionValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionValue(e.target.value);
  };

  const maskStyle: React.CSSProperties = {
    background: "rgba(0, 0, 0, 0)", // Sets the background color with opacity 0
  };

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setIsMulti(checked);
  };
  return (
    <div>
      {" "}
      <Drawer
        title="Select Form"
        placement="left"
        onClose={() => onSelectClose()}
        open={openSelect}
        maskStyle={maskStyle}
      >
        <p>Label:</p>
        <Input
          type="text"
          placeholder="Label text"
          className="my-4"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleLabelChange(e)
          }
        />
        <p>Place Holder:</p>
        <Input
          type="text"
          placeholder="Placeholder text"
          className="my-4"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlePlaceHolderChange(e)
          }
        />
        <div className=" border shadow-xl rounded-lg p-2 mb-6">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p>Option Label:</p>
              <Input
                type="text"
                placeholder="label text"
                className="my-4"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleOptionLabelChange(e)
                }
              />
            </div>
            <div>
              <p>Option value:</p>
              <Input
                type="text"
                placeholder="value text"
                className="my-4"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleOptionValueChange(e)
                }
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-green-700 mr-2 hover:bg-blue-700 rounded-lg w-14 h-8 text-white text-xl   font-medium shadow hover:shadow-xl"
              onClick={() => {
                AppendOptions();
              }}
            >
              +
            </button>
          </div>
          <div className="">
            {options.map((item, i) => {
              return (
                <div className="grid grid-cols-2 mt-3 border">
                  <p>Label: {item.label}</p> <p>Value: {item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
<div className="">

        <Switch  defaultChecked onChange={onChange} /> Is Multi select
</div>
        <button
          className="bg-green-700  hover:bg-blue-700 rounded-lg w-full h-10 text-white text-xl  my-4 font-medium shadow hover:shadow-xl"
          onClick={() => {
            if (isMulti) {
              HandleMultiSelect();
            } else {
              HandleSelect();
            }
            onSelectClose();
          }}
        >
          Add Select Input
        </button>
      </Drawer>
    </div>
  );
};

export default SelectDrawer;
