/**
 * Created by sophia on 10/18/16.
 */
import React from 'react';
import Table from './Table';
import axios from 'axios';

var Content = React.createClass({
    getInitialState: function() {
        return {
            data: []
        };
    },
    getUrl: function(timeRange) {
        if (timeRange === 'alltime')
            return 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
        if (timeRange === 'recent')
            return 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    },
    getData: function(url) {
        return axios.get(url).then((payload) => {
            this.setState({ data: payload.data });
        });
    },
    componentDidMount: function() {
        var url = this.getUrl(this.props.timeRange);
        this.getData(url);
    },
    componentWillUpdate: function(nextProps) {
        if (nextProps.timeRange !== this.props.timeRange) {
            var url = this.getUrl(nextProps.timeRange);
            this.getData(url);
        }
    },
    render: function() {
        return (
            <div>
                <Table data={this.state.data} />
            </div>
        );
    }
});

export default Content;