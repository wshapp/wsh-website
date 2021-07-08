import React from "react";
import { APPNAME } from "@constants/main";
import { NextSeo, NextSeoProps } from "next-seo";

interface Props extends NextSeoProps {
  title?: string;
  subtitle?: string;
}

const Head: React.FC<Props> = ({ title, subtitle, ...props }: Props) => {
  const finalTitle = title
    ? `${subtitle ? `${subtitle} - ` : ""}${title} | ${APPNAME}`
    : APPNAME;

  return <NextSeo title={finalTitle} {...props} />;
};

export default Head;
