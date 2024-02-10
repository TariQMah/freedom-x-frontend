"use client";

import { useState } from "react";
import dropdown from "../assets/img/dropdown.svg";
export const DropdownCustom = ({ props, list }: any) => {
  const [active, setActive] = useState(false);
  const [activeList, setActiveList] = useState(props);
  return (
    <div className="relative">
      <div
        className={`flex bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[50px] items-center px-3 cursor-pointer ${
          active && "rounded-bl-none rounded-br-none"
        }`}
        onClick={(e) => {
          setActive(!active);
        }}
      >
        {activeList.img && <img src={activeList.img} alt="" />}
        {activeList.mainheading && (
          <h1 className="text-[#fff] text-[16px]">{activeList.mainheading}</h1>
        )}

        <h1 className="text-[#CCCCCC] text-[16px] mx-2">{activeList.coin}</h1>
        <h1 className="text-[#CCCCCC] text-[16px] flex-1">
          {activeList.subcoin}
        </h1>
        <img src={dropdown} alt="" />
      </div>
      {active && (
        <ul className="bg-[#23284F] px-[20px] border-[1px] border-[#3958FF] rounded-bl-[8px] rounded-br-[8px] absolute w-full z-20">
          {list.map((EachList: any) => (
            <li
              className="text-[16px] font-bold text-[#EFEFEF] h-[56px] border-b-[1px] border-b-[#444869] flex items-center cursor-pointer"
              onClick={(e) => {
                setActiveList(EachList);
                setActive(false);
              }}
            >
              {EachList.value} {EachList.coin}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
