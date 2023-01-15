import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full px-32 py-3 flex flex-row justify-between items-center shadow-3xl ">
      <Image
        src="/nav/logo.svg"
        className="h-14 w-48"
        height={1}
        width={1}
      ></Image>

      <div className=" flex flex-row justify-center items-center space-x-8">
        <Link href={"#"}>
          <div className="flex flex-row justify-center items-center">
            <Image
              src="/nav/banking.svg"
              alt="banking svg"
              className="h-8 w-8"
              height={1}
              width={1}
            />
            <h3 className="ml-1 font-semibold text-[#006838] hover:text-orange-400">Banking </h3>
          </div>
        </Link>
        <Link href={"#"}>
          <div className="flex flex-row justify-center items-center">
            <Image
              src="/nav/insurance.svg"
              alt="insurance svg"
              className="h-8 w-8"
              height={1}
              width={1}
            />
            <h3 className="ml-1 font-semibold text-[#006838] hover:text-orange-400">Insurance </h3>
          </div>
        </Link>

        <Link href={"#"}>
          <div className="flex flex-row justify-center items-center">
            <Image
              src="/nav/travel.svg"
              alt="travel svg"
              className="h-8 w-8"
              height={1}
              width={1}
            />
            <h3 className="ml-1 font-semibold text-[#006838] hover:text-orange-400">Travel </h3>
          </div>
        </Link>
        <Link href={"#"}>
          <div className="flex flex-row justify-center items-center">
            <Image
              src="/nav/myprofile.svg"
              alt="myprofile svg"
              className="h-8 w-8"
              height={1}
              width={1}
            />
            <h3 className="ml-1 font-semibold text-[#006838] hover:text-orange-400">My Profile </h3>
          </div>
        </Link>
      </div>

      <Image
        src="/nav/search.svg"
        alt="search svg"
        className="h-8 w-8"
        height={1}
        width={1}
      />
    </nav>
  );
};

export default Nav;
