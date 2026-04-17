import './App.tsx'
import Main from './components/Main/Main.tsx'
import Header from './components/Header/Header.tsx'
import { GlobalStyles } from './GlobalStyles.ts';

function App() {

  return (
      <>
        <GlobalStyles/>

        <Header/>
        <Main/>
      </>
  )
}

export default App;
