import * as React from "react";
import { IconProps } from "./interfaces";
import { useTheme } from "styled-components";

export const Icon: React.FC<IconProps> = ({
  className,
  viewBox,
  primary,
  fill,
  glyph,
  ...props
}) => {
  const { primary: primaryColor } = useTheme();

  return (
    <svg
      fill={primary ? primaryColor : fill ? fill : ""}
      className={className}
      viewBox={viewBox}
      {...props}
    >
      <use xlinkHref={`#${glyph}`} />
    </svg>
  );
};
