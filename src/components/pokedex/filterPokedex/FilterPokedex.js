import React, { useState } from 'react'
import { Col, DropdownButton } from 'react-bootstrap'
import './filterPokedexType.css'
import TYPE_COLORS from '../../../utility/TypeColors'

const FilterPokedex = ({ pokemonTypes, getPokemon, pokeType, getPokemonType }) => {
  useState(pokemonTypes())

  return (
    <Col className='col-12 d-flex justify-content-between mb-5'>
      <DropdownButton
        drop='down'
        variant='outline-warning'
        title='Filter pokemon type'
        className='m-0 p-0'
      >
        <li
          className='myBadge m-0 p-0 text-center font-weight-bold'
          onClick={() => getPokemon()}
        >
          -All-
        </li>
        {pokeType.map(el => (
          <li
            key={el.name}
            className='myBadge m-0 p-0 text-center font-weight-bold'
            style={{ backgroundColor: `#${TYPE_COLORS[el.name]}` }}
            onClick={() => getPokemonType(el.url)}
          >
            {el.name}
          </li>
        ))}
      </DropdownButton>
    </Col>
  )
}

export default FilterPokedex
