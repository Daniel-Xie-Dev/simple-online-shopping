import React from 'react'
import SignUp from '../components/SignUp'
import { Container } from 'react-bootstrap'

export default function SignupPage() {
  return (
    <Container className="d-flex justify-content-center" style={{minHeight:'100vh'}}>
        <div className="w-100" style={{maxWidth: '400px'}}>
            <SignUp />
        </div>
    </Container>

  )
}
