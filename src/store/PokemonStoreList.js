import { createContext } from 'react'
import { observable, action, computed } from 'mobx'
import axios from 'axios/index'
import { pokeTypeUrl, url } from '../config/config'

export class PokemonStoreList {
  @observable limit = 10
  @observable offset = 0
  @observable pageCount = 7
  @observable pokeType = []
  @observable pokeStore = []
  @observable pokemonName = ''
  @observable selPokeType = ''
  @observable pokeTypeUrl = pokeTypeUrl
  @observable url = url

  @observable pokeTypUrl = []
  @observable pokeTypesNames = []

  @action getPokemon = () => {
    axios.get(this.url).then(response => {
      this.pokeStore = response.data.results
    })
  }

  @action getPokemonType = (url) => {
    axios.get(url).then(response => {
      this.pokeStore = response.data.pokemon.map(el => el.pokemon)
    })
  }

  @action pokemonTypes = () => {
    axios.get(this.pokeTypeUrl).then(response => {
      this.pokeType = response.data.results
    })
  }

  @action pokeTypesUrl = () => {
    this.pokeTypUrl = this.pokeType.map(url => url.name.url)
  }

  @action pokeTypesName = () => {
    this.pokeTypesNames = this.pokeTypUrl.map(url => url.name.url)
  }

  @action setOffset = (offset) => {
    this.offset = offset
  }

  @action setPokemonName = (pokemonName) => {
    this.pokemonName = pokemonName
  }

  @action amountPokemon = (limit) => {
    this.limit = limit
  }

  @action setType = (pokemonType) => {
    this.selPokeType = pokemonType
  }

  @computed get getPage () {
    if (this.pokemonName) { return this.pokeStore.filter(pokemon => pokemon.name.includes(this.pokemonName)) }
    return this.pokeStore.slice(this.offset, this.offset + this.limit)
  }

  @computed get getAmountPokemon () {
    return this.pokeStore.filter(pokemon => pokemon.limit === this.limit)
  }
}

export default createContext(new PokemonStoreList())
