import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

const DropdownPokedex = ({ amountPokemon, limit }) => {
  const [dropItem] = useState([10, 20, 50])
  return (
    <Dropdown className='m-4 p-0'>
      <Dropdown.Toggle variant='outline-warning'>
            Amount Pokemon
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {dropItem.map(item => (
          <Dropdown.Item
            onClick={() => { amountPokemon(limit = item) }}
          >
                Amount: {item}
          </Dropdown.Item>
        )
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownPokedex
