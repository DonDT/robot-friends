import React, { Component } from "react";
import "./App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import { setSearchField, requestRobots } from "./actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  };
};

// we either call it like this     onRequestRobots: () => requestRobots(dispatch)
// or     onRequestRobots: () => diapatch(requestRobots()) here we change the reducer to
//export const requestRobots = () => dispatch =>

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading ...</h1>
    ) : (
      <div className="tc">
        <h1 className="heading">Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
