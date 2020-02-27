import React from "react";

const withActiveCard = (Component) => {
  return class WithActiveCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null
      };

      this.updateActiveCard = this.updateActiveCard.bind(this);
    }

    updateActiveCard(id) {
      this.setState({activeCard: id});
    }

    render() {
      return (<Component
        {...this.props}
        activeCardId={this.state.activeCard}
        onCardHover={this.updateActiveCard}
      />);
    }
  };
};

export default withActiveCard;
