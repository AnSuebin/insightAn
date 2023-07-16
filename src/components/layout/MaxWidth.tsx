import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const MaxWidth: FC<Props> = ({ children }) => {
  return <div className="w-full max-w-screen-2xl m-auto">{children}</div>;
};

export default MaxWidth;
