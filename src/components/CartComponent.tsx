import { useContext } from "react";
import styled from "styled-components";
import { SomeContext } from "../App";

export default function CartComponent() {
  const { quantity, setQuantity, setShowQuantity } = useContext(SomeContext);
  return (
    <CartContainer>
      <div className="cartDiv">
        <div className="cartTitleDiv">
          <span>Cart</span>
        </div>

        {quantity == 0 ? (
          <div className="emptyDiv">
            <span>Your cart is empty.</span>
          </div>
        ) : (
          <div className="fillDiv">
            <div className="productDiv">
              <img
                className="chosenProduct"
                src="/images/image-product-1-thumbnail.jpg"
                alt="chosen product"
              />
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <div className="priceDiv">
                  <span>$125.00 </span>
                  <span>x</span>
                  <span>{quantity}</span>
                  <span className="totalPrice">{`$${quantity * 125}`}</span>
                </div>
              </div>
              <img
                onClick={() => {
                  setQuantity(0);
                  setShowQuantity(0);
                }}
                className="bin"
                src="/images/Mask 2.svg"
                alt="bin"
              />
            </div>
            <div className="checkoutDiv">
              <span>Checkout</span>
            </div>
          </div>
        )}
      </div>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  position: fixed;

  top: 7.5rem;
  z-index: 99999999999;
  @media screen and (min-width: 700px) {
    right: 5rem;
    transform: right 1s;
  }
  .cartDiv {
    width: 360px;
    height: 256px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
  }
  .cartTitleDiv {
    padding-block: 2rem;
    border-bottom: 1.5px solid #e4e9f2;
    & > span {
      padding-inline: 2rem;
      font-size: 16px;
      font-weight: 700;
    }
  }
  .emptyDiv {
    width: 100%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    & > span {
      color: #69707d;
      font-size: 16px;
      font-weight: 700;
      line-height: 26px;
    }
  }
  .priceDiv {
    display: flex;

    gap: 1rem;
    & > span {
      color: #69707d;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
    }
    .totalPrice {
      color: #1d2026;
      font-weight: 700;
    }
  }
  .fillDiv {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
  }
  .productDiv {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    & > div p {
      color: #69707d;

      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.6rem;
    }
    .chosenProduct {
      width: 50px;
      height: 50px;
      border-radius: 4px;
    }
    .bin {
      width: 14px;
      height: 16px;
      cursor: pointer;
    }
  }
  .checkoutDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 312px;
    height: 56px;
    border-radius: 10px;
    background: #ff7e1b;

    & > span {
      cursor: pointer;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
