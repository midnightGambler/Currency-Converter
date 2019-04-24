import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../actions/currency';

const Output = ({ title, rate, index, remove, amount }) => (
  <div className="item">
    <span>{title}:</span> {Number((rate * amount).toFixed(2))}
    <button type="button" onClick={_ => remove(index)}>
      x
    </button>
  </div>
);

const mapDispatchToProps = {
  remove,
};

const mapStateToProps = state => ({
  amount: state.amountReducer,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Output);
