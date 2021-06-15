import NextHead from "next/head";
import { APPNAME } from "@constants/main";

interface Props {
  title?: string;
  subtitle?: string;
}

const Head: React.FC<Props> = ({ title, subtitle }: Props) => (
  <NextHead>
    <meta name="theme-color" content="#000000" />
    <title>
      {title
        ? `${subtitle ? `${subtitle} - ` : ""}${title} | ${APPNAME}`
        : APPNAME}
    </title>
  </NextHead>
);

export default Head;
