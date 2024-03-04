"use client";

import { useEffect, useState } from "react";
import dropdown from "../assets/img/dropdown.svg";
export const DropdownCustom = ({
  list,
  setglobalDataAccount,
  networksState = null,
  setadditionState = null,
  setnetworkSelect = null,
  setcurrentFee = null,
  setSymbol = null,
  setactiveDropdown,
  activeDropdown,
}: any) => {
  const [activeList, setActiveList] = useState(list[0]);

  useEffect(() => {
    setActiveList(list[0]);
    setglobalDataAccount(list[0]);
    if (setadditionState != null) {
      if (networksState.length > 0) {
        let additionalnetwork = networksState.filter((EachNetwork: any) => {
          if (EachNetwork.symbols[0]["id"] == list[0].symbol) {
            setcurrentFee(EachNetwork.symbols[0]["fee"]);
            return true;
          }

          return false;
        });
        setadditionState(additionalnetwork);
      }
    }
  }, [list]);

  return (
    <div className="relative">
      <div
        className={`flex bg-darkBluish w-full rounded-[12px] border-[1px] border-darkBlueGray1 h-[50px] items-center px-3 cursor-pointer ${
          activeDropdown == "dropdown" && "rounded-bl-none rounded-br-none"
        }`}
        onClick={(e) => {
          activeDropdown == "dropdown"
            ? setactiveDropdown(null)
            : setactiveDropdown("dropdown");
        }}
      >
        <h1 className="text-white text-[16px] flex-1">{activeList?.symbol}</h1>

        <img src={dropdown} alt="" />
      </div>
      {activeDropdown == "dropdown" && (
        <ul className="bg-darkBlue px-[20px] border-[1px] border-blue rounded-bl-[8px] rounded-br-[8px] absolute w-full z-20">
          {list.map((EachList: any) => (
            <li
              className="text-[16px] font-bold text-lightGray2 h-[56px] border-b-[1px] border-b-darkBlueGray flex items-center cursor-pointer"
              onClick={(e) => {
                setActiveList(EachList);
                setglobalDataAccount(EachList);
                setactiveDropdown(null);
                if (setadditionState != null) {
                  let additionalnetwork = networksState.filter(
                    (EachNetwork: any) => {
                      if (EachNetwork.symbols[0]["id"] == EachList.symbol) {
                        setnetworkSelect(EachNetwork._id);
                        setcurrentFee(EachNetwork.symbols[0]["fee"]);
                        return true;
                      }

                      return false;
                    }
                  );
                  setadditionState(additionalnetwork);
                }
                if (setSymbol) {
                  setSymbol(EachList.symbol);
                }
              }}
            >
              {EachList.symbol}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
