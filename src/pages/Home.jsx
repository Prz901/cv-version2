import React from "react";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 relative">
        {/* <div className='bg-danger-500 w-32 h-32'></div> */}
        {/* <div className="relative w-full flex justify-center items-start ">
          <h1 className="text-gray-200 z-10 absolute bottom-70">Felipe Perozo</h1>
        </div> */}
        <div className="geeks flex items-center justify-center cursor-pointer ">
          <h1 className=" text-2xl font-light ">Felipe Perozo</h1>
        </div>
      </div>
      <div class="background-container">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt=""
        />
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div>
      </div>
    </>
  );
}
