import { useState } from "react";
import plus from "../assets/img/plus.svg";
import minus from "../assets/img/minus.svg";
export const FaqInner = () => {
  const [active, setActive] = useState(false);
  return (
    <li
      className={`border-[1px] border-[#3C3E56] bg-[#171B35] rounded-[12px] w-full ${
        active === true && "bg-[#171B35]"
      }`}
    >
      <div
        className="head px-[20px] py-[16px] flex items-center cursor-pointer justify-between"
        onClick={(e) => {
          setActive(!active);
        }}
      >
        <h1 className="text-[#EFEFEF] font-semibold text-[18px]">
          Amet minim mollit non deserunt ullamco.
        </h1>
        {active ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
      </div>
      {active && (
        <p className="px-[20px] mb-5 text-[#fff] text-[14px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </p>
      )}
    </li>
  );
};
