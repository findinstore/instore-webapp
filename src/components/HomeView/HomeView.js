import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import counterActions from '../../actions/counterActions';
import DuckImage from './Duck.jpg';

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export class HomeView extends React.Component {
  static propTypes = {
    counter: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDoubleAsync = this.onClickDoubleAsync.bind(this);
  }

  onClickIncrement() {
    const {
      dispatch,
    } = this.props;

    dispatch(counterActions.increment(1));
  }

  onClickDoubleAsync() {
    const {
      dispatch,
    } = this.props;

    dispatch(counterActions.doubleAsync());
  }

  render() {
    const {
      counter,
    } = this.props;

    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-xs-2 col-xs-offset-5">
            <img className="duck"
              src={DuckImage}
              alt="This is a duck, because Redux."
            />
          </div>
        </div>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>
          Sample Counter:
          {' '}
          <span className="counter counter-green">{counter.number}</span>
        </h2>
        <button className="btn btn-default"
          onClick={this.onClickIncrement}
        >
          Increment
        </button>
        {' '}
        <button className="btn btn-default"
          onClick={this.onClickDoubleAsync}
        >
          Double (Async)
        </button>
        <hr />
        <Link to="/404">Go to 404 Page</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);
