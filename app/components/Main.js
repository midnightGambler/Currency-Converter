import React from 'react';
import { connect } from 'react-redux';
import From from './From';
import OutputList from './OutputList';
import { add, updateAsync } from '../actions/currency';
import change from '../actions/amount';

class Main extends React.Component {
  state = {};

  componentDidMount = () => {
    const { updateAsync, change } = this.props;
    updateAsync();
    change(localStorage.getItem('amount'));
  };

  onChangeHandler = e => {
    const { updateAsync } = this.props;
    updateAsync(e);
  };

  onClickHandler = e => {
    e.preventDefault();
    const { add, available, selected } = this.props;
    const selectedCur = e.target.available.value;
    available.map(cur => {
      if (cur.title === selectedCur && selected.length < 4) {
        add(cur);
      }
    });
  };

  render() {
    const { available } = this.props;
    return (
      <div className="main">
        <header>
          <h1>Currency Converter</h1>
        </header>
        <From
          onChangeHandler={e => this.onChangeHandler(e)}
          rates={available}
        />
        <OutputList />
        <form onSubmit={e => this.onClickHandler(e)}>
          <select name="available">
            {available.map((cur, index) => (
              <option key={index} value={cur.title}>
                {cur.title}
              </option>
            ))}
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.currencyReducer,
  available: state.available,
  amount: state.amountReducer,
});

const mapDispatchToProps = {
  add,
  updateAsync,
  change,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
