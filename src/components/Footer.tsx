import { Link } from "@mui/material";
import Send from "../assets/img/send-icon.svg";

const Footer = () => {
  return (
    <div className="bg-darkBluish py-2 mt-8">
      <div className="mx-auto max-w-[1140px]  px-4">
        <div className="flex justify-end items-center gap-2 text-white">
          <p>Connect with us:</p>
          <div className="p-2 bg-blue rounded-full flex justify-center items-center">
            <Link
              href="https://t.me/sbff_open"
              target="_blank"
              className="text-white "
            >
              <img src={Send} alt="" className="text-white h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
