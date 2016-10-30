import React from 'react';
import ProductTableHeader from './ProductTableHeader';
import Content from './Content';
import './App.css';

var App = React.createClass({
  getInitialState: function() {
    return {
      timeRange: 'recent'
    };
  },

  switchTimeRange: function(newTimeRange) {
    this.setState({timeRange: newTimeRange})
  },

  render: function() {
    return (
        <div className="application">
          <p className="applicationTitle">Leaderboard</p>
          <ProductTableHeader switchTimeRange={this.switchTimeRange} timeRange={this.state.timeRange} />
          <Content timeRange={this.state.timeRange} />
        </div>
    );
  }
});

export default App;
