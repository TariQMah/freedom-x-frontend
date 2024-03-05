import logo from "../../assets/img/logo.svg";
import google from "../../assets/img/google.svg";
import placeholder from "../../assets/img/video-placeholder.svg";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { account } from "../../assets/axios/Account";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
export const Login = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  useEffect(() => {
    let token = window.localStorage.getItem("token");

    if (token) {
      navigate("/bet");
    }
  }, []);
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      {loading && <Loader />}
      <div className="w-[90%] max-w-[1158px] p-[30px] bg-darkBlue rounded-[24px] grid grid-cols-[1fr_601px] gap-6 items-center border-[1px] border-darkBlueGray 1lg:grid-cols-1 sm:p-4">
        <div className="sm:flex sm:flex-col sm:items-center">
          <img src={logo} alt="" />
          <h1 className="text-[30px] md:text-center mt-8 font-bold text-lightGray2">
            Welcome to Freedom X
          </h1>
          <p className="text-lightGray2 p-login sm:text-center text-[17px] mt-5 mb-8">
            We create returns for your money using Sports Betting, in a
            transparent and analytical way. This is not leasure nor gambling.
          </p>

          <div className="relative">
            <GoogleOAuthProvider clientId="1615663126-la4qosnrjjn1f34h9q518vqdidcj3a7f.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse: any) => {
                  setloading(true);
                  account.loginUser(
                    credentialResponse["credential"],
                    setloading,
                    navigate
                  );
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>

          <button className="flex items-center gap-2 w-[215px] h-[45px] bg-darkBluish border-[2px] border-blue text-lightGray2 justify-center rounded-full text-[17px] sm:w-full">
            <img src={google} alt="" />
            Sign in with Google
          </button>
        </div>
        <img src={placeholder} alt="" className="w-full" />
      </div>
    </div>
  );
};
