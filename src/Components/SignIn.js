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

  <Form className="tc courier" onSubmit={handleSubmit(onSubmit)}>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Correo Electrónico</Form.Label>
      <Form.Control type="email" placeholder="Introduce tu dirección de email" {...register("email", { required: true })}/>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type="password" placeholder="Introduce tu contraseña" {...register("password", { required: true })} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Entrar
    </Button>
  </Form>
  )
}


export default SignIn