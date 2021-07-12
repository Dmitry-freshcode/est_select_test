import React, { ImgHTMLAttributes } from "react";
import { ReactComponent as Logo } from "./chevron-down.svg";

type Props = ImgHTMLAttributes<HTMLImageElement>;

const ArrowDownLogo: React.FC<Props> = (props) => (
  <div {...props}>
    <Logo />
  </div>
);

export default ArrowDownLogo;
