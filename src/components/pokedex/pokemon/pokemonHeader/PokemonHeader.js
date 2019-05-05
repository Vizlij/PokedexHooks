import React from 'react'
import TYPE_COLORS from '../../../../utility/TypeColors'
import { Badge, Card } from 'react-bootstrap'

const PokemonHeader = (props) => {
  return (
    <Card.Header>
      <h5>
        {props.pokemonIndex}
        {props.types.map(type => (
          <Badge
            key={type}
            className='badge-pill float-right m-1'
            style={{ backgroundColor: `#${TYPE_COLORS[type]}` }}
          >
            {type}
          </Badge>
        ))}
      </h5>
    </Card.Header>
  )
}

export default PokemonHeader
