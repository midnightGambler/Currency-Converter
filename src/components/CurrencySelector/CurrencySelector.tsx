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

  const renderCurrencies = () => {
    return currencies
      .filter(({ title }) => title !== selectedCurrency)
      .map(({ title, icon }) => (
        <DropdownItem
          key={title}
          onClick={handleSelectCurrency.bind(null, title)}
        >
          <Icon
            primary
            glyph={icon.id}
            viewBox={icon.viewBox}
            width="24px"
            height="24px"
          />
        </DropdownItem>
      ));
  };

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
