import { Component } from 'react';
import Car from './Car';
import Header from './Header';
import Wrapper from './Wrapper';

class MyCars extends Component {
  state = {
    cars: ['Ford', 'Mercedes', 'Peugeot'],
  };

  // No Copy
  noCopy = () => {
    alert('Merci de ne pas copier le texte');
  };

  // onMouseOver
  addStyle = (e) => {
    e.target.classList.toggle('styled');
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
        {/* <p onCopy={this.noCopy} onMouseOver={this.addStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque atque numquam dolor magnam nulla cupiditate.
        </p> */}

        <Car color="Red">{this.state.cars[0]}</Car>
        <Car>{this.state.cars[1]}</Car>
        <Car color="Green">{this.state.cars[2]}</Car>
      </div>
    );
  }
}

export default MyCars;
