import { useContext, useState } from "react";
import styled from "styled-components";
import { SomeContext } from "../App";

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
  const [imageIndex, setImageIndex] = useState(0);
  const { setShowZoom, showZoom } = useContext(SomeContext);
  return (
    <CatalogContainer>
      <div className="swipeImagesDIv">
        {bigImagesArray.map((item, index) => {
          if (index === imageIndex) {
            return (
              <img
                onClick={() => {
                  setShowZoom(!showZoom);
                }}
                key={index}
                src={item}
                alt="product"
              />
            );
          }
          return null;
        })}

        <div className="arrowsDiv">
          <div
            className="arrow_background"
            onClick={() =>
              setImageIndex((prev) =>
                prev == 0 ? (prev = 0) : (prev = prev - 1)
              )
            }
          >
            <img src="/images/icon-previous.svg" alt="icon-previous" />
          </div>
          <div
            className="arrow_background"
            onClick={() =>
              setImageIndex((prev) =>
                prev == 3 ? (prev = 3) : (prev = prev + 1)
              )
            }
          >
            <img src="/images/icon-next.svg" alt="icon-next" />
          </div>
        </div>
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
      opacity: 0.5;
      border: 2px solid #ff7e1b;
    }
  }
`;

const CatalogContainer = styled.div`
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

  .arrowsDiv {
    position: absolute;
    top: 13.5rem;
    display: flex;
    padding-left: 2rem;
    gap: 27rem;
    @media screen and (min-width: 1000px) {
      display: none;
    }
    .arrow_background {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;

      background-color: white;
      border-radius: 50%;
    }
    img {
      width: 12px;
      height: 12px;
    }
  }
`;
