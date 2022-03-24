import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
export default function Navigation() {
  return (
    <>
        <Navbar bg='dark' className='w-100 mb-5'>
            <Container>
                <Navbar.Brand href='/'>
                <img
                    src="/React-icon.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link style={{color:'white'}} href='/'>Home</Nav.Link>
                    <Nav.Link style={{color:'white'}} href='signup'>Sign Up</Nav.Link>
                    <Nav.Link style={{color:'white'}} href='login'>Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}
