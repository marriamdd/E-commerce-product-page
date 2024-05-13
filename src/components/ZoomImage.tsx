import styled from "styled-components";
import CatalogComponent from "./CatalogComponent";
import { useContext } from "react";
import { SomeContext } from "../App";

export default function ZoomImage() {
  const { setShowZoom, showZoom } = useContext(SomeContext);
  return (
    <ZoomContainer showZoom={showZoom}>
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
const ZoomContainer = styled.div<{ showZoom: boolean }>`
  .desktopArrowDiv {
    @media screen and (min-width: 1300px) {
      position: absolute;
      top: 25rem;
      display: flex;
      padding-left: 0rem;
      left: -2rem;
      gap: 51rem;
    }
  }

  .swipeImagesDIv img {
    @media screen and (min-width: 1000px) {
      width: ${(props) => (props.showZoom ? "550px" : "445px")};
      height: ${(props) => (props.showZoom ? "550px" : "445px")};
      cursor: pointer;
    }
  }
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
      top: -36rem;
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
