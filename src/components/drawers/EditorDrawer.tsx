import React, { MouseEvent, KeyboardEvent } from "react";
import { Input, Drawer } from "antd";

interface MyEditorProps {
  openEditor: boolean;
  onEditorClose: Function;
  handleLabelChange: Function;
  HandleAddEditor: Function;
}

const EditorDrawer: React.FC<MyEditorProps> = ({
  openEditor,
  onEditorClose,
  handleLabelChange,
  HandleAddEditor,
}) => {
  const maskStyle: React.CSSProperties = {
    background: "rgba(0, 0, 0, 0)", // Sets the background color with opacity 0
  };
  return (
    <div>
      {" "}
      <Drawer
        title="Editor Input Form"
        placement="left"
        onClose={() => onEditorClose()}
        open={openEditor}
        maskStyle={maskStyle}
      >
        <p>Label:</p>
        <Input
          type="text"
          placeholder="Label Editor"
          className="my-4"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleLabelChange(e)
          }
        />
       
        <button
          className="bg-green-700  hover:bg-blue-700 rounded-lg w-full h-10 Editor-white Editor-xl  my-4 font-medium shadow hover:shadow-xl"
          onClick={() => {
            HandleAddEditor();
            onEditorClose();
          }}
        >
          Add Editor Input
        </button>
      </Drawer>
    </div>
  );
};

export default EditorDrawer;
