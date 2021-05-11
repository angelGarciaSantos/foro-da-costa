import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const LogOut = props => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    props.logOut();
  };
  // const [value, setValue] = useState();
        


  return (

  <Form className="tc" onSubmit={handleSubmit(onSubmit)}>
    <Form.Group controlId="formBasicText">
      <Form.Label>¿Realmente deseas cerrar tu sesión?</Form.Label>
    </Form.Group>
    <Button variant="primary" type="submit">
      Cerrar Sesión
    </Button>
  </Form>
  )
}


export default LogOut