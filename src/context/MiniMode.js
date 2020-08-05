import React, { Component } from "react";

const { Provider, Consumer } = React.createContext({});

class MiniModeProvider extends Component {
	state = {
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
			toggle: () => this.toggle()
		};
		return <Provider value={context}>{ this.props.children }</Provider>;
	}
}

export { MiniModeProvider, Consumer as MiniModeConsumer };
