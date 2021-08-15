import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <nav class="uk-navbar-container" uk-navbar>
                    <div className="uk-flex" style={{ backgroundColor: "#2051A0" }}>
                        <h3>
                            Dash Board
                        </h3>
                        <div class="uk-navbar-right">
                            <div class="uk-form-select" data-uk-form-select>
                                <DatePicker selected={new Date()} />
                            </div>

                        </div>
                    </div>

                    <div class="uk-navbar-left" style={{ backgroundColor: "#4284B0" }}>

                        <ul class="uk-navbar-nav">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li>
                                <a href="#">Parent</a>
                                <div class="uk-navbar-dropdown">
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                        <li class="uk-active"><a href="#">Active</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li><a href="#">Item</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#">Item</a></li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Layout;
