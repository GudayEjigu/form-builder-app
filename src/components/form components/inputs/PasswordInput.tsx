import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { SettingFilled } from "@ant-design/icons";
interface MyProps {
  label: string;
  isRequired: boolean;
  maxLength: number;


}

const PasswordInput: React.FC<MyProps> = ({ label, isRequired, maxLength }) => {
  const [inputLabel, setInputLabel] = useState<string>(label);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [inputMaxLength, setInputMaxLength] = useState<number>(maxLength);

  const [editLabel, setEditLabel] = useState<string>("");
  const [editModal, setEditModal] = useState<boolean>(false);
  const [inputRequired, setInputRequired] = useState<boolean>(isRequired);

  
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
 {inputRequired ? (
        <>
             <p className="flex text-xl font-medium capitalize">{inputLabel}<p className="text-red-700">*</p></p>
      <Input.Password
      required
      maxLength={inputMaxLength}

        className="w-[400px]"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      /><button className="w-4  mx-4 pt-0 text-2xl " onClick={OnEdit}>
      <SettingFilled />{" "}
    </button>
        </>
      ) : (
        <>
             <p className="flex text-xl font-medium capitalize">{inputLabel}</p>
      <Input.Password
        className="w-[400px]"
        maxLength={inputMaxLength}

        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      /><button className="w-4  mx-4 pt-0 text-2xl " onClick={OnEdit}>
      <SettingFilled />{" "}
    </button>
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

export default PasswordInput;
