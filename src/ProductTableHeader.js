/**
 * Created by sophia on 10/18/16.
 */
import React from 'react';

var ProductTableHeader = React.createClass({
    setToRecent: function() {
        this.props.switchTimeRange('recent');
    },
    setToAllTime: function(e) {
        this.props.switchTimeRange('alltime');
    },
    render: function() {
        var DownCaret = function() { return (<span>&#9660;</span>)};
        return (
            <table>
                <thead>
                <tr>
                    <th className="noCol">#</th>
                    <th className="camperName">Camper Name</th>
                    <th id="defaultSort" className="pointsCol" onClick={this.setToRecent}>
                        Points in past 30 days {
                        this.props.timeRange==='recent' ? <DownCaret /> : null
                    }
                    </th>
                    <th className="pointsCol" onClick={this.setToAllTime}>All time points
                        {
                            this.props.timeRange === 'alltime' ? <DownCaret /> : null
                        }
                    </th>
                </tr>
                </thead>
                <tbody></tbody>
            </table>
        );
    }
});

export default ProductTableHeader;