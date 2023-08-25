import React, { MouseEvent, KeyboardEvent } from "react";
import { Input, Drawer } from "antd";

interface MyUploadImageProps {
  openUploadImage: boolean;
  onUploadImageClose: Function;
  handleLabelChange: Function;
  HandleAddUploadPng: Function;
  HandleAddUploadJpg: Function;
  HandleAddUpload: Function;
}
const UploadImageDrawer : React.FC<MyUploadImageProps> = ({
    openUploadImage,
    onUploadImageClose,
    handleLabelChange,
    HandleAddUploadPng,
    HandleAddUploadJpg,
    HandleAddUpload
  }) => {
    const maskStyle: React.CSSProperties = {
      background: "rgba(0, 0, 0, 0)", // Sets the background color with opacity 0
    };
  return (
    <div>  <Drawer
    title="UploadImage Input Form"
    placement="left"
    onClose={() => onUploadImageClose()}
    open={openUploadImage}
    maskStyle={maskStyle}
  >
    <p>Label:</p>
    <Input
      type="text"
      placeholder="Label UploadImage"
      className="my-4"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleLabelChange(e)
      }
    />
   
    <button
      className="bg-green-700  hover:bg-blue-700 rounded-lg w-full h-10 text-white UploadImage-xl  my-4 font-medium shadow hover:shadow-xl"
      onClick={() => {
        HandleAddUploadPng();
        onUploadImageClose();
      }}
    >
      Add PNG only Uploader
    </button>
    <button
      className="bg-green-700  hover:bg-blue-700 rounded-lg w-full h-10 text-white UploadImage-xl  my-4 font-medium shadow hover:shadow-xl"
      onClick={() => {
        HandleAddUploadJpg();
        onUploadImageClose();
      }}
    >
      Add JPG only Uploader
    </button>
    <button
      className="bg-green-700  hover:bg-blue-700 rounded-lg w-full h-10 text-white UploadImage-xl  my-4 font-medium shadow hover:shadow-xl"
      onClick={() => {
        HandleAddUpload();
        onUploadImageClose();
      }}
    >
       Any Img Format (with Preview)
    </button>
  </Drawer></div>
  )
}

export default UploadImageDrawer