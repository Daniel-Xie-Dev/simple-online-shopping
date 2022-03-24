import React from 'react'
import Login from '../components/Login'
import { Container } from 'react-bootstrap'
export default function LoginPage() {
  return (
    <Container className='d-flex justify-content-center'
                style={{minHeight: '100vh'}}>
        <div className='w-100' style={{maxWidth:"400px"}}>
            <Login />
        </div>
                
    </Container>
  )
}
