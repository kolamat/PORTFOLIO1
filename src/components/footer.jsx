import React from "react";
// import { FaArrowUp } from "react-icons/fa";

function footer() {
  return (
    <div className=" text-white flex justify-between px-5 py-2 tracking-wide">
      <div>
        <p>
          Copyright &copy; 2023 by&nbsp;
          <strong>
            <span>M.J.K</span>
          </strong>
          &nbsp; All Rights Reserved.
        </p>
      </div>
      {/* 
      <div className="bg-[#0ef] w-4">
        <a href="#home" title="Toggle-Top">
          <FaArrowUp />
        </a>
      </div> */}
    </div>
  );
}

export default footer;
