import styled from "styled-components";
import CatalogComponent from "./CatalogComponent";

export default function ZoomImage() {
  console.log("ki");
  return (
    <ZoomContainer>
      <div className="background"></div>
      <div className="content">
        {" "}
        <CatalogComponent />
      </div>
    </ZoomContainer>
  );
}
const ZoomContainer = styled.div`
  position: relative;

  .background {
    position: fixed;
    z-index: 9999999999999;
    top: -15rem;
    bottom: -11rem;
    left: 0;
    right: 0;
    opacity: 0.75;
    background: #000;
  }
  .content {
    position: absolute;
    top: -25rem;
    left: 40rem;

    z-index: 9999999999909999999999;
  }
`;
