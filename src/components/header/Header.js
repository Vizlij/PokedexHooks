import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './headerStyle.css'

const Header = () => {
  return (
    <Navbar bg='#ffffff' className='myNavbar justify-content-center'>
      <Link to='/pokemon'>
        <Navbar.Brand className='myBrand'>
          Pokedex
        </Navbar.Brand>
      </Link>
    </Navbar>
  )
}

export default Header
