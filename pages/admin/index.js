import AdminLayout from "@/components/admin/AdminLayout";
import dynamic from "next/dynamic";

const InsuranceChart = dynamic(
  () => import("@/components/admin/InsuranceChart"),
  {
    ssr: false,
  }
);
import Chart from "@/components/admin/YarChart";
import Image from "next/image";
import React from "react";

const Admin = () => {
  return (
    <AdminLayout>
      {/* upper card  */}
      <div>
        <div className="flex flex-row  items-start gap-8">
          <div className="flex-1 flex flex-col p-5 shadow-3xl">
            <h1 className="font-bold text-orange-400"> 05</h1>
            <p>Total Accoutns</p>
          </div>
          <div className="flex-1 flex flex-col p-5 shadow-3xl">
            <h1 className="font-bold text-orange-400"> 02</h1>
            <p>Total Savings Accounts</p>
          </div>
          <div className="flex-1 flex flex-col p-5 shadow-3xl">
            <h1 className="font-bold text-orange-400"> 03</h1>
            <p>Total Cards</p>
          </div>
          <div className="flex-1 flex flex-col p-5 shadow-3xl">
            <h1 className="font-bold text-orange-400"> 07</h1>
            <p>Total Insurance</p>
          </div>
        </div>
      </div>
      {/* main body */}
      <div className="mt-8 flex flex-row items-start gap-8">
        <div className="flex flex-col items-start gap-8 shadow-3xl ">
          <div className="px-8">
            <h1 className="text-[#646464] pb-4">This year Overview.</h1>
            <Chart />
            <div className="w-full flex justify-center space-x-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#19A526] mr-2"></div>
                <p className="mr-2">Total Revenue:</p>

                <Image
                  src={"/body/f2.svg"}
                  className="w-[10px] h-[13px]"
                  width={12}
                  height={12}
                  alt={"f"}
                ></Image>
                <h3>53,00,000</h3>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#FF8500] mr-2"></div>
                <p className="mr-2">Total Expanse:</p>

                <Image
                  src={"/body/f2.svg"}
                  className="w-[10px] h-[13px]"
                  width={12}
                  height={12}
                  alt={"f"}
                ></Image>
                <h3>17,00,000</h3>
              </div>
            </div>
          </div>

          <div className="px-8">
            <h1 className="text-[#646464]">Insurance</h1>
            <div className="flex gap-8">
              <InsuranceChart></InsuranceChart>
              <div className="flex flex-col items-start px-5 gap-8">
                <div className="flex flex-col justify-center items-center p-5 w-[300px] h-[85px] bg-[#F1FBF2] rounded-md">
                  <div className="flex justify-center items-center">
                    <Image
                      src={"/body/f4.svg"}
                      className="w-[18px] h-[18px]"
                      width={12}
                      height={12}
                      alt={"f"}
                    ></Image>
                    <h1>23,45,000</h1>
                  </div>
                  <h4>Total Insurances cost</h4>
                </div>
                <div className="flex flex-col justify-center items-center p-5 w-[300px] h-[85px] bg-[#FFF4E7] rounded-md">
                  <div className="flex justify-center items-center">
                    <Image
                      src={"/body/f4.svg"}
                      className="w-[18px] h-[18px]"
                      width={12}
                      height={12}
                      alt={"f"}
                    ></Image>
                    <h1>23,45,000</h1>
                  </div>
                  <h4>Upcoming Insurances cost</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-5  flex flex-col items-start space-y-8 shadow-3xl">
          <h2 className="mb-4">My Cards</h2>
          <div className="w-[200px] h-[128px] bg-[#FFF3F7] flex flex-col items-start rounded-md">
            <div className=" relative w-full h-[56px] px-4 py-2">
              <h4 className="text-[#986E6E] font-semibold">JOHN</h4>
              <p className="text-[#927F7F]">AC: 90876545123</p>
              {/* for image  */}
              <div className="absolute top-2 right-4">
                <Image
                  src={"/body/c1.svg"}
                  className="w-[16px] h-[16px]"
                  width={12}
                  height={12}
                  alt={"f"}
                ></Image>
              </div>
              <div className="absolute top-2 right-2">
                <Image
                  src={"/body/c2.svg"}
                  className="w-[16px] h-[16px]"
                  width={12}
                  height={12}
                  alt={"f"}
                ></Image>
              </div>
            </div>
            <div className="w-full h-[72px] bg-[#FBE9EF] p-4 rounded-b-md">
              <div className="flex items-center">
                <Image
                  src={"/body/f1.svg"}
                  className="w-[10px] h-[13px]"
                  width={12}
                  height={12}
                  alt={"f"}
                ></Image>
                <h3 className="text-[#986E6E]">23,45,000</h3>
              </div>
              <p className="text-[#927F7F]">Total balance</p>
            </div>
          </div>
          <div className="w-[200px] h-[128px] bg-[#F3F8FF] flex flex-col items-start rounded-md">
            <div className=" relative w-full h-[56px] px-4 py-2">
              <h4 className="text-[#6E7E98] font-semibold">Martha</h4>
              <p className="text-[#927F7F]">AC: 90876545123</p>
              {/* for image  */}
              <div className="absolute top-2 right-4">
                <Image
                  src={"/body/c1.svg"}
                  className="w-[16px] h-[16px]"
                  width={12}
                  height={12}
                  alt={"f"}
                ></Image>
              </div>
              <div className="absolute top-2 right-2">
                <Image
                  src={"/body/c2.svg"}
                  className="w-[16px] h-[16px]"
                  width={12}
                  height={12}
                  alt={"f"}
                ></Image>
              </div>
            </div>
            <div className="w-full h-[72px] bg-[#E9F1FB] p-4 rounded-b-md">
              <div className="flex items-center ">
                <Image
                  src={"/body/f2.svg"}
                  className="w-[10px] h-[13px]"
                  width={12}
                  height={12}
                  alt={"f"}
                ></Image>
                <h3 className="text-[#6E7E98]">33,45,000</h3>
              </div>
              <p className="text-[#7F8B92]">Total balance</p>
            </div>
          </div>
          <div className="w-[200px] h-[128px] bg-[#F7FFF3] flex flex-col items-start rounded-md">
            <div className=" relative w-full h-[56px] px-4 py-2">
              <h4 className="text-[#8F986E] font-semibold">Leo</h4>
              <p className="text-[#8F986E]">AC: 90876545123</p>
              {/* for image  */}
              <div className="absolute top-2 right-4">
                <Image
                  src={"/body/c1.svg"}
                  className="w-[16px] h-[16px]"
                  width={12}
                  height={12}
                  alt={"f"}
                ></Image>
              </div>
              <div className="absolute top-2 right-2">
                <Image
                  src={"/body/c2.svg"}
                  className="w-[16px] h-[16px]"
                  width={12}
                  height={12}
                  alt={"f"}
                ></Image>
              </div>
            </div>
            <div className="w-full h-[72px] bg-[#F5FBE9] p-4 rounded-b-md">
              <div className="flex items-center ">
                <Image
                  src={"/body/f3.svg"}
                  className="w-[10px] h-[13px]"
                  width={12}
                  height={12}
                  alt={"f"}
                ></Image>
                <h3 className="text-[#8F986E]">53,45,000</h3>
              </div>
              <p className="text-[#8F986E]">Total balance</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Admin;
