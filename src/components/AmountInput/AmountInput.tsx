import * as React from "react";
import { Input } from "../UI/Input";

export const AmountInput: React.FC = () => {
  const [value, setValue] = React.useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^\d{1,}(\.\d{0,2})?$/.test(e.target.value) || !e.target.value) {
      setValue(e.target.value);
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
