import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <main className="relative w-[1980px] h-[1028px] border shadow-lg ">
      <Nav></Nav>
      <div className="px-32 my-8 flex flex-row">
        {/* side bar */}
        <Sidebar></Sidebar>

        {/* children */}
        <div className=" ml-8 w-full">{children}</div>
      </div>
    </main>
  );
};

export default AdminLayout;
