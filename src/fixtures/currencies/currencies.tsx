import * as React from "react";

import eur from "../../svg/eur.svg";
import usd from "../../svg/usd.svg";
import gbp from "../../svg/gbp.svg";
import rub from "../../svg/rub.svg";
import { Icon } from "../../components/UI/Icon/Icon";

export const options: any = {
  eur: {
    value: 1,
    icon: (
      <Icon glyph={eur.id} viewBox={eur.viewBox} width="24px" height="24px" />
    )
  },
  usd: {
    value: 2,
    icon: (
      <Icon glyph={usd.id} viewBox={usd.viewBox} width="24px" height="24px" />
    )
  },
  rub: {
    value: 3,
    icon: (
      <Icon glyph={rub.id} viewBox={rub.viewBox} width="24px" height="24px" />
    )
  },
  gbp: {
    value: 4,
    icon: (
      <Icon glyph={gbp.id} viewBox={gbp.viewBox} width="24px" height="24px" />
    )
  }
};
