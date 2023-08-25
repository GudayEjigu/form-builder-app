import React, { useState } from "react";
import { Input } from "antd";
import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker, Select, Space, TimePicker } from 'antd';
import { SettingFilled } from "@ant-design/icons";


const { Option } = Select;

type PickerType = 'time' | 'date';

const PickerWithType = ({
  type,
  onChange,
}: {
  type: PickerType;
  onChange: TimePickerProps['onChange'] | DatePickerProps['onChange'];
}) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};
interface MyProps {
  label: string;
}

const DateTime: React.FC<MyProps> = ({ label }) => {
  const [inputLabel, setInputLabel] = useState<string>(label);
  const [type, setType] = useState<PickerType>('time');
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
      <p className="flex text-xl font-medium capitalize">{inputLabel}</p>
      <div className="w-[600px]">
      <Space>
      <Select value={type} onChange={setType}>
        <Option value="time">Time</Option>
        <Option value="date">Date</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
        <Option value="quarter">Quarter</Option>
        <Option value="year">Year</Option>
      </Select>
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
    </Space>
    <button className="w-4  mx-4 pt-0 text-2xl " onClick={OnEdit}>
      <SettingFilled />{" "}
    </button>
      </div>
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

export default DateTime