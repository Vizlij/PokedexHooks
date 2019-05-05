import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Title from './stylus'

const StyledLink = styled(Link)`
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`

const WelcomePage = () => {
  return (
    <Container className='col-10 mt-5 d-block align-items-center'>
      <Col className='d-flex justify-content-center'>
        <Title>
          <h1 className='m-4'>Welcome to my Pokedex!</h1>
        </Title>
      </Col>
      <StyledLink to={`/pokemon`}>
        <Button
          variant='outline-warning'
          size='lg' block
          className='mt-5 Button'
        >
          Go to Pokedex!
        </Button>
      </StyledLink>
    </Container>
  )
}

export default WelcomePage
