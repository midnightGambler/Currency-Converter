export default (state = localStorage.getItem('amount'), action) => {
  switch (action.type) {
    case `CHANGE`:
      localStorage.setItem('amount', action.amount);
      return action.amount;
    default:
      return state;
  }
};
