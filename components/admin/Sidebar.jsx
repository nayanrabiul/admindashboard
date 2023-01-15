import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col p-2  items-start w-[254px] h-[831px] rounded-lg shadow-3xl">
        {/* profile section */}
        <div className="w-full rounded-lg bg-[#F1FBF2] flex flex-row items-center p-8">
          <Image
            className="w-11 h-11 rounded-full"
            src={"/sidebar/face.png"}
            width={64}
            height={64}
            alt={"Profile Pic"}
          ></Image>
          <div className="pl-2">
            <h3 className="text-[#006838] font-semibold">Martha Uilson</h3>
            <h4>uilson@email.com</h4>
          </div>
        </div>

        {/* dashbord section */}
        <div className="flex flex-row items-center p-8 ">
          <Image
            className="w-8 h-8 rounded-full"
            src={"/sidebar/dashboard.svg"}
            width={64}
            height={64}
            alt={"Profile Pic"}
          ></Image>
          <h3 className="font-semibold   text-[#FF8500] pl-4"> Dashboard</h3>
        </div>

        {/* Banking  */}
        <div className="flex flex-col items-start px-8 space-y-4">
          <h4 className="tracking-widest text-gray-400 font-semibold">
            BANKING
          </h4>
          <Link href={"#"}>
            <div className="flex flex-row justify-center items-center">
              <Image
                src="/sidebar/myaccounts.svg"
                alt="banking svg"
                className="h-8 w-8 fill-orange-400"
                height={1}
                width={1}
              />
              <h3 className="ml-1 text-gray-400 font-semibold hover:text-orange-400">My Accounts </h3>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex flex-row justify-center items-center">
              <Image
                src="/sidebar/mysavings.svg"
                alt="banking svg"
                className="h-8 w-8"
                height={1}
                width={1}
              />
              <h3 className="ml-1 text-gray-400 font-semibold hover:text-orange-400">My Savings </h3>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex flex-row justify-center items-center">
              <Image
                src="/sidebar/mycards.svg"
                alt="banking svg"
                className="h-8 w-8"
                height={1}
                width={1}
              />
              <h3 className="ml-1 text-gray-400 font-semibold hover:text-orange-400">My Cards </h3>
            </div>
          </Link>
        </div>

        {/* Insurance  */}
        <div className="flex flex-col items-start px-8 my-10 space-y-4">
          <h4 className="tracking-widest text-gray-400 font-semibold">
            INSURANCE
          </h4>
          <Link href={"#"}>
            <div className="flex flex-row justify-center items-center">
              <Image
                src="/sidebar/myhome.svg"
                alt="banking svg"
                className="h-8 w-8"
                height={1}
                width={1}
              />
              <h3 className="ml-1 text-gray-400 font-semibold hover:text-orange-400">My Home </h3>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex flex-row justify-center items-center">
              <Image
                src="/sidebar/mymobility.svg"
                alt="banking svg"
                className="h-8 w-8"
                height={1}
                width={1}
              />
              <h3 className="ml-1 text-gray-400 font-semibold hover:text-orange-400">My Mobility </h3>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex flex-row justify-center items-center">
              <Image
                src="/sidebar/mytraveling.svg"
                alt="banking svg"
                className="h-8 w-8"
                height={1}
                width={1}
              />
              <h3 className="ml-1 text-gray-400 font-semibold hover:text-orange-400">
                My Traveling{" "}
              </h3>
            </div>
          </Link>
        </div>

        {/* Insurance  */}
        <div className="flex flex-col items-start px-8 space-y-4">
          <h4 className="tracking-widest text-gray-400 font-semibold">
            TRAVEL
          </h4>
          <Link href={"#"}>
            <div className="flex flex-row justify-center items-center">
              <Image
                src="/sidebar/mybooking.svg"
                alt="banking svg"
                className="h-8 w-8"
                height={1}
                width={1}
              />
              <h3 className="ml-1 text-gray-400 font-semibold hover:text-orange-400">My Bookings </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
