import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "../UI/Input";
import { setValue } from "../../store/actions/currenciesActions";
import { defaultStateType } from "../../store/reducers/currenciesReducer";

export const AmountInput: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: defaultStateType) => state.value);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^\d{1,}(\.\d{0,2})?$/.test(e.target.value) || !e.target.value) {
      dispatch(setValue(e.target.value));
    }
  };

  return (
    <Input
      placeholder="Enter amount"
      autoFocus
      onChange={onChange}
      value={value}
    />
  );
};
