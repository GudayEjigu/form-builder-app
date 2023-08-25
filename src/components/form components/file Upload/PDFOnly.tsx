import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { SettingFilled } from "@ant-design/icons";
import { Input } from "antd";

const props: UploadProps = {
  beforeUpload: (file) => {
    const isPNG = file.type === "application/pdf";
    if (!isPNG) {
      message.error(`${file.name} is not a pdf file`);
    }
    return isPNG || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};
interface MyProps {
  label: string;
}
const PDFOnly: React.FC<MyProps> = ({ label }) => {
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
  return (
    <div className="flex flex-col">
      <p className="flex text-xl   ">{inputLabel}</p><br/>
      <div className="flex">
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload pdf only</Button>
        </Upload>
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

export default PDFOnly;
