// import FullLogo from "@/assets/FullLogo";
// import Illustration1 from "@/assets/Illustration1";
// import Illustration2 from "@/assets/Illustration2";
// import Illustration3 from "@/assets/Illustration3";
import FullLogo from "../../assets/FullLogo";
import Illustration1 from "../../assets/Illustration1";
import Illustration2 from "../../assets/Illustration2";
import Illustration3 from "../../assets/Illustration3";

export default function LoginDashBoard(props: any) {
  const { children } = props;
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div>
        <div className="flex justify-center items-center mb-[104px]">
          <FullLogo />
        </div>

        <div className="p-8 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-lg min-w-[570px] relative">
          <div className="absolute top-[-59px]">
            <Illustration2 />
          </div>
          <div className="absolute right-[-221px] top-[-111px] ">
            <Illustration3 />
          </div>
          <div className="absolute left-[-259px] bottom-[-4px] ">
            <Illustration1 />
          </div>
          <div className="flex justify-center mb-6">
            {/* Add your logo here */}
            <span className="text-black dark:red text-4xl font-poppins font-bold break-words">
              Dashboard
            </span>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
