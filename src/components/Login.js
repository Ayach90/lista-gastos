import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Button from '../elements/Button';
import { ContenedorBoton, Formulario, Input } from '../elements/FormElements';
import { ContenedorHeader, Header, Titulo } from '../elements/Header';
import { ReactComponent as SVGLogin } from '../imagenes/login.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import Alert from '../elements/Alert';

const SVG = styled(SVGLogin)`
  width: 100%;
  max-height: 12.5rem;
  margin-bottom: 1.25rem;
`;

const Register = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstadoAlerta(false);
    cambiarAlerta({});
    console.log('submit1');

    const regularExpression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!regularExpression.test(email)) {
      setEstadoAlerta(true);
      cambiarAlerta({ tipo: 'error', mensaje: 'Error: Email invalido' });
      return;
    }
    if (email === '' || password === '') {
      setEstadoAlerta(true);
      cambiarAlerta({ tipo: 'error', mensaje: 'ERROR DATOS VACÍOS' });
      return;
    }

    try {
      console.log('submit');
      await signInWithEmailAndPassword(auth, email, password);
      console.log('SESIÓN INICIADA');
      history('/');
    } catch (error) {
      console.log(error);
      let mensaje;
      switch (error.code) {
        case 'auth/user-not-found':
          mensaje = 'Este usuario no existe.';
          break;
        case 'auth/wrong-password':
          mensaje = 'Contraseña erronea.';
          break;
        default:
          mensaje = 'Hubo un error al intentar iniciar sesión.';
          break;
      }
      setEstadoAlerta(true);
      cambiarAlerta({ tipo: 'error', mensaje });
    }
  };
  return (
    <>
      <Helmet>
        <title>Iniciar sesión</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar sesión</Titulo>
          <div>
            <Button to='/register'>Registrarse</Button>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario onSubmit={handleSubmit}>
        <SVG />
        <Input
          type='email'
          name='email'
          placeholder='Correo electrónico'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type='password'
          name='password'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <ContenedorBoton>
          <Button as='button' to='#' type='submit' primario>
            Iniciar sesión
          </Button>
        </ContenedorBoton>
      </Formulario>
      <Alert
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        setEstadoAlerta={setEstadoAlerta}
      />
    </>
  );
};

export default Register;
