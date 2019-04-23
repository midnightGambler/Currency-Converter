import React from 'react';
import { connect } from 'react-redux';
import change from '../actions/amount';
import '../styles/from.less';

class From extends React.Component {
  state = { amount: '' };

  inputHandleChange = e => {
    const amount = e.target.value;
    this.setState({ amount });
    this.props.change(amount);
  };

  componentDidMount = () => {
    this.setState({ amount: localStorage.getItem('amount') });
  };

  render() {
    const { rates, onChangeHandler } = this.props;
    const { amount } = this.state;
    return (
      <div className="from">
        <select onChange={e => onChangeHandler(e)} name="from">
          {rates.map(country => (
            <option key={country.title} value={country.title}>
              {country.title}
            </option>
          ))}
        </select>
        <input
          placeholder="Enter amount..."
          value={amount}
          className="amount"
          onChange={e => this.inputHandleChange(e)}
          name="amount"
          type="number"
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  change,
};

export default connect(
  undefined,
  mapDispatchToProps
)(From);
