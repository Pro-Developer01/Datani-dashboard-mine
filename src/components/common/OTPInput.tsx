import { useState } from "react";
import OtpInput from "react-otp-input";

export default function OTPInput() {
  const [otp, setOtp] = useState("");

  const inputStyles:any = {
    fontSize: "2.2em",
    fontWeight: "bold",
    height: "auto ",
    maxWidth: "42px ",
    maxHeight: "42px ",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #D0D2DD",
    textAlign: 'center'

  };
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderInput={(props) => <input {...props} />}
      inputStyle={inputStyles}
      shouldAutoFocus
      skipDefaultStyles
    />
  );
}
