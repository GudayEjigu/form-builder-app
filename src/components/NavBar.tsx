import React, { useState } from "react";
import { Button, Input, Drawer, Collapse, Divider } from "antd";
import TextDrawer from "./drawers/TextDrawer";
import SelectDrawer from "./drawers/SelectDrawer";
import RadioDrawer from "./drawers/RadioDrawer";
import SwitchDrawer from "./drawers/SwitchDrawer";
import CheckBoxDrawer from "./drawers/CheckBoxDrawer";
import UploadImageDrawer from "./drawers/UploadImageDrawer";
import UploadFileDrawer from "./drawers/UploadFilesDrawer";
import EditorDrawer from "./drawers/EditorDrawer";
import UploadVideoDrawer from "./drawers/UploadVideoDrawer";

interface IState {
  label: string;
  value: string;
}

type MyProps = {
  HandleAddText: Function;
  HandleAddEmail: Function;
  HandleAddNumber: Function;
  HandleAddPassword: Function;
  HandleAddDateTime: Function;
  HandleSelect: Function;
  HandleMultiSelect: Function;
  HandleAddRadio: Function;
  HandleAddSwitch: Function;
  HandleAddCheckBox: Function;
  HandleAddUploadPng: Function;
  HandleAddUploadJpg: Function;
  HandleAddUpload: Function;
  HandleAddUploadPdf: Function;
  HandleAddUploadWord: Function;
  HandleAddUploadFile: Function;
  HandleAddEditor: Function;
  HandleAddVideo: Function;
  HandleAddMp4: Function;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
  setPlaceHolder: React.Dispatch<React.SetStateAction<string>>;
  options: IState[];
  setOptions: React.Dispatch<React.SetStateAction<IState[]>>;
  appendObject: Function;
};

const NavBar: React.FC<MyProps> = ({
  HandleAddText,
  HandleAddEmail,
  HandleAddNumber,
  HandleAddPassword,
  HandleAddDateTime,
  HandleSelect,
  HandleMultiSelect,
  HandleAddRadio,
  HandleAddSwitch,
  HandleAddCheckBox,
  HandleAddUploadPng,
  HandleAddUploadJpg,
  HandleAddUpload,
  HandleAddUploadPdf,
  HandleAddUploadWord,
  HandleAddUploadFile,
  HandleAddEditor,
  HandleAddVideo,
  HandleAddMp4,
  setLabel,
  setPlaceHolder,
  options,
  setOptions,
  appendObject,
}) => {
  const maskStyle: React.CSSProperties = {
    background: "rgba(0, 0, 0, 0)", // Sets the background color with opacity 0
  };
  const [openText, setOpenText] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);
  const [openRadio, setOpenRadio] = useState(false);
  const [openSwitch, setOpenSwitch] = useState(false);
  const [openCheckBox, setOpenCheckBox] = useState(false);
  const [openUploadImage, setOpenUploadImage] = useState(false);
  const [openUploadFile, setOpenUploadFile] = useState(false);
  const [openEditor, setOpenEditor] = useState(false);
  const [openUploadVideo, setOpenUploadVideo] = useState(false);

  const showTextDrawer = () => {
    setOpenText(true);
  };
  const showEditorDrawer = () => {
    setOpenEditor(true);
  };
  const showVideoDrawer = () => {
    setOpenUploadVideo(true);
  };
  const showSelectDrawer = () => {
    const val = options.slice(0, 0);
    setOptions(val);
    setOpenSelect(true);
  };

  const showRadioDrawer = () => {
    setOpenRadio(true);
  };
  const showSwitchDrawer = () => {
    setOpenSwitch(true);
  };

  const showCheckBoxDrawer = () => {
    setOpenCheckBox(true);
  };
  const showUploadImageDrawer = () => {
    setOpenUploadImage(true);
  };
  const showUploadFileDrawer = () => {
    setOpenUploadFile(true);
  };

  const onTextClose = () => {
    setOpenText(false);
  };
  const onEditorClose = () => {
    setOpenEditor(false);
  };
  const onSelectClose = () => {
    setOpenSelect(false);
  };
  const onRadioClose = () => {
    setOpenRadio(false);
  };
  const onSwitchClose = () => {
    setOpenSwitch(false);
  };

  const onCheckBoxClose = () => {
    setOpenCheckBox(false);
  };
  const onUploadImageClose = () => {
    setOpenUploadImage(false);
  };
  const onUploadFileClose = () => {
    setOpenUploadFile(false);
  };
  const onUploadVideoClose = () => {
    setOpenUploadVideo(false);
  };

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };
  const handlePlaceHolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceHolder(e.target.value);
  };

  return (
    <div className="flex  flex-col ">
      <div className="h-32  grid bg-green-800 grid- items-center">
        <p className="text-white  font-bold text-3xl ">Form Builder App</p>
      </div>
      <div className="bg-gray-00 flex flex-col">
        {" "}
        <button
          className="hover:bg-green-700 hover:w-full h-16  text-lg font-medium shadow hover:shadow-xl rounded-lg  border-2"
          onClick={() => {
            showTextDrawer();
          }}
        >
           Inputs
        </button>
        <TextDrawer
          openText={openText}
          onTextClose={onTextClose}
          handleLabelChange={handleLabelChange}
          handlePlaceHolderChange={handlePlaceHolderChange}
          HandleAddText={HandleAddText}
          HandleAddEmail={HandleAddEmail}
          HandleAddNumber={HandleAddNumber}
          HandleAddPassword={HandleAddPassword}
          HandleAddDateTime={HandleAddDateTime}
        />
        <button
          className="hover:bg-green-700 hover:w-full h-16  text-lg font-medium shadow hover:shadow-xl rounded-lg  border-2"
          onClick={() => {
            showEditorDrawer();
          }}
        >
          Essay / Text area
        </button>
        <EditorDrawer
          openEditor={openEditor}
          onEditorClose={onEditorClose}
          handleLabelChange={handleLabelChange}
          HandleAddEditor={HandleAddEditor}
        />
        <Collapse
          className="hover:bg-green-700 hover:w-full  hover:label-white text-lg font-medium shadow hover:shadow-xl"
          items={[
            {
              key: "1",
              label: "Selection...",

              children: (
                <div className="flex flex-col">
                  <button
                    className="hover:bg-green-700 hover:w-full rounded-lg py-2 hover:text-white text-sm font-medium shadow hover:shadow-xl border-t"
                    onClick={() => showSelectDrawer()}
                  >
                    Select / Multi-Select
                  </button>{" "}
                  <SelectDrawer
                    openSelect={openSelect}
                    onSelectClose={onSelectClose}
                    handleLabelChange={handleLabelChange}
                    handlePlaceHolderChange={handlePlaceHolderChange}
                    HandleSelect={HandleSelect}
                    HandleMultiSelect={HandleMultiSelect}
                    options={options}
                    appendObject={appendObject}
                  />
                  <button
                    className="hover:bg-green-700 hover:w-full rounded-lg py-2 hover:text-white text-sm font-medium shadow hover:shadow-xl"
                    onClick={() => showRadioDrawer()}
                  >
                    Radio
                  </button>{" "}
                  <RadioDrawer
                    openRadio={openRadio}
                    onRadioClose={onRadioClose}
                    handleLabelChange={handleLabelChange}
                    HandleAddRadio={HandleAddRadio}
                  />
                  <button
                    className="hover:bg-green-700 hover:w-full rounded-lg py-2 hover:text-white text-sm font-medium shadow hover:shadow-xl"
                    onClick={() => showSwitchDrawer()}
                  >
                    Switch
                  </button>{" "}
                  <SwitchDrawer
                    openSwitch={openSwitch}
                    onSwitchClose={onSwitchClose}
                    handleLabelChange={handleLabelChange}
                    HandleAddSwitch={HandleAddSwitch}
                  />
                  <button
                    className="hover:bg-green-700 hover:w-full rounded-lg py-2 hover:text-white text-sm font-medium shadow hover:shadow-xl"
                    onClick={() => showCheckBoxDrawer()}
                  >
                    Checkbox
                  </button>{" "}
                  <CheckBoxDrawer
                    openCheckBox={openCheckBox}
                    onCheckBoxClose={onCheckBoxClose}
                    handleLabelChange={handleLabelChange}
                    HandleAddCheckBox={HandleAddCheckBox}
                  />
                </div>
              ),
            },
          ]}
        />
        <Collapse
          className="hover:bg-green-700 hover:w-full  hover:label-white text-lg font-medium shadow hover:shadow-xl"
          items={[
            {
              key: "2",
              label: "Upload...",

              children: (
                <div className="flex flex-col">
                  <button
                    onClick={() => showUploadFileDrawer()}
                    className="hover:bg-green-700 hover:w-full text-sm py-2 hover:text-white  font-medium shadow hover:shadow-xl rounded-lg  border-2"
                  >
                    File Upload
                  </button>{" "}
                  <UploadFileDrawer
                    openUploadFile={openUploadFile}
                    onUploadFileClose={onUploadFileClose}
                    handleLabelChange={handleLabelChange}
                    HandleAddUploadPdf={HandleAddUploadPdf}
                    HandleAddUploadWord={HandleAddUploadWord}
                    HandleAddUploadFile={HandleAddUploadFile}
                  />
                  <button
                    onClick={() => showUploadImageDrawer()}
                    className="hover:bg-green-700 hover:w-full text-sm hover:text-white py-2  font-medium shadow hover:shadow-xl rounded-lg  border-2"
                  >
                    Image Upload
                  </button>{" "}
                  <UploadImageDrawer
                    openUploadImage={openUploadImage}
                    onUploadImageClose={onUploadImageClose}
                    handleLabelChange={handleLabelChange}
                    HandleAddUploadPng={HandleAddUploadPng}
                    HandleAddUploadJpg={HandleAddUploadJpg}
                    HandleAddUpload={HandleAddUpload}
                  />
                  <button
                    onClick={() => showVideoDrawer()}
                    className="hover:bg-green-700 hover:w-full text-sm hover:text-white py-2 font-medium shadow hover:shadow-xl rounded-lg  border-2"
                  >
                    Video Upload
                  </button>{" "}
                  <UploadVideoDrawer
                    openUploadVideo={openUploadVideo}
                    onUploadVideoClose={onUploadVideoClose}
                    handleLabelChange={handleLabelChange}
                    HandleAddVideo={HandleAddVideo}
                    HandleAddMp4={HandleAddMp4}
                  />
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default NavBar;
