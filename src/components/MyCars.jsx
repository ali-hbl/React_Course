import { Component } from 'react';
import Car from './Car';
import Header from './Header';
import Wrapper from './Wrapper';

class MyCars extends Component {
  state = {
    cars: ['Ford', 'Mercedes', 'Peugeot'],
  };

  render() {
    const { title, color } = this.props;

    return (
      <div>
        <Wrapper>
          <Header title={title} color={color}>
            {this.props.title}
          </Header>
        </Wrapper>

        <Car color="Red">{this.state.cars[0]}</Car>
        <Car>{this.state.cars[1]}</Car>
        <Car color="Green">{this.state.cars[2]}</Car>
      </div>
    );
  }
}

export default MyCars;
