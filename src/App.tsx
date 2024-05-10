import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyle } from "./globalStyles.ts/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
