import Head from 'next/head'
import Layout from './layouts'
import React from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { eMsgs, authState } = this.props;
        // console.log("header component eMsgs",eMsgs);

        return (
            <React.Fragment>
                <Head>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.2/dist/css/uikit.min.css" />

                    <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.2/dist/js/uikit.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.2/dist/js/uikit-icons.min.js"></script>
                    <title>Dash Board</title>
                </Head>

                <Layout />
            </React.Fragment>
        )
    }
}
