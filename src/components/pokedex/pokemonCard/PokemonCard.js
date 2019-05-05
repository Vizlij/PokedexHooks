import React, { useEffect, useState } from 'react'
import { Alert, Card, Spinner } from 'react-bootstrap'
import './PokemonCardStyle.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`

const PokemonCard = (props) => {
  const [imageUrl, setImageUrl] = useState('')
  const [pokemonIndex, setPokemonIndex] = useState('')
  const [imageLoading, setImageLoading] = useState(true)
  const [name, setName] = useState('')

  useEffect(() => {
    const { url, name } = props
    setName(name)
    setPokemonIndex(url.split('/')[url.split('/').length - 2])
    setImageUrl(`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`)
  })

  return (
    <StyledLink to={`/pokemon/${pokemonIndex}`}>
      <Card style={{ width: '16rem', height: '17rem' }} className='m-2 cardHover justify-content-center'>
        <Card.Header className='text-center'>{pokemonIndex}</Card.Header>
        <Card.Body className='text-center'>
          <Card.Title className='mx-auto'>{name.toUpperCase()}</Card.Title>
          {imageLoading ? (
            <Spinner animation='border' role='status'>
              <span className='sr-only'>Loading...</span>
            </Spinner>
          ) : null}
          <Card.Img
            className='card-img-top col-lg-10'
            src={imageUrl}
            onLoad={() => setImageLoading(false)}
          />
        </Card.Body>
      </Card>
    </StyledLink>
  )
}

export default PokemonCard
