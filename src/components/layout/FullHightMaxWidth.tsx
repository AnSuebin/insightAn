import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const FullHightMaxWidth: FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full max-w-screen-2xl m-auto">{children}</div>
  );
};

export default FullHightMaxWidth;
