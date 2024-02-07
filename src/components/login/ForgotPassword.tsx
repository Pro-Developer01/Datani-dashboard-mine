import { useState } from "react";
import LoginDashBoard from "./LoginDashBoard";
import { Form, Input, Modal } from "antd";
import OTPInput from "../common/OTPInput";

export default function ForgotPassword() {
  const [otpMedium, setOtpMedium] = useState<string>("email");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleResetPassword = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOtpMedium = (medium: string) => {
    setOtpMedium(medium);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
    showModal();
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LoginDashBoard>
      <div className="flex justify-center w-full">
        <div className="flex justify-center gap-2">
          <span
            className={` ${
              otpMedium === "email"
                ? "text-red underline font-extrabold"
                : "text-black font-normal"
            } text-lg cursor-pointer`}
            onClick={() => {
              handleOtpMedium("email");
            }}
          >
            {otpMedium === "email"
              ? "Email address".toUpperCase()
              : "Email address"}
          </span>
          <span>/</span>
          <span
            className={` ${
              otpMedium === "phone"
                ? "text-red underline font-extrabold"
                : "text-black font-normal"
            } text-lg cursor-pointer`}
            onClick={() => {
              handleOtpMedium("phone");
            }}
          >
            {otpMedium === "phone"
              ? "Phone number".toUpperCase()
              : "Phone number"}
          </span>
        </div>
      </div>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onSubmit={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="mt-5">
          <span className="text-lightGrey text-2xl font-poppins font-normal break-words">
            {otpMedium === "email" ? "Email" : "Phone number"}:
          </span>
        </div>
        <Form.Item
          name={otpMedium === "email" ? "email" : "number"}
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            type={otpMedium === "email" ? "email" : "number"}
            className="min-h-[55px] text-2xl text-lightGrey  rounded-lg border border-inputBorder"
          />
        </Form.Item>
        <Form.Item className="mt-5 flex justify-center">
          <button
            type="submit"
            className="min-w-[415px] min-h-[55px] bg-buttonGrey   "
          >
            <span className="text-white text-base font-poppins font-bold break-words">
              Submit
            </span>
          </button>
        </Form.Item>
      </Form>

      <Modal
        title="Enter PIN"
        open={isModalOpen}
        onCancel={handleCancel}
        className="max-w-[360px]"
        footer={null}
      >
        <div className="flex mt-4 flex-col gap-2 items-start">
          <p>Pin:</p>
          <span className="self-center">
          <OTPInput />
          </span>
          <div className="w-full flex justify-center mt-4 ">
            <button className="w-auto px-[4rem] py-4 rounded-md bg-[#129219]" onClick={handleResetPassword}>
              <span className="text-white text-base font-poppins font break-words">
                Reset
              </span>
            </button>
          </div>
        </div>
      </Modal>
    </LoginDashBoard>
  );
}
