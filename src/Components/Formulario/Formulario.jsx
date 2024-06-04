/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Formulario = () => {
  const [entradas, setEntradas] = useState(JSON.parse(localStorage.getItem("listaEntradas")));  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
    const agregar = Item => {
        setEntradas([
        ...entradas, Item
        ]);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregar({
        id: Math.floor(Math.random()*10000)+1,
        title,
        description,
        autor: "Michel"
      });
      setDescription("")
      setTitle("")
  };
 
  useEffect(() => {
    localStorage.setItem("listaEntradas", JSON.stringify(entradas));
}, [entradas])

  return (
    <>
      <h2>Agregar Nueva Entrada</h2>
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Titulo"
            name="titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Entrada</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button className="btn btn-primary" type="submit">
          Agregar
        </Button>
      </Form>
    </>
  );
};
export default Formulario;
