// import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
// import ReactFusioncharts from "react-fusioncharts";
import dynamic from 'next/dynamic';
// const FusionCharts = dynamic(() => import('fusioncharts'), { ssr: false });
// const charts = dynamic(() => import('fusioncharts/fusioncharts.charts'), { ssr: false });
const ReactFusioncharts = dynamic(() => import('react-fusioncharts'), { ssr: false });
// Resolves charts dependancy
// charts(FusionCharts);

const dataSource = {
    chart: {
        // caption: "Recommended Portfolio Split",
        // subcaption: "For a net-worth of $1M",
        // showvalues: "1",
        // showpercentintooltip: "0",
        // numberprefix: "$",
        // enablemultislicing: "1",
        theme: "fusion"
    },
    data: [
        {
            // label: "Equity",
            value: "300000"
        },
        {
            // label: "Debt",
            value: "230000"
        },
        {
            // label: "Bullion",
            value: "180000"
        },
        {
            // label: "Real-estate",
            value: "270000"
        },
        {
            // label: "Insurance",
            value: "20000"
        }
    ]
};

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    componentDidMount() {
        let FusionCharts;
        if (typeof window !== 'undefined') {
            FusionCharts = require('fusioncharts');
            this.getDataSource();

        }
    }
    getDataSource = () => {
        charts(FusionCharts);
        this.setState({ loading: true })
    }
    render() {
        return (<>{this.state.loading &&
            <ReactFusioncharts
                type="pie3d"
                width="100%"
                // height="100%"
                dataFormat="JSON"
                dataSource={dataSource}
            />
        }
        </>
        );
    }
}
