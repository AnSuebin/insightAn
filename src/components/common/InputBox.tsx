import React, { FC } from "react";

interface Props {
  placeHolder?: string;
  value?: string;
}

const InputBox: FC<Props> = ({ placeHolder, value }) => {
  return (
    <input
      className="w-full bg-transparent border-solid border-mainColor border-b-2 px-2 py-4"
      placeholder={placeHolder}
      value={value}
    ></input>
  );
};

export default InputBox;
