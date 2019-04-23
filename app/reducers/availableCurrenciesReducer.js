const defaultState = [
  { title: `EUR`, rate: '' },
  { title: `USD`, rate: '' },
  { title: `GBP`, rate: '' },
  { title: `RUB`, rate: '' },
];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return state.map(cur => ({ ...cur, rate: action.rates[cur.title] }));
    default:
      return state;
  }
};
