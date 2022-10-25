import Link from "next/link";
import Image from "next/image";
import { BsJustify } from "react-icons/bs";

const NavigationMobile = () => {
  return (
    <div className="sm:hidden flex justify-between">
      <Link href={"/home"}>
        <div className="cursor-pointer">
          <Image
            src="/images/logos/trilate_logo_name_black.svg"
            alt="Trilate Logo"
            height="30px"
            width="88.11px"
          />
        </div>
      </Link>
      <div className="flex items-center">
        <BsJustify className="cursor-pointer text-2xl" />
      </div>
    </div>
  );
};

export default NavigationMobile;
