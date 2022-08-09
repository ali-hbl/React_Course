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

  // getAge, adapte l'âge du véhicule
  getAge = (year) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    // ans, an, null
    let frenchYearStr = '';

    if (age === 1) {
      frenchYearStr = 'an';
    } else if (age > 1) {
      frenchYearStr = 'ans';
    }
    return `${age} ${frenchYearStr}`;
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

        <button onClick={this.addTenYears}>+10 ans</button>

        {this.state.cars.map(({ name, color, year }, index) => {
          return (
            <div key={index}>
              <Car name={name} color={color} year={this.getAge(year)} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MyCars;
