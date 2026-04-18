import "./App.tsx";
import Main from "./components/Main/Main.tsx";
import Header from "./components/Header/Header.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.ts";
import { ShowCase } from "./components/Carrousel/ShowCase.tsx";
import Cards from "./components/Banner/Cards.tsx";
import { NavigationBrands } from "./components/Brands/NavigationBrands.tsx";

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />
      <Main />
      <ShowCase />
      <Cards />

      <ShowCase showCategories={false} showCategoriesInfo={true} />
      <Cards />

      <NavigationBrands />
      <ShowCase showCategories={false} showCategoriesInfo={true} />
    </>
  );
}

export default App;
