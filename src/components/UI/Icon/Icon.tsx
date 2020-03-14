import * as React from "react";
import { IconProps } from "./interfaces";

export const Icon: React.FC<IconProps> = ({
  className,
  viewBox,
  glyph,
  ...props
}) => (
  <svg className={className} viewBox={viewBox} {...props}>
    <use xlinkHref={`#${glyph}`} />
  </svg>
);
