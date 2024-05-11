import styled from "styled-components";
import CatalogComponent from "./CatalogComponent";
import { useContext } from "react";
import { SomeContext } from "../App";

export default function ZoomImage() {
  const { setShowZoom } = useContext(SomeContext);
  return (
    <ZoomContainer>
      <div onClick={() => setShowZoom(false)} className="background"></div>

      <div className="content">
        <img
          onClick={() => setShowZoom(false)}
          className="close"
          src="/images/icon-close.svg"
          alt="close"
        />{" "}
        <CatalogComponent />
      </div>
    </ZoomContainer>
  );
}
const ZoomContainer = styled.div`
  display: none;
  @media screen and (min-width: 1300px) {
    position: relative;
    display: block;
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
      top: -33rem;
      left: 38rem;
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 2rem;
      z-index: 9999999999909999999999;
      .close {
        width: 20px;
        height: 20px;
        fill: white;
      }
    }
  }
`;
