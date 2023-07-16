import React, { FC } from "react";

interface Props {
  text: string;
}

const SubmitButton: FC<Props> = ({ text }) => {
  return (
    <button className="w-full h-10 bg-mainColor text-backgroundColor">
      {text}
    </button>
  );
};

export default SubmitButton;
