import React, {useRef, useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try{
      setError('');
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value);
      nav("/");
    }catch{
      setError('Failed to log in');
    }
    setLoading(false);
  }

  return (
    <React.Fragment>
        <Card>
          <Card.Body>
            <h2 className='text-center mb-2'>Login</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
          </Card.Body>
          <Form className='m-3' onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required/>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required/>
            </Form.Group>
            <Button className='w-100 text-center mt-3' type='submit' disabled={loading}>Login</Button>
          </Form>
        </Card>
        <div className='w-100 text-center m-2'>
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </div>
    </React.Fragment>
  )
}
