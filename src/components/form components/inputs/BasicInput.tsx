import React, { useState } from "react";
import { Input, Button } from "antd";
import { SettingFilled } from "@ant-design/icons";

interface MyProps {
  placeHolder: string;
  label: string;
}

const BasicInput: React.FC<MyProps> = ({ placeHolder, label }) => {
  const [inputLabel, setInputLabel] = useState<string>(label);
  const [inputPlaceHolder, setInputPlaceHolder] = useState<string>(placeHolder);
  const [editLabel, setEditLabel] = useState<string>("");
  const [editPlaceholder, setEditPlaceholder] = useState<string>("");
  const [editModal, setEditModal] = useState<boolean>(false);
  const OnEdit = () => {
    setEditLabel(inputLabel);
    setEditPlaceholder(inputPlaceHolder);
    setEditModal(!editModal);
  };
  const handleEditLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditLabel(e.target.value);
  };
  const handleEditPlaceholderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditPlaceholder(e.target.value);
  };
  const OnSetEdit = () => {
    setInputLabel(editLabel);
    setInputPlaceHolder(editPlaceholder);
  };
  return (
    <div>
      <p className="flex text-xl font-medium capitalize">{inputLabel}</p>
      <Input className="w-[600px]" placeholder={inputPlaceHolder} />
      <button
        className="w-4  mx-4 pt-0 text-2xl "
        
        onClick={OnEdit}
      >
        <SettingFilled />{" "}
      </button>
      {editModal ? (
        <div
          className="flex  bg-white py-8  transition-y  duration-500
          h-auto opacity-100
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
          <div className="flex">
            <p className="mx-2">Placeholder:</p>
            <Input
              className="w-[200px]"
              defaultValue={inputLabel}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleEditPlaceholderChange(e)
              }
              placeholder={editPlaceholder}
            />
          </div>
          <button
            className="bg-green-700 px-2 mx-2 rounded-lg text-white hover:bg-blue-700"
            onClick={OnSetEdit}
          >
            Edit
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default BasicInput;
