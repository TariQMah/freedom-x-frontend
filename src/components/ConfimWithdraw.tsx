import done from "../assets/img/done.svg";
import circleSuccess from "../assets/img/gradient/circle-success.svg";

export const ConfimWithdraw = ({ message }: any) => {
  return (
    <div className="px-[16px] py-[12px] border-[1px] border-green bg-darkBlue rounded-[12px] flex w-[343px] flex-col items-center justify-center text-center overflow-hidden  fixed bottom-10 left-1/2 -translate-x-1/2 sm:w-[90%]">
      <img src={circleSuccess} alt="" className="absolute bottom-0" />

      <img src={done} alt="" />
      <h1 className="text-white  mt-4 mb-1">Withdrawal Requested</h1>
      <p className="text-[#C8C5C5] text-[16px] ">{message}</p>
    </div>
  );
};
