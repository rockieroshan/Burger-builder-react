import React from 'react';
import Aux from '../hoc/Aux';

import Burger from '../components/Burger/Burger';

class BurgerBuilder extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 1,
      bacon: 3,
      cheese: 1,
      meat: 2
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;