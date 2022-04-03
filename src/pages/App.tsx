import React from "react";
import "../style/App.css";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Route, Routes } from "react-router-dom";
import { CountryPageDetails } from "./country-details";
import { CountryProvider } from "../components/elements/context";

function App() {
  return (
    <div className="App">
      <Header />
      <CountryProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="CountryPageDetails/:countryName"
            element={<CountryPageDetails />}
          />
        </Routes>
      </CountryProvider>
    </div>
  );
}

export default App;
