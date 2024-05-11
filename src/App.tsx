import { createContext, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyle } from "./globalStyles.ts/GlobalStyles";

interface IE_ContextType {
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
  setShowZoom: React.Dispatch<React.SetStateAction<boolean>>;
  showZoom: boolean;
}
export const SomeContext = createContext<IE_ContextType>({
  setQuantity: () => {},
  quantity: 0,
  setShowCart: () => {},
  showCart: false,
  setShowZoom: () => {},
  showZoom: false,
});
function App() {
  const [quantity, setQuantity] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  return (
    <>
      <SomeContext.Provider
        value={{
          setQuantity,
          quantity,
          setShowCart,
          showCart,
          showZoom,
          setShowZoom,
        }}
      >
        <GlobalStyle />
        <Header />
        <Main />
      </SomeContext.Provider>
    </>
  );
}

export default App;
