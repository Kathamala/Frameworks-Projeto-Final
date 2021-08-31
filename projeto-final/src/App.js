//import logo from './logo.svg';
import './App.css';
import './components/styles.css'
import { Component } from 'react';
import Episodes from './components/Episodes';
import Characters from './components/Characters';
import About from './components/About';
import complements from './complements.json';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import axios from 'axios';

class App extends Component{

  state = {
    eps: [],
    characters: [],
    carouselImages: complements.carousel
  }

  async componentDidMount(){
    
    var full_ep_list = [];

    //episodes
    const ep_api = axios.create({
      baseURL: 'https://rickandmortyapi.com/api/episode'
    });

    const ep_response = await ep_api.get('');

    for(var i=0; i<ep_response.data.info.pages; i++){
      const ep_page_api = axios.create({
        baseURL: 'https://rickandmortyapi.com/api/episode?page='+(i+1)
      });

      const ep_page_response = await ep_page_api.get('');

      for(var j=0; j<ep_page_response.data.results.length; j++){
        full_ep_list.push(ep_page_response.data.results[j]);
      }
    }

    var full_characters_list = [];

    //characters
    const char_api = axios.create({
      baseURL: 'https://rickandmortyapi.com/api/character'
    });

    const char_response = await char_api.get('');

    for(i=0; i<char_response.data.info.pages; i++){
      const char_page_api = axios.create({
        baseURL: 'https://rickandmortyapi.com/api/character?page='+(i+1)
      });

      const char_page_response = await char_page_api.get('');

      for(j=0; j<char_page_response.data.results.length; j++){
        full_characters_list.push(char_page_response.data.results[j]);
      }
    }

    this.setState({ eps: full_ep_list, characters : full_characters_list});
  }

  render(){
    var eps_by_season = [[], [], [], []];

    for(var i=0; i<this.state.eps.length; i++){
      let position = this.state.eps[i].episode[2];
      eps_by_season[position-1].push(this.state.eps[i]);
    }

    //console.log(this.state.characters);

    return(
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Episodes episodes={eps_by_season} carouselImages={this.state.carouselImages} episodesComplements={complements.episodios}></Episodes>
            </Route>

            <Route exact path="/characters">
              <Characters characters={this.state.characters} ></Characters>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>            
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
