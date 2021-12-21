import React, { useState } from "react";
import Helmet from "react-helmet";
import Button from "../elements/Button";
import { ContenedorBoton, Formulario, Input } from "../elements/FormElements";
import { ContenedorHeader, Header, Titulo } from "../elements/Header";
import { ReactComponent as SVGLogin } from "../imagenes/registro.svg";
import styled from "styled-components";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SVG = styled(SVGLogin)`
  width: 100%;
  max-height: 6.25rem;
  margin-bottom: 1.25rem;
`;

const Register = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const regularExpression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!regularExpression.test(email)) {
      console.log("ERROR EMAIL NO VALIDO");
      return;
    }
    if (email === "" || password2 === "" || password === "") {
      console.log("ERROR DATOS VACÍOS");
      return;
    }
    if (password2 !== password) {
      console.log("ERROR CONTRASEÑAS NO COINCIDEN");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario creado");
      history("/");
    } catch (error) {
      let mensaje;
      switch (error.code) {
        case "auth/invalid-password":
          mensaje = "La contraseña tiene que ser de al menos 6 caracteres.";
          break;
        case "auth/email-already-in-use":
          mensaje =
            "Ya existe una cuenta con el correo electrónico proporcionado.";
          break;
        case "auth/invalid-email":
          mensaje = "El correo electrónico no es válido.";
          break;
        default:
          mensaje = "Hubo un error al intentar crear la cuenta.";
          break;
      }
      console.log(mensaje);
    }
  };

  return (
    <>
      <Helmet>
        <title>Crear Cuenta</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Crear cuenta</Titulo>
          <div>
            <Button to="/login">Iniciar sesion</Button>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario onSubmit={handleSubmit}>
        <SVG />
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          name="password2"
          placeholder="Repetir contraseña"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <ContenedorBoton>
          <Button as="button" to="#" type="submit" primario>
            Crear cuenta
          </Button>
        </ContenedorBoton>
      </Formulario>
    </>
  );
};

export default Register;
