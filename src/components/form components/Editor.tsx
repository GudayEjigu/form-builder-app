import React, { useState, ChangeEvent } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Input, Space } from "antd";

import { SettingFilled } from "@ant-design/icons";

interface MyProps {
  label: string;
}

const Editor: React.FC<MyProps> = ({ label }) => {
  const [inputLabel, setInputLabel] = useState<string>(label);
  const onChange = () => {};
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

  return (
    <div>
      <div className="flex flex-col">
        <p className="flex text-xl font-medium capitalize">{inputLabel}</p>
        <div className="flex">
          <ReactQuill className="w-[800px] h-[280px] pb-14" />
          <button className="w-4  mx-4  text-2xl " onClick={OnEdit}>
            <SettingFilled />{" "}
          </button>
        </div>
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
    </div>
  );
};

export default Editor;
