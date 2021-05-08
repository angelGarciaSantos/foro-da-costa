import React from "react";
import { useForm } from "react-hook-form";
import tachyons from 'tachyons';

const CreatePost = props => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    props.createNewPost(data);
};

  console.log(watch("title")); // watch input value by passing the name of it
  console.log(watch("content")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="courier tc" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input defaultValue="test" {...register("example")} /> */}
      <label className="courier pa3">Titulo</label>
      {/* include validation with required or other standard HTML validation rules */}
      <input className="courier"{...register("title", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.title && <span>Debes introducir un título</span>}
      <label className="courier pa3">Contenido</label>
      {/* include validation with required or other standard HTML validation rules */}
      <input className="courier" {...register("content", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.content && <span>Debes introducir algún contenido</span>}
      
      <input className="courier" type="submit" />
    </form>
  );
}

export default CreatePost