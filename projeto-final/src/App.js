import logo from './logo.svg';
import './App.css';
import api from './api';
import { Component } from 'react';

class App extends Component{

  state = {
    cartas: [],
  }

  async componentDidMount(){
    const response = await api.get('');

    console.log(response.data);

    this.setState({ cartas: response.data});
  }

  render(){

    const { cartas } = this.state;

    return(
      <div>
          <h1>Listar</h1>
      </div>
    );
  }
}

export default App;

/*

          { console.log(cartas) }
          {cartas.map(elemento => (
            <li key={elemento.show.id}>
              <h2>
                <strong>Título: </strong>
                {elemento.show.name}
              </h2>
            </li>
          ))}
*/