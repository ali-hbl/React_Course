import './App.css';
import { Component } from 'react';
import MyCars from './components/MyCars';

class App extends Component {
  state = {
    title: 'Mon catalogue de voitures',
    color: 'green',
  };

  changeTitle = () => {
    this.setState({
      title: 'Mon nouveau titre',
    });
  };

  changeViaParam = (title) => {
    this.setState({
      title,
    });
  };

  changeViaBind = (param) => {
    this.setState({
      title: param,
    });
  };

  changeViaInput = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <MyCars color={this.state.color} title={this.state.title} />
        <button onClick={this.changeTitle}>Changer le nom</button>
        <button onClick={() => this.changeViaParam('Titre via param')}>Via param</button>
        <button onClick={this.changeViaBind.bind(this, 'Titre via Bind')}>Via Bind</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.title}></input>
      </div>
    );
  }
}

export default App;
