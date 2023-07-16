import React from "react";

const HomeCareerBox = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-16">
      <div className="h-full flex items-end w-full mx-40 mb-40">
        <div>
          <h4 className="text-8xl font-extrabold text-mainColor mb-5 ">
            Career.
          </h4>
          <table className="table-fixed border-solid w-full">
            <tr className="">
              <td className="border-r border-b border-t border-mainColor w-80">
                hi
              </td>
              <td className="border-b border-t border-mainColor">hi</td>
            </tr>
            <tr>
              <td className="border-r border-b border-mainColor w-80">hi</td>
              <td className="border-b border-mainColor">hi</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeCareerBox;
