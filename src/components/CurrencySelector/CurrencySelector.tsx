import * as React from "react";
import { Dropdown } from "../UI/Dropdown/Dropdown";
import { DropdownMenu } from "../UI/Dropdown/DropdownMenu";
import { DropdownItem } from "../UI/Dropdown/DropdownItem";
import { options } from "../../fixtures/currencies/currencies";

export const CurrencySelector: React.FC = () => {
  const [currency, setCurrency] = React.useState<string>("eur");

  const renderCurrencies = () => {
    return Object.keys(options)
      .filter(key => key !== currency)
      .map(key => (
        <DropdownItem key={key} onClick={setCurrency.bind(null, key)}>
          {options[key].icon}
        </DropdownItem>
      ));
  };

  return (
    <Dropdown>
      {options[currency].icon}
      <DropdownMenu>{renderCurrencies()}</DropdownMenu>
    </Dropdown>
  );
};
