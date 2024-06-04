import { useEffect, useState } from "react";
import ListaEntradas from "./ListaEntradas";
import { Col, Container, Row } from "react-bootstrap";

const Entradas = () => {
    useEffect(() =>{
        if(!localStorage.getItem("listaEntradas")) {
            localStorage.setItem("listaEntradas", JSON.stringify([
                {
                  id: 1,
                  title: "Entrada 1",
                  description: "Descripción de la entrada",
                  autor: "Michel"
                },
                {
                  id: 2,
                  title: "Entrada 2",
                  description: "Descripción de la entrada segunda prueba",
                  autor: "Michel"
                },
              ]));
        }
    }, []);

  const [entradas, setEntradas] = useState(JSON.parse(localStorage.getItem("listaEntradas")));
  const chk = entradas.map(element => (
    <Col xs={12} md={6} key={element.id}>
        <ListaEntradas key={element.id} data={element} />
    </Col>
  ));
  return (
    <div>
      <h2>Listado de Entradas</h2>
      <Container>
        <Row>
        {chk.length ? chk :  <p>No hay entradas</p>}
        </Row>
      </Container>
    </div>
  );
}
export default Entradas