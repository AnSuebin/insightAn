import React, { Children, FC } from "react";

interface Props {
  children: React.ReactNode;
}

const MaxWidth: FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full h-full max-w-screen-2xl m-auto">{children}</div>
  );
};

export default MaxWidth;
