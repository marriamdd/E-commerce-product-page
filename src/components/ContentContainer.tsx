import { useContext } from "react";
import styled from "styled-components";
import { SomeContext } from "../App";

export default function ContentContainer() {
  const { setQuantity, quantity } = useContext(SomeContext);
  return (
    <ContentWrapper>
      <div className="descriptionsContainer">
        <h4>Sneaker Company</h4>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="priceContainer">
        <div className="priceDiv">
          <span>$125.00</span>
          <div className="discountPercentageDiv">
            <span>50%</span>
          </div>
        </div>
        <span className="prevPrice">$250.00</span>
      </div>
      <ChooseQuantity>
        <div>
          <img
            onClick={() =>
              setQuantity((prev) =>
                prev == 0 ? (prev = 0) : (prev = prev - 1)
              )
            }
            className="minus"
            src="/images/icon-minus.svg"
            alt="minus"
          />
          <span>{quantity}</span>
          <img
            onClick={() => setQuantity((prev) => (prev = prev + 1))}
            className="plus"
            src="/images/icon-plus.svg"
            alt="plus"
          />
        </div>
      </ChooseQuantity>
      <AddTOCartContainer>
        <div>
          <img src="/images/icon-cart.svg" alt="cart" />
          <span>Add to cart</span>
        </div>
      </AddTOCartContainer>
    </ContentWrapper>
  );
}
const AddTOCartContainer = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: center;
  div {
    width: 327px;
    height: 56px;
    border-radius: 10px;
    background: #ff7e1b;
    box-shadow: 0px 20px 50px -20px #ff7e1b;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    & > img {
      width: 17.457px;
      height: 16px;
      fill: #fff;
    }
    & > span {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
const ChooseQuantity = styled.div`
  width: 100%;
  padding-block: 1.2rem;
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    & > span {
      color: #1d2026;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
    }
    .minus {
      width: 12px;
      height: 3.332px;
      flex-shrink: 0;
    }
    .plus {
      width: 12px;
      height: 12px;
      flex-shrink: 0;
    }
  }
  div {
    width: 32.7rem;
    height: 5.6rem;
    border-radius: 10px;
    background: #f6f8fd;
  }
`;
const ContentWrapper = styled.div`
  .descriptionsContainer {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;

    gap: 1.5rem;
    & > h4 {
      color: #ff7e1b;
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 1.846px;
      text-transform: uppercase;
    }
    & > h2 {
      color: #1d2026;
      font-size: 2.8rem;
      font-weight: 700;
      line-height: 3.2rem;
    }
    & > p {
      color: #69707d;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 2.5rem;
    }
  }
  .priceContainer {
    display: flex;
    align-items: center;

    padding-left: 2rem;
    padding-right: 3rem;
    justify-content: space-between;
    .prevPrice {
      color: #b6bcc8;
      font-size: 16px;
      font-weight: 700;
      line-height: 26px;
      text-decoration-line: strikethrough;
      text-decoration: line-through;
    }
    .priceDiv {
      display: flex;
      align-items: center;
      gap: 2rem;
      & > span {
        font-size: 28px;
        font-weight: 700;
      }

      .discountPercentageDiv {
        width: 51px;
        height: 27px;
        border-radius: 6px;
        background: #ffeee2;
        text-align: center;
        align-content: center;
        & > span {
          color: #ff7e1b;
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
  }
`;
