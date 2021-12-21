import React from "react";
import Helmet from "react-helmet";
import GoBack from "../elements/GoBack";
import { Header, Titulo } from "../elements/Header";

const ExpensesList = () => {
  return (
    <>
      <Helmet>
        <title>Gastos por categoria</title>
      </Helmet>
      <Header>
        <GoBack />
        <Titulo>Gastos por categoria</Titulo>
      </Header>
    </>
  );
};

export default ExpensesList;
