import './App.css';
import { Component } from 'react';
import MyCars from './components/MyCars';

class App extends Component {
  state = {
    title: 'Mon catalogue de voitures',
    color: 'green',
  };

  render() {
    return (
      <div className="App">
        <MyCars color={this.state.color} title={this.state.title} />
      </div>
    );
  }
}

export default App;
