import React from 'react'
import { Row } from 'react-bootstrap'

const PokemonDescription = (props) => {
  return (
    <Row className='m-2'>
      <span className='mySpan'>{props.description}</span>
    </Row>
  )
}

export default PokemonDescription
