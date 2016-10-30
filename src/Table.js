/**
 * Created by sophia on 10/18/16.
 */
import React from 'react';

var Table = React.createClass({
    render: function() {
        var data = this.props.data;
        var count = 0;
        //var number = data.indexOf({data}) + 1;
        return (
            <table className="rows">
                <tbody>
                {data.map(function(row, key) {
                    count++;
                    return (
                        <tr className="rowData" key={row.username}>
                            <td className="noCol">
                                <span>{count}</span>
                            </td>
                            <td className="camperName">
                                <a href={"https://www.freecodecamp.com/" + row.username} target="_blank">
                                    <img src={row.img} role="presentation" />
                                    <span className="camperNameTxt">{row.username}</span>
                                </a>
                            </td>
                            <td className="pointsCol">{row.recent}</td>
                            <td className="pointsCol">{row.alltime}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
});

export default Table;