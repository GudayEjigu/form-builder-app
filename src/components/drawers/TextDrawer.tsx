import React, { MouseEvent, KeyboardEvent } from "react";
import { Input, Drawer } from "antd";

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
}) => {
  const maskStyle: React.CSSProperties = {
    background: "rgba(0, 0, 0, 0)", // Sets the background color with opacity 0
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
        <button
          className="bg-green-700  hover:bg-blue-700 rounded-lg w-[60%] h-10 text-white text-lg  my-4 font-medium shadow hover:shadow-xl"
          onClick={() => {
            HandleAddText();
            onTextClose();
          }}
        >
          Add Text Input
        </button>
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
        <button
          className="bg-green-700  hover:bg-blue-700 rounded-lg w-[60%] h-10 text-white text-lg  my-4 font-medium shadow hover:shadow-xl"
          onClick={() => {
            HandleAddDateTime();
            onTextClose();
          }}
        >
          Add Date/Time Picker
        </button>
     
      </Drawer>
    </div>
  );
};

export default TextDrawer;
