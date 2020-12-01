import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
    <Navbar.Brand>Carros</Navbar.Brand>
    <Nav className="mr-auto">
      <Link className="nav-link" to="/carros">Veiculos</Link>
      
    </Nav>
  </Navbar>

    </>
  )
}