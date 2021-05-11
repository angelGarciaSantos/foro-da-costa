import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import tachyons from 'tachyons';
import TextEditorJodit from "./TextEditorJodit";

const CreatePost = props => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    props.createNewPost(data);
  };

  //TODO: adaptar tomando como ejemplo SignUp (configurar todos los formularios igual)

    const editorContent = (value) => {
        console.log(value);
    }

  console.log(watch("title")); // watch input value by passing the name of it
  console.log(watch("content")); // watch input value by passing the name of it

  return (


 <Form className="tc courier" onSubmit={handleSubmit(onSubmit)}>
  <Form.Group controlId="formBasicTitle">
    <Form.Label>Titulo</Form.Label>
    <Form.Control type="text" placeholder="Introduce el titulo del tema" {...register("title", { required: true })}/>
  </Form.Group>

  <Form.Group controlId="formBasicDisplayName">
    <Form.Label>Contenido</Form.Label>
    <Form.Control type="text" placeholder="Introduce el contenido del tema" {...register("content", { required: true })}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Crear
  </Button>
</Form>

  );
}

export default CreatePost