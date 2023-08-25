import React, { MouseEvent, KeyboardEvent } from "react";
import { Input, Drawer } from "antd";

interface MyCheckBoxProps {
  openCheckBox: boolean;
  onCheckBoxClose: Function;
  handleLabelChange: Function;
  HandleAddCheckBox: Function;
}
const CheckBoxDrawer : React.FC<MyCheckBoxProps> = ({
    openCheckBox,
    onCheckBoxClose,
    handleLabelChange,
    HandleAddCheckBox,
  }) => {
    const maskStyle: React.CSSProperties = {
      background: "rgba(0, 0, 0, 0)", // Sets the background color with opacity 0
    };
  return (
    <div>  <Drawer
    title="CheckBox Input Form"
    placement="left"
    onClose={() => onCheckBoxClose()}
    open={openCheckBox}
    maskStyle={maskStyle}
  >
    <p>Label:</p>
    <Input
      type="text"
      placeholder="Label CheckBox"
      className="my-4"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleLabelChange(e)
      }
    />
   
    <button
      className="bg-green-700  hover:bg-blue-700 rounded-lg w-full h-10 text-white CheckBox-xl  my-4 font-medium shadow hover:shadow-xl"
      onClick={() => {
        HandleAddCheckBox();
        onCheckBoxClose();
      }}
    >
      Add CheckBox Input
    </button>
  </Drawer></div>
  )
}

export default CheckBoxDrawer