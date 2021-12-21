import React from "react";
import Helmet from "react-helmet";
import Button from "../elements/Button";
import { ContenedorBoton, Formulario, Input } from "../elements/FormElements";
import { ContenedorHeader, Header, Titulo } from "../elements/Header";
import { ReactComponent as SVGLogin } from "../imagenes/login.svg";
import styled from "styled-components";

const SVG = styled(SVGLogin)`
  width: 100%;
  max-height: 12.5rem;
  margin-bottom: 1.25rem;
`;

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Iniciar sesión</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar sesión</Titulo>
          <div>
            <Button to="/register">Registrarse</Button>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario>
        <SVG />
        <Input type="email" name="email" placeholder="Correo electrónico" />
        <Input type="password" name="password" placeholder="Contraseña" />
        <ContenedorBoton>
          <Button as="button" to="#" type="submit" primario>
            Iniciar sesión
          </Button>
        </ContenedorBoton>
      </Formulario>
    </>
  );
};

export default Register;
