import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'

const Search = ({ setPokemonName, getPokemon }) => {
  const [pokeName, setPokeName] = useState('')

  const onChange = e => {
    setPokeName(e.target.value)
  }

  const search = () => {
    setPokemonName(pokeName)
    setPokeName('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search()
    }
  }

  return (
    <Form inline className='m-3'>
      <FormControl
        name='pokemonName'
        type='text'
        placeholder='Search pokemon...'
        value={pokeName}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <Button
        className='m-2'
        variant='outline-warning'
        onClick={search}
      >
        Search
      </Button>
      <Button
        className='m-2'
        variant='outline-warning'
        onClick={() => {
          setPokemonName(pokeName)
          getPokemon()
        }}
      >
        Full Pokedex
      </Button>
    </Form>
  )
}

export default Search
