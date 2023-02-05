import { Form, Button, Card, Alert } from 'react-bootstrap';
import React, { useRef, useState} from 'react'
import { useAuth } from '../Contexts/AuthContext';


export default function CreateAccount() {
const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmRef = useRef()
const { createAccount } = useAuth()
const [ error, setError] = useState('')
const [loading, setLoading] = useState(false)

// function CreateAccount() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

  async function handleCreateAccount (event) {
    event.preventDefault()
    

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError ('Passwords do not match')
    }
    
    try {
      setError('')
      setLoading(true)
      await createAccount (emailRef.current.value, passwordRef.current.value)
    } catch {
      setError ('Failed to create an account')
    }
    setLoading(false)
  };

  return (
    <>
    <Card>
    <Card.Body>
      <h2 className='text-center mb-4'>Create Account</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleCreateAccount}>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={emailRef} required/>
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type ="email" ref={passwordRef} required />
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type ="email" ref={passwordConfirmRef} required />
        </Form.Group>
          <Button disable={loading} className='w-100' type='submit'>Sign Up</Button>
      </Form>
    </Card.Body>
    </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? Log In
        </div>
        </>
    );
  }

  // <div className="create-account-container">
  //     <h1>Create Account</h1>
  //     <form onSubmit={handleCreateAccount}>
  //       <label htmlFor="email">Email:</label>
  //       <input
  //         type="email"
  //         id="email"
  //         value={email}
  //         onChange={(event) => setEmail(event.target.value)}
  //       />
  //       <br />
  //       <label htmlFor="password">Password:</label>
  //       <input
  //         type="password"
  //         id="password"
  //         value={password}
  //         onChange={(event) => setPassword(event.target.value)}
  //       />
  //       <br />
  //       <button type="submit">Create Account</button>
  //     </form>
  //     <br />
  //     <div>
  //       Already have an account? <Link to="/login">Login</Link>
  //       </div>
  //       <br />
  //     <div>
  //       <Link to="/">Go back to home page</Link>
  //   </div>
  //   </div>
