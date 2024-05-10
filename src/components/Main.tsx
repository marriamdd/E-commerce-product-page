import styled from "styled-components";
import CatalogComponent from "./CatalogComponent";
import ContentContainer from "./ContentContainer";

export default function Main() {
  return (
    <MainComponent>
      <CatalogComponent />
      <ContentContainer />
    </MainComponent>
  );
}

const MainComponent = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
