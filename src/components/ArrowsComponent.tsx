import { useContext } from "react";
import styled from "styled-components";
import { SomeContext } from "../App";

export default function ArrowsComponent() {
  const { setImageIndex, showZoom } = useContext(SomeContext);
  return (
    <ArrowsDiv className="desktopArrowDiv" showZoom={showZoom}>
      <div
        className="arrow_background"
        onClick={() =>
          setImageIndex((prev) => (prev == 0 ? (prev = 0) : (prev = prev - 1)))
        }
      >
        <img
          className="arrow"
          src="/images/icon-previous.svg"
          alt="icon-previous"
        />
      </div>
      <div
        className="arrow_background"
        onClick={() =>
          setImageIndex((prev) => (prev == 3 ? (prev = 3) : (prev = prev + 1)))
        }
      >
        <img className="arrow" src="/images/icon-next.svg" alt="icon-next" />
      </div>
    </ArrowsDiv>
  );
}

const ArrowsDiv = styled.div<{ showZoom: boolean }>`
  @media screen and (max-width: 987px) {
    display: flex;
    position: absolute;
    top: 13.5rem;
    padding-left: 2rem;
    gap: 26rem;
  }

  .arrow_background {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    background-color: white;
    border-radius: 50%;
    .arrow {
      width: 12px;
      height: 12px;
    }
  }
`;
