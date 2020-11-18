import React, { Component } from "react";
import Title from "./Title";

export default class CustomerList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="" title="Customers - Add New Customers Button" />
                        <div className="row">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Status</th>
                                        <th>KYC</th>
                                        <th>Proof Of Funds</th>
                                        <th>Certificates</th>
                                        <th>Insurances</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mr Yokomoto</td>
                                        <td>Pending</td>
                                        <td>Completed</td>
                                        <td>Missing</td>
                                        <td>Sent To Client</td>
                                        <td>Completed</td>
                                    </tr>
                                    <tr>
                                        <td>Joe Bloggs</td>
                                        <td>Pending</td>
                                        <td>Completed</td>
                                        <td>Completed</td>
                                        <td>Completed</td>
                                        <td>Completed</td>
                                    </tr>
                                    <tr>
                                        <td>July Dooley</td>
                                        <td>Pending</td>
                                        <td>Completed</td>
                                        <td>Missing</td>
                                        <td>Sent To Client</td>
                                        <td>Completed</td>
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
