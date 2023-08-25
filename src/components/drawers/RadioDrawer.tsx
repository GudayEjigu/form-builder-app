import React, { MouseEvent, KeyboardEvent } from "react";
import { Input, Drawer } from "antd";

interface MyRadioProps {
  openRadio: boolean;
  onRadioClose: Function;
  handleLabelChange: Function;
  HandleAddRadio: Function;
}
const RadioDrawer : React.FC<MyRadioProps> = ({
    openRadio,
    onRadioClose,
    handleLabelChange,
    HandleAddRadio,
  }) => {
    const maskStyle: React.CSSProperties = {
      background: "rgba(0, 0, 0, 0)", // Sets the background color with opacity 0
    };
  return (
    <div>  <Drawer
    title="Radio Input Form"
    placement="left"
    onClose={() => onRadioClose()}
    open={openRadio}
    maskStyle={maskStyle}
  >
    <p>Label:</p>
    <Input
      type="text"
      placeholder="Label Radio"
      className="my-4"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleLabelChange(e)
      }
    />
   
    <button
      className="bg-green-700  hover:bg-blue-700 rounded-lg w-full h-10 text-white Radio-xl  my-4 font-medium shadow hover:shadow-xl"
      onClick={() => {
        HandleAddRadio();
        onRadioClose();
      }}
    >
      Add Radio Input
    </button>
  </Drawer></div>
  )
}

export default RadioDrawer