import React, { FC } from "react";

interface Props {
  width?: string;
  height?: string;
}

const ArrowIcon: FC<Props> = ({ width = "324", height = "146" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 324 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M243.559 3.05607C245.517 1.09927 248.171 0 250.939 0C253.707 0 256.361 1.09927 258.318 3.05607L320.944 65.6834C322.901 67.6408 324 70.2953 324 73.063C324 75.8308 322.901 78.4852 320.944 80.4426L258.318 143.07C256.35 144.971 253.713 146.023 250.977 146C248.24 145.976 245.622 144.878 243.687 142.943C241.751 141.008 240.654 138.39 240.63 135.653C240.606 132.916 241.658 130.279 243.559 128.311L288.368 83.5009H10.5C7.73178 83.5009 5.07693 82.4012 3.11949 80.4437C1.16206 78.4862 0.0623779 75.8313 0.0623779 73.063C0.0623779 70.2947 1.16206 67.6398 3.11949 65.6823C5.07693 63.7248 7.73178 62.6251 10.5 62.6251H288.368L243.559 17.8153C241.603 15.8579 240.503 13.2034 240.503 10.4357C240.503 7.66791 241.603 5.01347 243.559 3.05607Z"
        fill="#2B99FF"
      />
    </svg>
  );
};

export default ArrowIcon;