import React from "react";

const withActiveItem = (Component, initialActiveItem = null) => {
  return class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: initialActiveItem
      };

      this.updateActiveItem = this.updateActiveItem.bind(this);
    }

    updateActiveItem(value) {
      this.setState({activeItem: value});
    }

    render() {
      return (<Component
        {...this.props}
        activeItem={this.state.activeItem}
        updateActiveItem={this.updateActiveItem}
      />);
    }
  };
};

export default withActiveItem;
