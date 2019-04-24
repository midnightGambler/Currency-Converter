const add = ({ title, rate } = { title: `USD`, rate: 1.7 }) => ({
  type: `ADD`,
  cur: {
    title,
    rate,
  },
});

const remove = index => ({
  type: `REMOVE`,
  index,
});

const update = rates => ({
  type: 'UPDATE',
  rates,
});

const updateAsync = e => dispatch => {
  const base = e ? e.target.value : 'EUR';

  const rates = fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
    .then(res => res.json())
    .then(res => {
      if (base === 'EUR') {
        res.rates.EUR = 1;
      }
      dispatch(update(res.rates));
    })
    .catch(err => alert(`Failed response: ${err}`));
};

export { add, remove, updateAsync };
