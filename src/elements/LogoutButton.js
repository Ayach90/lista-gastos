import React from 'react';
import { ReactComponent as IconoCerrarSesion } from './../imagenes/log-out.svg';
import Boton from './Button';
import { auth } from './../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const LogoutButton = () => {
  const history = useNavigate();
  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      history('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Boton iconoGrande as='button' onClick={cerrarSesion}>
      <IconoCerrarSesion />
    </Boton>
  );
};

export default LogoutButton;
