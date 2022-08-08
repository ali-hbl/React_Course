import { Component } from 'react';
import Car from './Car';
import Header from './Header';
import Wrapper from './Wrapper';

class MyCars extends Component {
  state = {
    cars: [
      {
        name: 'Ford',
        color: 'Red',
        year: 2000,
      },
      {
        name: 'Mercedes',
        color: 'Black',
        year: 2010,
      },
      {
        name: 'BMW',
        color: 'White',
        year: 1990,
      },
    ],
  };

  // No Copy
  noCopy = () => {
    alert('Merci de ne pas copier le texte');
  };

  /* <p onCopy={this.noCopy} onMouseOver={this.addStyle}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque atque numquam dolor magnam nulla cupiditate.
    </p>
  */

  // onMouseOver
  addStyle = (e) => {
    e.target.classList.toggle('styled');
  };

  // Incrémenter un state
  addTenYears = () => {
    const udpatedState = this.state.cars.map((e) => {
      return (e.year -= 10);
    });
    this.setState({
      udpatedState,
    });
  };

  render() {
    const { title, color } = this.props;
    const year = new Date().getFullYear();

    return (
      <div>
        <Wrapper>
          <Header title={title} color={color}>
            {this.props.title}
          </Header>
        </Wrapper>

        <button onClick={this.addTenYears}>+10 ans</button>

        {this.state.cars.map((car, index) => {
          return (
            <div key={index}>
              <Car name={car.name} color={car.color} year={year - car.year + ' ans'} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MyCars;
