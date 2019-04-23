import React from 'react';
import { connect } from 'react-redux';
import Output from './Output';

class outputList extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <div className="output">
        {currencies.map(({ title, rate }, index) => (
          <Output
            index={index}
            key={Math.random() * 100}
            title={title}
            rate={rate}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currencies: state.currencyReducer,
});

export default connect(mapStateToProps)(outputList);
