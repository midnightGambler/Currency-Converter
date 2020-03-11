import * as React from "react";

interface IconProps {
  glyph: string;
  viewBox: string;
  width: string;
  height: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ className, viewBox, glyph, ...props }) => (
  <svg className={className} viewBox={viewBox} {...props}>
    <use xlinkHref={`#${glyph}`} />
  </svg>
);

export { Icon };
