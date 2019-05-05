import React from 'react'
import { Card } from 'react-bootstrap'

const PokemonTitle = (props) => {
  return (
    <Card.Title className='text-center'>
      {props.name.toUpperCase()}
    </Card.Title>
  )
}

export default PokemonTitle
