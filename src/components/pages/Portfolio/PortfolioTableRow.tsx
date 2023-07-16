import React, { FC } from "react";

interface Props {
  title: string;
  item: string;
  isLineExist?: boolean;
}

const PortfolioTableRow: FC<Props> = ({ title, item, isLineExist = false }) => {
  if (isLineExist) {
    return (
      <tr className="">
        <td className="border-r border-b border-t border-mainColor w-32 py-2 font-semibold">
          {title}
        </td>
        <td className="border-b border-t border-mainColor px-3 py-2">{item}</td>
      </tr>
    );
  }

  return (
    <tr className="">
      <td className="border-b border-t border-mainColor w-32 py-2 font-semibold">
        {title}
      </td>
      <td className="border-b border-t border-mainColor px-3 py-2">{item}</td>
    </tr>
  );
};

export default PortfolioTableRow;
