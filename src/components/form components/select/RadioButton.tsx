import React, { useState } from "react";
import { Radio } from "antd";
import { SettingFilled } from "@ant-design/icons";
import { Input } from "antd";

interface MyProps {

  label: string;

}

const RadioButton : React.FC<MyProps> = ({ label }) => {
    const [inputLabel, setInputLabel] = useState<string>(label);
    const [editLabel, setEditLabel] = useState<string>("");
    const [editModal, setEditModal] = useState<boolean>(false);
    const handleChange = () => {};
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
        
        <div className="flex ">
        <Radio><p className="flex text-xl  ">{inputLabel}</p></Radio>
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
      </div>
    );
  };


export default RadioButton