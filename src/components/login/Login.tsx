import { Form, Input, Checkbox } from "antd";
import LoginDashBoard from "./LoginDashBoard";
// import { isEmpty } from "lodash";
// import loginUser from "@/apis/loginApis/loginEndpoint";
// import loginHandler from "@/utils/loginHandler";

import loginUser from "../../apis/loginApis/loginEndpoint";
import loginHandler from "../../utils/loginHandler";

const Login = () => {
  const onFinish = (values: any) => {
    userLoginHandle(values);
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log("Failed:", errorInfo);
  };

  const userLoginHandle = async (payload: any) => {
    try {
      if (payload) throw new Error("Enter valid user data.");
      const res = await loginUser(payload);
      if (!res.status) throw new Error(res.error);
      localStorage.setItem("token", res.data?.jwt);
      loginHandler()
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <>
      <LoginDashBoard>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onSubmit={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="">
            <span className="text-lightGrey text-2xl font-poppins font-normal break-words">
              Email:
            </span>
          </div>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              type="email"
              className="min-h-[55px] text-2xl text-lightGrey  rounded-lg border border-inputBorder"
            />
          </Form.Item>

          <div className="flex justify-between items-center w-full">
            <span className="text-lightGrey text-2xl font-poppins font-normal break-words">
              Password:
            </span>
            <a
              className="text-inputBorder text-base font-poppins font-light break-words hover:text-inputBorder"
              href="/forgot-password"
            >
              Forgot Password?
            </a>
          </div>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your   password!" },
            ]}
          >
            <Input.Password className="min-h-[55px] text-2xl text-lightGrey rounded-lg border border-inputBorder" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="loginCheckbox text-inputBorder text-base font-poppins font-light break-words hover:text-inputBorder">
              Remember Password
            </Checkbox>
          </Form.Item>

          <Form.Item className="mt-5 flex justify-center">
            <button
              type="submit"
              className="min-w-[415px] min-h-[55px] bg-buttonGrey   "
            >
              <span className="text-white text-base font-poppins font-bold break-words">
                Login
              </span>
            </button>
          </Form.Item>
        </Form>
      </LoginDashBoard>
      <style>{`
      .loginCheckbox .ant-checkbox-checked .ant-checkbox-inner{
        border: 1px #9F9F9F solid;
        background-color:transparent;
      }
      // .loginCheckbox .ant-checkbox-checked .ant-checkbox-inner:hover{
      //   border: 1px #9F9F9F solid !important;
      //   background-color:transparent !important;
      // }
      .loginCheckbox .ant-checkbox .ant-checkbox-inner:after{
        border: 2px #9F9F9F solid;
        border-top: none;
    border-left: none;
      }
      `}</style>
    </>
  );
};

export default Login;
