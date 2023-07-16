import React, { FC } from "react";

interface Props {
  title: string;
  items: string[];
  isLineExist?: boolean;
}

const PortfolioTableListRow: FC<Props> = ({
  title,
  items,
  isLineExist = false,
}) => {
  if (isLineExist) {
    return (
      <tr>
        <td className="border-r border-b border-mainColor py-2 font-semibold">
          {title}
        </td>
        <td className="border-b border-mainColor px-3 py-2">
          {items.map((item, index) => (
            <div key={`portfolio-goal-${index}`}>{item}</div>
          ))}
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td className="border-b border-mainColor py-2 font-semibold">{title}</td>
      <td className="border-b border-mainColor px-3 py-2">
        {items.map((item, index) => (
          <div key={`portfolio-goal-${index}`}>{item}</div>
        ))}
      </td>
    </tr>
  );
};

export default PortfolioTableListRow;
