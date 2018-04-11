import React, { Component } from 'react';
import './Filter.css';

export default class Filter extends Component {
	onChange(evt) {
		this.props.onChange(evt.target.value);
	}

	render() {
		const placeholder = `Search (${this.props.answersCount} answers)`
		return (
			<div className="Filter">
				<input className="FilterInput" type="text" placeholder={placeholder} onChange={this.onChange.bind(this)}/>
			</div>
		);
	}
}
