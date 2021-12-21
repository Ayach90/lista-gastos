import React from "react";
import Helmet from "react-helmet";
import Button from "./elements/Button";
import {
  Header,
  Titulo,
  ContenedorBotones,
  ContenedorHeader,
} from "./elements/Header";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar gasto</Titulo>
          <ContenedorBotones>
            <Button to="/categorias">Categorias</Button>
            <Button to="/lista">Lista de gastos</Button>
            <Button to="#">X</Button>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  );
};

export default App;
