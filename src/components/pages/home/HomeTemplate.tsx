import MaxWidth from "@/components/layout/MaxWidth";
import React, { FC, ReactElement } from "react";

interface Props {
  Intro: ReactElement;
  Overview: ReactElement;
  Portfolio: ReactElement;
  Career: ReactElement;
}

const HomeTemplate: FC<Props> = ({ Intro, Overview, Portfolio, Career }) => {
  return (
    <MaxWidth>
      {Intro}
      {Overview}
      {Portfolio}
      {Career}
    </MaxWidth>
  );
};

export default HomeTemplate;
