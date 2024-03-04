import logo from "../assets/img/logo.svg";
import notifyNan from "../assets/img/notify-nan.svg";
import burger from "../assets/img/burger.svg";
import burgeractive from "../assets/img/burger-active.svg";

import { Link } from "react-router-dom";
import { useState } from "react";
export const Header = ({ active, page }: any) => {
  const [navactive, setNavActive] = useState(false);

  return (
    <header className="w-full sticky top-0 z-[99999] bg-darkBluish h-[70px] border-b-[1px] border-b-darkBlueGray1">
      {navactive && (
        <ul className="bg-darkBluish px-[20px] border-[1px] border-blue rounded-bl-[8px] right-[3px] hidden 1lg:block py-[16px] top-[70px] w-[315px] rounded-br-[8px] absolute z-50 ">
          <Link
            to="/Bet"
            className={`text-white font-semibold text-[16px] h-[58px] px-4 justify-center flex items-center border-b-[1px] border-b-darkGray1 ${
              active === 1 &&
              "bg-darkBlue1 rounded-lg border-b-orange border-[1px] border-orange"
            }`}
          >
            Bet History
          </Link>
          <Link
            to="/analytics"
            className={`text-white font-semibold text-[16px] h-[58px] px-4 justify-center flex items-center border-b-[1px] border-b-darkGray1 ${
              active === 2 &&
              "bg-darkBlue1 rounded-lg border-b-orange border-[1px] border-orange"
            }`}
          >
            Analytics
          </Link>
          <Link
            to="/history"
            className={`text-white font-semibold text-[16px] h-[58px] px-4 justify-center flex items-center  border-b-[1px] border-b-darkGray1 ${
              active === 3 &&
              "bg-darkBlue1 rounded-lg border-b-orange border-[1px] border-orange"
            }`}
          >
            Account History
          </Link>
          <Link
            to="/deposit"
            className={`text-white font-semibold text-[16px] h-[58px] px-4 justify-center flex border-b-[1px] border-b-darkGray1 items-center ${
              active === 4 &&
              "bg-darkBlue1 rounded-lg border-b-orange border-[1px] border-orange"
            }`}
          >
            Deposit
          </Link>
          <Link
            to="/withdraw"
            className={`text-white font-semibold text-[16px] h-[58px] px-4 justify-center flex  border-b-[1px] border-b-darkGray1 items-center ${
              active === 5 &&
              "bg-darkBlue1 rounded-lg border-b-orange border-[1px] border-orange"
            }`}
          >
            Withdraw
          </Link>
          <Link
            to="/settings"
            className={`text-white font-semibold text-[16px] h-[58px] px-4 justify-center flex border-b-[1px] border-b-darkGray1 items-center ${
              active === 6 &&
              "bg-darkBlue1 rounded-lg border-b-orange border-[1px] border-orange"
            }`}
          >
            Account Settings
          </Link>
          <Link
            to="/faq"
            className={`text-white font-semibold text-[16px] h-[58px] px-4 justify-center flex border-b-[1px] border-b-darkGray1 items-center ${
              active === 7 &&
              "bg-darkBlue1 rounded-lg border-b-orange border-[1px] border-orange"
            }`}
          >
            FAQ
          </Link>
          <Link
            to="/"
            className="text-white font-semibold text-[16px] h-[58px] px-4 justify-center flex items-center "
          >
            Logout
          </Link>
        </ul>
      )}
      <div className="max-w-[1140px] mx-auto h-full w-[90%] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={logo} alt="" className="w-[35px] h-[50px]" />
          </Link>
          <img src={notifyNan} alt="" className="cursor-pointer" />
        </div>
        <h1 className="text-white font-semibold hidden 1lg:block lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {page}
        </h1>
        <div className="hidden 1lg:block">
          {navactive ? (
            <img
              src={burgeractive}
              alt=""
              onClick={(e) => {
                setNavActive(!navactive);
              }}
            />
          ) : (
            <img
              src={burger}
              alt=""
              onClick={(e) => {
                setNavActive(!navactive);
              }}
            />
          )}
        </div>
        <div className="flex items-center gap-3 1lg:hidden">
          <nav className="flex items-center h-[52px] border-[1px] border-darkBlueGray1 rounded-full px-1">
            <Link
              to="/Bet"
              className={`text-white font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 1 &&
                "bg-darkBlue1 rounded-full border-[1px] border-orange"
              }`}
            >
              Bet History
            </Link>
            <Link
              to="/analytics"
              className={`text-white font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 2 &&
                "bg-darkBlue1 rounded-full border-[1px] border-orange"
              }`}
            >
              Analytics
            </Link>
            <Link
              to="/history"
              className={`text-white font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 3 &&
                "bg-darkBlue1 rounded-full border-[1px] border-orange"
              }`}
            >
              Account History
            </Link>
            <Link
              to="/deposit"
              className={`text-white font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 4 &&
                "bg-darkBlue1 rounded-full border-[1px] border-orange"
              }`}
            >
              Deposit
            </Link>
            <Link
              to="/withdraw"
              className={`text-white font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 5 &&
                "bg-darkBlue1 rounded-full border-[1px] border-orange"
              }`}
            >
              Withdraw
            </Link>
            <Link
              to="/settings"
              className={`text-white font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 6 &&
                "bg-darkBlue1 rounded-full border-[1px] border-orange"
              }`}
            >
              Account Settings
            </Link>
            <Link
              to="/faq"
              className={`text-white font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 7 &&
                "bg-darkBlue1 rounded-full border-[1px] border-orange"
              }`}
            >
              FAQ
            </Link>
          </nav>
          <nav className="flex items-center h-[52px] border-[1px] border-darkBlueGray1 rounded-full px-1">
            <Link
              onClick={(e) => {
                window.localStorage.removeItem("token");
              }}
              to="/"
              className="text-white font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center "
            >
              Logout
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
