import styled from "styled-components";
import CatalogComponent from "./CatalogComponent";
import ContentContainer from "./ContentContainer";
import { useContext } from "react";
import { SomeContext } from "../App";
import CartComponent from "./CartComponent";
import ZoomImage from "./ZoomImage";

export default function Main() {
  const { showCart, setShowCart, showZoom } = useContext(SomeContext);
  console.log(showCart);
  return (
    <MainComponent
      onClick={(e) => {
        const clickedElement = e.target as HTMLElement;
        if (!clickedElement.closest(".cartDiv")) {
          setShowCart(false);
        }
      }}
    >
      {showZoom && <ZoomImage />}
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
  @media screen and (min-width: 1000px) {
    margin-top: 13rem;
    flex-direction: row;
    justify-content: center;
    gap: 20rem;
  }
`;
