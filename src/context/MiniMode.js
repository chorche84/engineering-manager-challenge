import React, { Component } from "react";

const { Provider, Consumer } = React.createContext({});

class MiniModeProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: props.value
		};
	}

	state: {
		active: false
	};

	toggle () {
		this.setState({
			active: !this.state.active
		});
	};

	render () {
		const context = {
			active: this.state.active,
			toggle: this.toggle.bind(this)
		};
		return <Provider value={context}>{ this.props.children }</Provider>;
	}
}

export { MiniModeProvider, Consumer as MiniModeConsumer };
