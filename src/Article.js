import React, { Component } from 'react';
import md5 from 'js-md5'

export default class Article extends Component {
	render() {
		const hash = md5(this.props.question + this.props.answer);
		const href = '#' + hash;

		return (
			<article>
				<h2><a href={href} name={hash}>#</a> {this.props.question}</h2>
				<p>{this.props.answer}</p>
			</article>
		);
	}
}