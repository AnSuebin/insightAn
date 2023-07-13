import React from "react";
import MaxWidth from "./MaxWidth";

const Footer = () => {
  return (
    <footer className="w-full h-60 relative">
      <MaxWidth>
        <div className="w-full flex flex-col justify-center relative p-5">
          <div className="text-right w-full z-10 text-backgroundColor text-xs">
            다음을 위해 고민하고
            <br />
            깨달음을 얻어
            <br />한 발짝씩 나아 가는 개발자
          </div>
          <div className="text-right z-10 text-backgroundColor mt-2 text-base font-bold">
            프론트엔드 개발자 안수빈
          </div>
        </div>
      </MaxWidth>
      <div className="absolute bottom-0 w-full h-full bg-mainColor"></div>
    </footer>
  );
};

export default Footer;
