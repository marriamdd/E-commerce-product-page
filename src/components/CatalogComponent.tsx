import { useContext } from "react";
import styled from "styled-components";
import { SomeContext } from "../App";
import ArrowsComponent from "./ArrowsComponent";

export default function CatalogComponent() {
  const bigImagesArray = [
    " /images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];

  const smallImagesArray = [
    " /images/image-product-1-thumbnail.jpg",
    "/images/image-product-2-thumbnail.jpg",
    "/images/image-product-3-thumbnail.jpg",
    "/images/image-product-4-thumbnail.jpg",
  ];

  const { setShowZoom, showZoom, setImageIndex, imageIndex } =
    useContext(SomeContext);
  return (
    <CatalogContainer showZoom={showZoom}>
      <div className="swipeImagesDIv">
        {bigImagesArray.map((item, index) => {
          if (index === imageIndex) {
            return (
              <img
                onClick={() => {
                  setShowZoom(true);
                }}
                key={index}
                src={item}
                alt="product"
              />
            );
          }
          return null;
        })}

        <ArrowsComponent />
      </div>

      <SelectContainer>
        {smallImagesArray.map((item, index) => (
          <img
            onClick={() => setImageIndex(index)}
            key={index}
            src={item}
            alt="product"
            className={index == imageIndex ? "activeProduct" : ""}
          />
        ))}
      </SelectContainer>
    </CatalogContainer>
  );
}

const SelectContainer = styled.div`
  display: none;

  @media screen and (min-width: 1000px) {
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    img {
      border-radius: 10px;
      width: 88px;
      height: 88px;
      cursor: pointer;
    }
    img:hover {
      opacity: 0.7;
    }
    .activeProduct {
      opacity: 0.3;
      border: 2px solid #ff7e1b;
    }
  }
`;

const CatalogContainer = styled.div<{ showZoom: boolean }>`
  .desktopArrowDiv {
    @media screen and (min-width: 987px) {
      display: none;
    }
    @media screen and (min-width: 1300px) {
      position: absolute;
      top: 22rem;
      padding-left: 0rem;
      left: -2rem;
      gap: 41rem;
    }
  }
  .swipeImagesDIv {
    position: relative;
  }
  .swipeImagesDIv img {
    border-radius: 10px;
    width: 375px;
    height: 300px;
    @media screen and (min-width: 1000px) {
      width: 445px;
      height: 445px;

      cursor: pointer;
    }
  }
`;
