import React from "react";
import Helmet from "react-helmet";
import GoBack from "../elements/GoBack";
import { Header, Titulo } from "../elements/Header";

const ExpensesList = () => {
  return (
    <>
      <Helmet>
        <title>Lista de gastos</title>
      </Helmet>
      <Header>
        <GoBack />
        <Titulo>Lista de gastos</Titulo>
      </Header>
    </>
  );
};

export default ExpensesList;
