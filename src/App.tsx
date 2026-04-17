import "./App.tsx";
import Main from "./components/Main/Main.tsx";
import Header from "./components/Header/Header.tsx";
import { GlobalStyles } from "./GlobalStyles.ts";
import { ShowCase } from "./components/Carrousel/ShowCase.tsx";

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />
      <Main />
      <ShowCase />
    </>
  );
}

export default App;
