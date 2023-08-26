import React, { useState } from "react";
import { Input, Button } from "antd";

import { SettingFilled } from "@ant-design/icons";

interface MyProps {
  label: string;
  placeHolder: string;
  isRequired: boolean;
  maxLength: number;

}

const EmailInput: React.FC<MyProps> = ({ placeHolder, label, isRequired , maxLength}) => {
  const [inputLabel, setInputLabel] = useState<string>(label);
  const [inputPlaceHolder, setInputPlaceHolder] = useState<string>(placeHolder);
  const [inputMaxLength, setInputMaxLength] = useState<number>(maxLength);

  const [editLabel, setEditLabel] = useState<string>("");
  const [editPlaceholder, setEditPlaceholder] = useState<string>("");
  const [editModal, setEditModal] = useState<boolean>(false);

  const [inputRequired, setInputRequired] = useState<boolean>(isRequired);
  const OnEdit = () => {
    setEditLabel(inputLabel);
    setEditPlaceholder(inputPlaceHolder);
    setEditModal(!editModal);
  };
  const handleEditLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditLabel(e.target.value);
  };
  const handleEditPlaceholderChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditPlaceholder(e.target.value);
  };
  const OnSetEdit = () => {
    setInputLabel(editLabel);
    setInputPlaceHolder(editPlaceholder);
  };

  return (
    <div>
      {inputRequired ? (
        <>
          <p className="flex text-xl font-medium capitalize">
            {inputLabel} <p className="text-red-700">*</p>
          </p>
          <div className="flex">
            <div>
              <Input
                addonAfter=".com"
                required
                type="email"
                className="w-[400px]"
                placeholder={inputPlaceHolder}
                maxLength={inputMaxLength}

              />{" "}
              <button className="w-4  mx-4 pt-0 text-2xl " onClick={OnEdit}>
                <SettingFilled />{" "}
              </button>
              <br />
              <p className="flex text-xs opacity-20 ">Email only</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="flex text-xl font-medium capitalize">{inputLabel}</p>
          <div className="flex">
            <div>
              <input
                type="email"
                className="w-[400px]"
                placeholder={inputPlaceHolder}
                maxLength={inputMaxLength}

              />{" "}
              <button className="w-4  mx-4 pt-0 text-2xl " onClick={OnEdit}>
                <SettingFilled />{" "}
              </button>
              <br />
              <p className="flex text-xs opacity-20 ">Email only</p>
            </div>
          </div>
        </>
      )}
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
      ) : null}{" "}
    </div>
  );
};

export default EmailInput;
