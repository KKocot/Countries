import "../style/App.css";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Route, Routes } from "react-router-dom";
import { CountryPageDetails } from "./country-details";
import { CountryProvider } from "../components/elements/context";
import { ErrorBoundary } from "../components/error-boundary";

function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
        <CountryProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="CountryPageDetails/:countryName"
              element={<CountryPageDetails />}
            />
          </Routes>
        </CountryProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
