import React, { FC } from "react";

interface Props {
  width?: string;
  height?: string;
}

const DownArrowIcon: FC<Props> = ({ width = "50", height = "24" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L24.75 21.75L47.5 2"
        stroke="#969696"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DownArrowIcon;
