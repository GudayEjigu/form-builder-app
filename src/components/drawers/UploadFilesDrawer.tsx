import React, { MouseEvent, KeyboardEvent } from "react";
import { Input, Drawer } from "antd";

interface MyUploadFileProps {
  openUploadFile: boolean;
  onUploadFileClose: Function;
  handleLabelChange: Function;
  HandleAddUploadPdf: Function;
  HandleAddUploadWord: Function;
  HandleAddUploadFile: Function;
}
const UploadFileDrawer : React.FC<MyUploadFileProps> = ({
    openUploadFile,
    onUploadFileClose,
    handleLabelChange,
    HandleAddUploadPdf,
    HandleAddUploadWord,
    HandleAddUploadFile
  }) => {
    const maskStyle: React.CSSProperties = {
      background: "rgba(0, 0, 0, 0)", // Sets the background color with opacity 0
    };
  return (
    <div>  <Drawer
    title="UploadFile Input Form"
    placement="left"
    onClose={() => onUploadFileClose()}
    open={openUploadFile}
    maskStyle={maskStyle}
  >
    <p>Label:</p>
    <Input
      type="text"
      placeholder="Label UploadFile"
      className="my-4"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleLabelChange(e)
      }
    />
   
    <button
      className="bg-green-700  hover:bg-blue-700 rounded-lg w-full h-10 text-white UploadFile-xl  my-4 font-medium shadow hover:shadow-xl"
      onClick={() => {
        HandleAddUploadPdf();
        onUploadFileClose();
      }}
    >
      Add PDF only Uploader
    </button>
    <button
      className="bg-green-700  hover:bg-blue-700 rounded-lg w-full h-10 text-white UploadFile-xl  my-4 font-medium shadow hover:shadow-xl"
      onClick={() => {
        HandleAddUploadWord();
        onUploadFileClose();
      }}
    >
      Add word(.doc) only Uploader
    </button>
    <button
      className="bg-green-700  hover:bg-blue-700 rounded-lg w-full h-10 text-white UploadFile-xl  my-4 font-medium shadow hover:shadow-xl"
      onClick={() => {
        HandleAddUploadFile();
        onUploadFileClose();
      }}
    >
       Any File Format (Drag and Drop)
    </button>
  </Drawer></div>
  )
}

export default UploadFileDrawer