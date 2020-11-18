import React, { Component } from "react";
import Title from "./Title";

export default class OrderList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="" title="Orders - Add New Order Button" />
                        <div className="row">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Order</th>
                                        <th>Order Status</th>
                                        <th>Order Value</th>
                                        <th>Execution Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mr Yokomoto</td>
                                        <td>Repeat Order</td>
                                        <td>Query</td>
                                        <td>£1,000,000</td>
                                        <td>07SEP2020</td>
                                    </tr>
                                    <tr>
                                        <td>Joe Bloggs</td>
                                        <td>First Order</td>
                                        <td>Complete</td>
                                        <td>£50,000</td>
                                        <td>08OCT2020</td>
                                    </tr>
                                    <tr>
                                        <td>July Dooley</td>
                                        <td>Repeat Order</td>
                                        <td>On Hold</td>
                                        <td>£500,000</td>
                                        <td>08OCT2020</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </React.Fragment>
            //<Product />
        );
    }
}
