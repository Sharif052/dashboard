import React from 'react';
import {Line, Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default () => (
	<div>
		<span class="uk-text-emphasis">Title</span>
		<hr/>
		<Pie
			data={data}
			width={400}
			height={400}
		/>
	</div>
);
