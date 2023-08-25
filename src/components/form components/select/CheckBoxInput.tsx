import React, { useState } from "react";
import { Checkbox } from "antd";
import { SettingFilled } from "@ant-design/icons";
import { Input } from "antd";

interface MyProps {
  label: string;
}

const CheckBoxInput: React.FC<MyProps> = ({ label }) => {
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
  const onChange = () => {};

  return (
    <div>
      <div className="flex ">
        <Checkbox  onChange={onChange} className="mt-1" />
        <p className="flex text-lg ml-2 ">{inputLabel}</p>
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
      ) : null}{" "}    </div>
  );
};

export default CheckBoxInput;
