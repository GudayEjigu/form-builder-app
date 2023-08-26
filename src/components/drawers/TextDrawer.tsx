import React, { MouseEvent, KeyboardEvent, useState } from "react";
import { Input, Drawer, Checkbox, Switch } from "antd";
import { CloseOutlined } from "@ant-design/icons";

interface MyTextProps {
  openText: boolean;
  onTextClose: Function;
  handleLabelChange: Function;
  handlePlaceHolderChange: Function;
  HandleAddText: Function;
  HandleAddEmail: Function;
  HandleAddNumber: Function;
  HandleAddPassword: Function;
  HandleAddDateTime: Function;
  setIsRequired: Function;
  setMaxLength: Function;
}

const TextDrawer: React.FC<MyTextProps> = ({
  openText,
  onTextClose,
  handleLabelChange,
  handlePlaceHolderChange,
  HandleAddText,
  HandleAddEmail,
  HandleAddNumber,
  HandleAddPassword,
  HandleAddDateTime,
  setIsRequired,
  setMaxLength,
}) => {
  const maskStyle: React.CSSProperties = {
    background: "rgba(0, 0, 0, 0)", // Sets the background color with opacity 0
  };
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxLength(e.target.value);
  };
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setIsRequired(checked);
  };
  return (
    <div>
      {" "}
      <Drawer
        title="Text Input Form"
        placement="left"
        onClose={() => onTextClose()}
        open={openText}
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
        <p className="flex mt-4">
          <p className="border-2 rounded-xl ">
            <Switch unCheckedChildren={<CloseOutlined />} onChange={onChange} />
          </p>
          <p className="pl-2 ">required?</p>
        </p>
        <div>
          <div className="flex mt-4">
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleMaxChange(e)
              }
              placeholder="100"
              className="w-20 mr-2"
              type="number"
            />
            <p className="pt-1">Character length </p>
          </div>
          <button
            className="bg-green-700  hover:bg-blue-700 rounded-lg w-[60%] h-10 text-white text-lg  mt-6 font-medium shadow hover:shadow-xl"
            onClick={() => {
              HandleAddText();

              onTextClose();
            }}
          >
            Add Text Input
          </button>
        </div>
        <button
          className="bg-green-700  hover:bg-blue-700 rounded-lg w-[60%] h-10 text-white text-lg  my-4 font-medium shadow hover:shadow-xl"
          onClick={() => {
            HandleAddEmail();
            onTextClose();
          }}
        >
          Add Email Input
        </button>
        <button
          className="bg-green-700  hover:bg-blue-700 rounded-lg w-[60%] h-10 text-white text-lg  my-4 font-medium shadow hover:shadow-xl"
          onClick={() => {
            HandleAddNumber();
            onTextClose();
          }}
        >
          Add Number Input
        </button>
        <button
          className="bg-green-700  hover:bg-blue-700 rounded-lg w-[60%] h-10 text-white text-lg  my-4 font-medium shadow hover:shadow-xl"
          onClick={() => {
            HandleAddPassword();
            onTextClose();
          }}
        >
          Add Password Input
        </button>
        <div className="border-t-2 mt-4">
          <button
            className="bg-green-700   hover:bg-blue-700 rounded-lg w-[60%] h-10 text-white text-lg  my-4 font-medium shadow hover:shadow-xl"
            onClick={() => {
              HandleAddDateTime();
              onTextClose();
            }}
          >
            Add Date/Time Picker
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default TextDrawer;
