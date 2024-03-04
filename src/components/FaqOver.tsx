import { useState } from "react";
import plus from "../assets/img/plus.svg";
import minus from "../assets/img/minus.svg";
import { FaqInner } from "./FaqInner";
export const FaqOver = ({ EachFaq }: any) => {
  const [active, setActive] = useState(true);
  return (
    <li
      className={`border-[1px] border-darkGray rounded-[12px] w-full ${
        active === true && "bg-darkBlue"
      }`}
    >
      <div
        className="head px-[20px] py-[16px] flex items-center cursor-pointer justify-between"
        onClick={(e) => {
          setActive(!active);
        }}
      >
        <h1 className="text-lightGray2 capitalize font-semibold text-[18px]">
          {EachFaq.heading}
        </h1>
        {active ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
      </div>

      {active && (
        <>
          {EachFaq.subpara && (
            <h1 className="text-lightGray2 px-5 font-semibold text-[14px]">
              {EachFaq.subpara}
            </h1>
          )}
          <div className="px-[20px] py-[16px] flex flex-col gap-6">
            {EachFaq.list.map((EachList: any) => (
              <FaqInner EachList={EachList} />
            ))}
          </div>
        </>
      )}
    </li>
  );
};
