import React, { MouseEvent, KeyboardEvent } from "react";
import { Input, Drawer } from "antd";

interface MySwitchProps {
  openSwitch: boolean;
  onSwitchClose: Function;
  handleLabelChange: Function;
  HandleAddSwitch: Function;
}
const SwitchDrawer : React.FC<MySwitchProps> = ({
    openSwitch,
    onSwitchClose,
    handleLabelChange,
    HandleAddSwitch,
  }) => {
    const maskStyle: React.CSSProperties = {
      background: "rgba(0, 0, 0, 0)", // Sets the background color with opacity 0
    };
  return (
    <div>  <Drawer
    title="Switch Input Form"
    placement="left"
    onClose={() => onSwitchClose()}
    open={openSwitch}
    maskStyle={maskStyle}
  >
    <p>Label:</p>
    <Input
      type="text"
      placeholder="Label Switch"
      className="my-4"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleLabelChange(e)
      }
    />
   
    <button
      className="bg-green-700  hover:bg-blue-700 rounded-lg w-full h-10 text-white Switch-xl  my-4 font-medium shadow hover:shadow-xl"
      onClick={() => {
        HandleAddSwitch();
        onSwitchClose();
      }}
    >
      Add Switch Input
    </button>
  </Drawer></div>
  )
}

export default SwitchDrawer