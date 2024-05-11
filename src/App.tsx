import { createContext, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyle } from "./globalStyles.ts/GlobalStyles";

interface IE_ContextType {
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
}
export const SomeContext = createContext<IE_ContextType>({
  setQuantity: () => {},
  quantity: 0,
});
function App() {
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <SomeContext.Provider value={{ setQuantity, quantity }}>
        <GlobalStyle />
        <Header />
        <Main />
      </SomeContext.Provider>
    </>
  );
}

export default App;
