import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import WelcomePage from '../welcomePage/WelcomePage'
import PokemonList from '../pokedex/pokemonList/PokemonList'
import Pokemon from '../pokedex/pokemon/Pokemon'

class Routes extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/pokemon' component={PokemonList} />
          <Route exact path='/pokemon/:pokemonIndex' component={Pokemon} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
