import { useState } from "react";
import styled from "styled-components";
export default function CatalogComponent() {
  const bigImagesArray = [
    " /images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];
  const [imageIndex, setImageIndex] = useState(0);
  console.log(imageIndex);
  return (
    <CatalogContainer>
      <div className="swipeImagesDIv">
        {bigImagesArray.map((item, index) => {
          if (index === imageIndex) {
            return <img key={index} src={item} alt="product" />;
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
    </CatalogContainer>
  );
}

const CatalogContainer = styled.div`
  .swipeImagesDIv {
    position: relative;
  }
  .swipeImagesDIv img {
    width: 375px;
    height: 300px;
    flex-shrink: 0;
  }

  .arrowsDiv {
    position: absolute;
    top: 13.5rem;
    display: flex;
    padding-left: 2rem;
    gap: 27rem;
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
