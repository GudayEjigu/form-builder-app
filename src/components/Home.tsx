import { SetStateAction, useState, Dispatch } from "react";
import BasicInput from "./form components/inputs/BasicInput";
import SingleSelect from "./form components/select/SingleSelect";
import { Button, FloatButton, Modal, Input } from "antd";
import NavBar from "./NavBar";
import { DeleteFilled, PlusOutlined } from "@ant-design/icons";
import MultiSelect from "./form components/select/MultiSelect";
import RadioButton from "./form components/select/RadioButton";
import SwitchInput from "./form components/select/SwitchInput";
import CheckBoxInput from "./form components/select/CheckBoxInput";
import PNGOnly from "./form components/image Upload/PNGOnly";
import JPGOnly from "./form components/image Upload/JPGOnly";
import ImageInput from "./form components/image Upload/ImageInput";
import PDFOnly from "./form components/file Upload/PDFOnly";
import WORDOnly from "./form components/file Upload/WORDOnly";
import FileInput from "./form components/file Upload/FileInput";
import Editor from "./form components/Editor";
import VideoInput from "./form components/video upload/VideoInput";
import MP4Only from "./form components/video upload/MP4Only";
import DateTime from "./form components/inputs/DateTime";
import PasswordInput from "./form components/inputs/PasswordInput";
import NumberInput from "./form components/inputs/NumberInput";
import EmailInput from "./form components/inputs/EmailInput";
import { kMaxLength } from "buffer";

type IStateHome = {
  HandleAddText: Function;
  HandleSelect: Function;
  HandleDeleteText: Function;
  HandleDeleteText2: Function;
  val: [];
  Form: any;
};
interface IState {
  label: string;
  value: string;
}

const Home = () => {
  const [textClicked, setTextClicked] = useState<IStateHome["val"]>([]);
  const [textClicked2, setTextClicked2] = useState<IStateHome["val"]>([]);
  const [form, setForm] = useState<IStateHome["Form"]>([]);
  const [label, setLabel] = useState<string>("");
  const [formTitle, setFormTitle] = useState<string>("[Your Title]");
  const [formDescription, setFormDescription] = useState<string>(
    "[Your Description]...click the + button"
  );
  const [placeHolder, setPlaceHolder] = useState<string>("");
  const [options, setOptions] = useState<IState[]>([]);
  const [isMultiple, setIsMultiple] = useState<boolean>(false);
  const [change, setChange] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isRequired, setIsRequired] = useState<boolean>(false);
  const [maxLength, setMaxLength] = useState<number>(100);

  console.log(isRequired);
  const HandleRequiredChange = () => {
    setIsRequired(!isRequired);
    console.log(isRequired);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const deleteVal: any = [...form];
    deleteVal.splice(0);
    setForm(deleteVal);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const appendObject = (newObject: IState) => {
    setOptions((prevArray) => [...prevArray, newObject]);
  };

  const HandleAddText = () => {
    setForm([...form, ["Text"]]);
  };
  const HandleAddEmail = () => {
    setForm([...form, ["Email"]]);
  };
  const HandleAddNumber = () => {
    setForm([...form, ["Number"]]);
  };
  const HandleAddPassword = () => {
    setForm([...form, ["Password"]]);
  };
  const HandleAddDateTime = () => {
    setForm([...form, ["DateTime"]]);
  };

  const HandleSelect = () => {
    setForm([...form, ["Select"]]);
  };
  const HandleMultiSelect = () => {
    setForm([...form, ["MultiSelect"]]);
  };

  const HandleAddRadio = () => {
    setForm([...form, ["Radio"]]);
  };
  const HandleAddSwitch = () => {
    setForm([...form, ["Switch"]]);
  };
  const HandleAddCheckBox = () => {
    setForm([...form, ["CheckBox"]]);
  };

  const HandleAddUploadPng = () => {
    setForm([...form, ["PngOnly"]]);
  };
  const HandleAddUploadJpg = () => {
    setForm([...form, ["JpgOnly"]]);
  };
  const HandleAddUpload = () => {
    setForm([...form, ["Image"]]);
  };
  const HandleAddUploadPdf = () => {
    setForm([...form, ["Pdf"]]);
  };
  const HandleAddUploadWord = () => {
    setForm([...form, ["Word"]]);
  };
  const HandleAddUploadFile = () => {
    setForm([...form, ["File"]]);
  };
  const HandleAddEditor = () => {
    setForm([...form, ["Editor"]]);
  };
  const HandleAddVideo = () => {
    setForm([...form, ["Video"]]);
  };
  const HandleAddMp4 = () => {
    setForm([...form, ["mp4"]]);
  };
  const HandleDelete = (i: number) => {
    const deleteVal: any = [...form];
    deleteVal.splice(i, 1);
    setForm(deleteVal);
  };

  const handleFormTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormTitle(e.target.value);
  };
  const handleFormDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormDescription(e.target.value);
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/4 border-r-2">
          <NavBar
            HandleAddText={HandleAddText}
            HandleAddEmail={HandleAddEmail}
            HandleAddNumber={HandleAddNumber}
            HandleAddPassword={HandleAddPassword}
            HandleAddDateTime={HandleAddDateTime}
            HandleSelect={HandleSelect}
            HandleMultiSelect={HandleMultiSelect}
            HandleAddRadio={HandleAddRadio}
            HandleAddSwitch={HandleAddSwitch}
            HandleAddCheckBox={HandleAddCheckBox}
            HandleAddUploadPng={HandleAddUploadPng}
            HandleAddUploadJpg={HandleAddUploadJpg}
            HandleAddUpload={HandleAddUpload}
            HandleAddUploadPdf={HandleAddUploadPdf}
            HandleAddUploadWord={HandleAddUploadWord}
            HandleAddUploadFile={HandleAddUploadFile}
            HandleAddEditor={HandleAddEditor}
            HandleAddVideo={HandleAddVideo}
            HandleAddMp4={HandleAddMp4}
            setLabel={setLabel}
            setPlaceHolder={setPlaceHolder}
            options={options}
            setOptions={setOptions}
            appendObject={appendObject}
            setIsRequired={setIsRequired}
            setMaxLength={setMaxLength}
          />
        </div>
        <div className=" w-3/4 h-full  ">
          <p className="text-green-800 font-bold text-6xl my-5">
            Build Your Form
          </p>
          <div className="mx-12 pl-20 border h-[80vh] overflow-y-auto  overflow-x-auto   mb-8 p-8  bg-amber-50 shadow-xl ">
            <div className="border-b-2">
              <p className=" text-3xl font-medium mb-2 capitalize">
                {formTitle}
              </p>
              <p className=" flex text-left mb-2">
                <p className="font-medium pr-2">Description:</p>
                {formDescription}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col  ">
                {form.map((item: any, i: number) => {
                  return (
                    <div key={item}>
                      {item == "Text" ? (
                        <div className="flex  mt-6 ">
                          <div>
                            <BasicInput
                              placeHolder={placeHolder}
                              label={label}
                              isRequired={isRequired}
                              maxLength={maxLength}
                            />
                          </div>
                          <Button
                            className="w-4 bg-red-500 mx-4 pt-2 mt-6 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "Email" ? (
                        <div className="flex mt-6 border-2">
                          {" "}
                          <EmailInput
                            label={label}
                            placeHolder={placeHolder}
                            isRequired={isRequired}
                            maxLength={maxLength}
                          />
                          <Button
                            className="w-4 bg-red-500 mt-9  ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "Number" ? (
                        <div className="flex mt-6 border-2">
                          {" "}
                          <NumberInput
                            label={label}
                            placeHolder={placeHolder}
                            isRequired={isRequired}
                            maxLength={maxLength}
                          />
                          <Button
                            className="w-4 bg-red-500 mt-9  ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "Password" ? (
                        <div className="flex mt-6 border-2">
                          {" "}
                          <PasswordInput
                            label={label}
                            isRequired={isRequired}
                            maxLength={maxLength}
                          />
                          <Button
                            className="w-4 bg-red-500 mt-9  ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "DateTime" ? (
                        <div className="flex mt-6   border-4 border-dotted">
                          {" "}
                          <DateTime label={label} />
                          <Button
                            className="w-4 bg-red-500 mt-9  ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "Select" ? (
                        <div className="flex mt-6 border-2">
                          {" "}
                          <SingleSelect
                            placeHolder={placeHolder}
                            label={label}
                            options={options}
                          />
                          <Button
                            className="w-4 bg-red-500 mt-9  ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "MultiSelect" ? (
                        <div className="flex mt-6 border-2">
                          {" "}
                          <MultiSelect
                            placeHolder={placeHolder}
                            label={label}
                            options={options}
                          />
                          <Button
                            className="w-4 bg-red-500 mt-9  ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "Radio" ? (
                        <div className="flex mt-6 border-2">
                          {" "}
                          <RadioButton label={label} />
                          <Button
                            className="w-2 bg-red-500   ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "Switch" ? (
                        <div className="flex mt-6 border-2">
                          {" "}
                          <SwitchInput label={label} />
                          <Button
                            className="w-2 bg-red-500   ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "CheckBox" ? (
                        <div className="flex mt-6 border-2">
                          {" "}
                          <CheckBoxInput label={label} />
                          <Button
                            className="w-2 bg-red-500   ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "PngOnly" ? (
                        <div className="flex mt-6 border-2">
                          {" "}
                          <PNGOnly label={label} />
                          <Button
                            className="w-2 bg-red-500   ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "JpgOnly" ? (
                        <div className="flex mt-6 border-2">
                          {" "}
                          <JPGOnly label={label} />
                          <Button
                            className="w-2 bg-red-500   ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "Image" ? (
                        <div className="flex mt-6  border-2 p-6">
                          {" "}
                          <ImageInput label={label} />
                          <Button
                            className="w-2 bg-red-500   ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "Pdf" ? (
                        <div className="flex mt-6 border-2 border-2 p-6">
                          {" "}
                          <PDFOnly label={label} />
                          <Button
                            className="w-2 bg-red-500   ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "Word" ? (
                        <div className="flex mt-6  border-2 p-6">
                          {" "}
                          <WORDOnly label={label} />
                          <Button
                            className="w-2 bg-red-500   ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "File" ? (
                        <div className="flex mt-6 border-2 p-6">
                          {" "}
                          <FileInput />
                          <Button
                            className="w-2 bg-red-500   ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "Editor" ? (
                        <div className="flex mt-6 border-2  h-full py-6">
                          {" "}
                          <Editor label={label} />
                          <Button
                            className="w-2 bg-red-500   ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "Video" ? (
                        <div className="flex mt-6   h-full py-6 my-6 border-dotted border-4 p-4">
                          {" "}
                          <VideoInput label={label} />
                          <Button
                            className="w-2 bg-red-500   ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : item == "mp4" ? (
                        <div className="flex mt-6  h-full py-6 my-6 border-dotted border-4 p-4">
                          {" "}
                          <MP4Only label={label} />
                          <Button
                            className="w-2 bg-red-500   ml-2 pt-2 text-white flex justify-center "
                            shape="circle"
                            onClick={() => HandleDelete(i)}
                          >
                            <DeleteFilled />
                          </Button>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
                <div className="">
                  <FloatButton
                    icon={<PlusOutlined className=" text-green-700  " />}
                    style={{ right: 94, bottom: 94 }}
                    tooltip={<div>Create a new form.</div>}
                    onClick={showModal}
                  />
                  <Modal
                    title="Create a new form"
                    open={isModalOpen}
                    onCancel={handleCancel}
                  >
                    <p className="font-medium text-xl mt-5">Title</p>
                    <Input
                      type="text"
                      placeholder="Form title"
                      className="my-4"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleFormTitleChange(e)
                      }
                    />
                    <p className="font-medium text-xl">Description</p>
                    <Input.TextArea
                      placeholder="Description..."
                      className="my-4"
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        handleFormDescriptionChange(e)
                      }
                    />
                    <div className="flex justify-center">
                      <Button
                        type="primary"
                        className="bg-green-700 w-36"
                        onClick={handleOk}
                      >
                        Create New From
                      </Button>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
