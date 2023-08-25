import React, { MouseEvent, KeyboardEvent } from "react";
import { Input, Drawer } from "antd";

interface MyUploadVideoProps {
  openUploadVideo: boolean;
  onUploadVideoClose: Function;
  handleLabelChange: Function;

  HandleAddVideo: Function;
  HandleAddMp4: Function;
}
const UploadVideoDrawer : React.FC<MyUploadVideoProps> = ({
    openUploadVideo,
    onUploadVideoClose,
    handleLabelChange,

    HandleAddVideo,
    HandleAddMp4
  }) => {
    const maskStyle: React.CSSProperties = {
      background: "rgba(0, 0, 0, 0)", // Sets the background color with opacity 0
    };
  return (
    <div>  <Drawer
    title="UploadVideo Input Form"
    placement="left"
    onClose={() => onUploadVideoClose()}
    open={openUploadVideo}
    maskStyle={maskStyle}
  >
    <p>Label:</p>
    <Input
      type="text"
      placeholder="Label UploadVideo"
      className="my-4"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleLabelChange(e)
      }
    />
   
   <button
      className="bg-green-700  hover:bg-blue-700 rounded-lg w-full h-10 text-white UploadVideo-xl  my-4 font-medium shadow hover:shadow-xl"
      onClick={() => {
        HandleAddMp4();
        onUploadVideoClose();
      }}
    >
       Mp4 Only Format (Preview)
    </button>
 
    <button
      className="bg-green-700  hover:bg-blue-700 rounded-lg w-full h-10 text-white UploadVideo-xl  my-4 font-medium shadow hover:shadow-xl"
      onClick={() => {
        HandleAddVideo();
        onUploadVideoClose();
      }}
    >
       Any Video Format (Preview)
    </button>
  </Drawer></div>
  )
}

export default UploadVideoDrawer