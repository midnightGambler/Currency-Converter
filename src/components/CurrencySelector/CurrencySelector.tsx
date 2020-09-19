import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown } from "../UI/Dropdown/Dropdown";
import { DropdownMenu } from "../UI/Dropdown/DropdownMenu";
import { DropdownItem } from "../UI/Dropdown/DropdownItem";
import { Icon } from "../UI/Icon/Icon";
import { defaultStateType } from "../../store/reducers/currenciesReducer";
import { currencyType } from "../../utils/interfaces";
import { setSelectedCurrency } from "../../store/actions/currenciesActions";
import { icons } from "../../utils/utils";

export const CurrencySelector: React.FC = () => {
  const dispatch = useDispatch();
  const { currencies, selectedCurrency } = useSelector(
    (state: defaultStateType) => ({
      currencies: state.rates,
      selectedCurrency: state.selectedCurrency,
    })
  );

  const handleSelectCurrency = (currency: currencyType) => {
    dispatch(setSelectedCurrency(currency));
  };

  const renderCurrencies = () =>
    currencies.reduce((acc, cur) => {
      if (cur.title === selectedCurrency) return acc;
      const dropdownItem = (
        <DropdownItem
          key={cur.title}
          onClick={handleSelectCurrency.bind(null, cur.title)}
        >
          <Icon
            primary
            glyph={icons[cur.title].id}
            viewBox={icons[cur.title].viewBox}
            width="24px"
            height="24px"
          />
        </DropdownItem>
      );
      return [...acc, dropdownItem];
    }, []);

  return (
    <Dropdown>
      <Icon
        primary
        glyph={icons[selectedCurrency].id}
        viewBox={icons[selectedCurrency].viewBox}
        width="24px"
        height="24px"
      />
      <DropdownMenu>{renderCurrencies()}</DropdownMenu>
    </Dropdown>
  );
};
