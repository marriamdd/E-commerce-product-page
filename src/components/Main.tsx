import styled from "styled-components";
import CatalogComponent from "./CatalogComponent";
import ContentContainer from "./ContentContainer";
import { useContext } from "react";
import { SomeContext } from "../App";
import CartComponent from "./CartComponent";

export default function Main() {
  const { showCart } = useContext(SomeContext);
  return (
    <MainComponent>
      {showCart && <CartComponent />}
      <CatalogComponent />
      <ContentContainer />
    </MainComponent>
  );
}

const MainComponent = styled.main`
  position: relative;
  width: 100%;
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
