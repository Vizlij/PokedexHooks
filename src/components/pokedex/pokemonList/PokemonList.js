import React, { useContext, useState } from 'react'
import { CardGroup, Col, Container, Row } from 'react-bootstrap'
import Search from '../search/Search'
import PaginationPokedex from '../paginationPokedex/PaginationPokedex'
import DropdownPokedex from '../dropdownPokedex/DropdownPokedex'
import Header from '../../header/Header'
import FilterPokedex from '../filterPokedex/FilterPokedex'
import PokemonStoreList from '../../../store/PokemonStoreList'
import { observer } from 'mobx-react-lite'
import PokemonCard from '../pokemonCard/PokemonCard'

const PokemonList = observer(() => {
  const store = useContext(PokemonStoreList)
  useState(() => store.getPokemon())

  return (
    <div>
      <Header />
      <Container className='mt-5 col-10'>
        <Col className='d-flex justify-content-between p-3'>
          <Search
            setPokemonName={store.setPokemonName}
            getPokemon={store.getPokemon}
          />
          <DropdownPokedex
            amountPokemon={store.amountPokemon}
            limit={store.limit}
          />
        </Col>
        <Col>
          <FilterPokedex
            pokemonTypes={store.pokemonTypes}
            getPokemon={store.getPokemon}
            pokeType={store.pokeType}
            getPokemonType={store.getPokemonType}
          />
        </Col>
        <CardGroup className='m-1'>
          <React.Fragment>
            <Row className='justify-content-center'>
              {store.getPage.map(pokemon => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              ))}
            </Row>
          </React.Fragment>
        </CardGroup>
        <Col className='col-md-12 mt-5 mb-5 d-flex justify-content-center'>
          <PaginationPokedex
            setOffset={store.setOffset}
            limit={store.limit}
            pageCount={store.pageCount}
            total={store.pokeStore.length}
          />
        </Col>
      </Container>
    </div>
  )
})

export default PokemonList
