"use client";

import { useEffect, useState } from "react";
import dropdown from "../assets/img/dropdown.svg";
export const WithdrawNetwork = ({
  list,
  activeDropdown,
  setactiveDropdown,
}: any) => {
  const [active, setActive] = useState(false);
  const [activeList, setActiveList] = useState(list[0]);

  useEffect(() => {
    if (list.length > 0) {
      setActiveList(list[0]);
    }
  }, [list]);
  return (
    <div className="relative">
      <div
        className={`flex bg-darkBluish w-full rounded-[12px] border-[1px] border-darkBlueGray1 h-[50px] items-center px-3 cursor-pointer ${
          activeDropdown == "withdrawNetwork" &&
          "rounded-bl-none rounded-br-none"
        }`}
        onClick={(e) => {
          activeDropdown == "withdrawNetwork"
            ? setactiveDropdown(null)
            : setactiveDropdown("withdrawNetwork");
        }}
      >
        <h1 className="text-white text-[16px] flex-1">{activeList?._id}</h1>

        <img src={dropdown} alt="" />
      </div>
      {activeDropdown == "withdrawNetwork" && (
        <ul className="bg-darkBlue px-[20px] border-[1px] border-blue rounded-bl-[8px] rounded-br-[8px] absolute w-full z-20">
          {list.map((EachList: any) => (
            <li
              className="text-[16px] font-bold text-lightGray2 h-[56px] border-b-[1px] border-b-darkBlueGray flex items-center cursor-pointer"
              onClick={(e) => {
                setActiveList(EachList);
                setactiveDropdown(null);
              }}
            >
              {EachList._id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
