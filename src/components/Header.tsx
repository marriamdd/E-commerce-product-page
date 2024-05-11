import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { SomeContext } from "../App";

export default function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const categoriesArray = ["Collections", "Men", "Women", "About", "Contact"];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setShowCategories(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { quantity, setShowCart } = useContext(SomeContext);
  return (
    <HeaderContainer showCategories={showCategories}>
      <div className="logoDiv">
        <img
          className="menu_icon"
          onClick={() => {
            setShowCategories(!showCategories);
            setShowCart(false);
          }}
          src="/images/icon-menu.svg"
          alt="menu-icon"
        />
        <img className="sneakers_icon" src="/images/sneakers 2.svg" alt="" />
      </div>
      <div className="categories_div">
        <ul>
          <li
            className="closeIcon"
            onClick={() => setShowCategories(!showCategories)}
          >
            {" "}
            <img src="/images/icon-close.svg" alt="close_icon" />
          </li>

          {categoriesArray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div
          className="categories_background_div"
          onClick={(e) => {
            const clickedElement = e.target as HTMLElement;
            if (
              clickedElement.classList.contains("categories_background_div")
            ) {
              setShowCategories(!showCategories);
            }
          }}
        ></div>
      </div>
      <div className="cartContainer">
        <div
          onClick={() => {
            setShowCart((prev) => !prev);
          }}
          className="cartIconsDiv"
        >
          {quantity > 0 && (
            <div className="cartQuantityDiv">
              {" "}
              <span>{quantity}</span>
            </div>
          )}
          <img src="/images/icon-cart.svg" alt="cart_icon" />
        </div>

        <img src="/images/image-avatar.png" alt="avatar-img" />
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header<{ showCategories: boolean }>`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 9999999;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  .cartQuantityDiv {
    position: absolute;
    top: -0.5rem;
    left: 1rem;
    width: 1.9rem;
    height: 1.3rem;
    border-radius: 6.5px;
    background: #ff7e1b;
    text-align: center;

    & > span {
      color: #fff;
      font-size: 10px;
      font-weight: 700;
    }
  }
  @media screen and (min-width: 750px) {
    padding-inline: 10rem;
    transition: padding-inline 2s ease;
  }
  .logoDiv {
    display: flex;
    align-items: center;
    gap: 1rem;

    .sneakers_icon {
      width: 137.5px;
      height: 20px;
      flex-shrink: 0;
    }
    .menu_icon {
      width: 1.6rem;
      height: 1.5rem;
      cursor: pointer;
      @media screen and (min-width: 700px) {
        visibility: hidden;
      }
    }
  }

  .categories_background_div {
    opacity: 0.75;
    background: #000;

    position: fixed;
    z-index: 9999;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    visibility: ${(props) => (props.showCategories ? "visible" : "hidden")};
  }

  .closeIcon {
    cursor: pointer;
    visibility: ${(props) => (props.showCategories ? "visible" : "hidden")};
  }
  ul {
    background: white;
    display: flex;
    opacity: 1 !important;
    position: fixed;
    z-index: 99999999999;
    top: 0;
    bottom: 0;
    left: 0;
    width: 80%;
    flex-direction: column;
    visibility: ${(props) => (props.showCategories ? "visible" : "hidden")};
    padding: 2rem 3rem;
    gap: 3rem;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.6rem;

    @media screen and (min-width: 700px) {
      background-color: transparent;
      height: 70px;

      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 1rem;
      visibility: visible;
      padding-left: 25rem;
      color: #69707d;

      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.6rem;
      transition: visibility 1s ease;
      transition: gap, color, font-size, font-weight 2s ease;
    }
    @media screen and (min-width: 1200px) {
      gap: 3rem;
      padding-left: 35rem;
      transition: padding-left 1s ease;
    }
    li:hover {
      cursor: pointer;
      color: #ff7e1b;
      font-weight: 800;
      @media screen and (min-width: 700px) {
        color: #000;
      }
    }
  }
  .cartContainer {
    position: relative;
    display: flex;
    gap: 1rem;
    transition: gap 2s ease;
    @media screen and (min-width: 730px) {
      transition: gap 2s ease;
      gap: 2rem;
    }
    img {
      width: 21.821px;
      height: 20px;
      fill: #1d2026;
    }
  }
`;
