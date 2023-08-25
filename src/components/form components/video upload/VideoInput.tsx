import React, { useState, ChangeEvent } from "react";
import { SettingFilled } from "@ant-design/icons";
import { Input } from "antd";
interface MyProps {
  label: string;
}
const VideoInput: React.FC<MyProps> = ({ label }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [inputLabel, setInputLabel] = useState<string>(label);
  const [editLabel, setEditLabel] = useState<string>("");
  const [editModal, setEditModal] = useState<boolean>(false);
  const OnEdit = () => {
    setEditLabel(inputLabel);
    setEditModal(!editModal);
  };
  const handleEditLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditLabel(e.target.value);
  };

  const OnSetEdit = () => {
    setInputLabel(editLabel);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  return (
    <div className="flex flex-col">
    <div className="w-[800px] h-full flex flex-col justify-center" >
    <p className="flex text-xl font-medium capitalize  ">{inputLabel}</p>{" "}<br/>
    <div className="flex">
    <input type="file" accept="video/*" onChange={handleFileChange} />
    <button className="w-4  mx-4  text-2xl " onClick={OnEdit}>
          <SettingFilled />{" "}
        </button>
        </div>
      {editModal ? (
        <div
          className="flex  bg-white py-8  transition-y  duration-500
           opacity-100
        "
        >
          <div className="flex">
            <p className="mx-2">Label:</p>
            <Input
              className="w-[200px]"
              defaultValue={inputLabel}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleEditLabelChange(e)
              }
              placeholder={editLabel}
            />
          </div>

          <button
            className="bg-green-700 px-2 mx-2 rounded-lg text-white hover:bg-blue-700"
            onClick={OnSetEdit}
          >
            Edit
          </button>
        </div>
      ) : null}{" "}
    {selectedFile && (
      <div className="w-[400px] full flex flex-col justify-start shadow-lg p-6 bg-gray-100 rounded-lg">
        <h3 className="font-medium text-left">Selected Video:</h3>
        <p className="text-left">Filename: {selectedFile.name}</p>
        <p className="text-left">Type: {selectedFile.type}</p>
        <video controls className="shadow-xl"  >
          <source
            src={URL.createObjectURL(selectedFile)}
            type={selectedFile.type}
          />
          
        </video>
      </div>
    )}
  </div>
  </div>
  );
};

export default VideoInput;
