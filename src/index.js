import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";
import Container from "./elements/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import EditExpenses from "./components/EditExpenses";
import Register from "./components/Register";
import ExpensesList from "./components/ExpensesList";
import ExpensesByCategory from "./components/ExpensesByCategory";
import NoMatch from "./components/NoMatch";
import Helmet from "react-helmet";
import Background from "./components/Background";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";

WebFont.load({
  google: {
    //Work+Sans:wght@400;500;700
    families: ["Work Sans:400, 500, 700", "sans-serif"],
  },
});
const Index = () => {
  return (
    <>
      <Helmet>
        <title>HolA</title>
      </Helmet>
      <AuthProvider>
        <BrowserRouter>
          <Container>
            <Routes>
              <Route
                path="/login"
                element={
                  <AuthRoute>
                    <Login />
                  </AuthRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <AuthRoute>
                    <Register />
                  </AuthRoute>
                }
              />

              <Route
                path="/categorias"
                element={
                  <PrivateRoute>
                    <ExpensesByCategory />
                  </PrivateRoute>
                }
              />

              <Route
                path="/editar/:id"
                element={
                  <PrivateRoute>
                    <EditExpenses />
                  </PrivateRoute>
                }
              />
              <Route
                path="/lista"
                element={
                  <PrivateRoute>
                    <ExpensesList />
                  </PrivateRoute>
                }
              />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <App />
                  </PrivateRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PrivateRoute>
                    <NoMatch />
                  </PrivateRoute>
                }
              ></Route>
            </Routes>
          </Container>
        </BrowserRouter>
      </AuthProvider>
      <Background />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
