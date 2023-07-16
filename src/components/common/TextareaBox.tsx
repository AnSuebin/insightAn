import React, { FC } from "react";

interface Props {
  placeHolder?: string;
  value?: string;
}

const TextareaBox: FC<Props> = ({ placeHolder, value }) => {
  return (
    <textarea
      className="w-full h-full resize-none bg-transparent border-solid border-mainColor border-2 px-2 py-4 mt-4"
      placeholder={placeHolder}
      value={value}
    ></textarea>
  );
};

export default TextareaBox;
