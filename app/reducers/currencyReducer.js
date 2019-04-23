const defaultState = localStorage.getItem('selected')
  ? JSON.parse(localStorage.getItem('selected'))
  : [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case `ADD`:
      localStorage.setItem(
        'selected',
        JSON.stringify([...state, { ...action.cur }])
      );
      return [...state, { ...action.cur }];
    case `REMOVE`:
      localStorage.setItem(
        'selected',
        JSON.stringify(state.filter((cur, index) => !(index === action.index)))
      );
      return state.filter((cur, index) => !(index === action.index));
    case 'UPDATE':
      localStorage.setItem(
        'selected',
        JSON.stringify(
          state.map(cur => ({ ...cur, rate: action.rates[cur.title] }))
        )
      );
      return state.map(cur => ({ ...cur, rate: action.rates[cur.title] }));
    default:
      return state;
  }
};
