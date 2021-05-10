import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const SignIn = props => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    props.signIn(data);
  };
  // const [value, setValue] = useState();
        
  console.log(watch("email")); // watch input value by passing the name of it
  console.log(watch("password")); // watch input value by passing the name of it

  return (

  <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}


export default SignIn