import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const categoriesArray = ["Collections", "Men", "Women", "About", "Contact"];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        console.log("meti 700");
        setShowCategories(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <HeaderContainer showCategories={showCategories}>
      <div className="logoDiv">
        <img
          className="menu_icon"
          onClick={() => setShowCategories(!showCategories)}
          src="/images/icon-menu.svg"
          alt="menu-icon"
        />
        <img className="sneakers_icon" src="/images/sneakers 2.svg" alt="" />
      </div>
      <div
        className="categories_background_div"
        onClick={(e) => {
          const clickedElement = e.target as HTMLElement;
          if (clickedElement.classList.contains("categories_background_div")) {
            setShowCategories(!showCategories);
          }
        }}
      >
        <ul>
          <li
            className="closeIcon"
            onClick={() => setShowCategories(!showCategories)}
          >
            {" "}
            <img src="/images/icon-close.svg" alt="close_icon" />
          </li>

          {categoriesArray.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="cartDiv">
        <img src="/images/icon-cart.svg" alt="cart_icon" />
        <img src="/images/image-avatar.png" alt="avatar-img" />
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header<{ showCategories: boolean }>`
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  @media screen and (min-width: 750px) {
    padding-inline: 5rem;
    transition: padding-inline 2s ease;
  }
  .logoDiv {
    visibility: ${(props) => (props.showCategories ? "hidden" : "visible")};
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
      @media screen and (min-width: 700px) {
        visibility: hidden;
      }
    }
  }
  .categories_background_div {
    opacity: 0.75;
    background: #000;
    z-index: 99;
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    bottom: 0;
    top: 50px;
    visibility: ${(props) => (props.showCategories ? "visible" : "hidden")};
  }
  .closeIcon {
    visibility: ${(props) => (props.showCategories ? "visible" : "hidden")};
  }
  ul {
    background: #fff;

    display: flex;
    position: absolute;
    z-index: 99999999;
    top: -50px;
    bottom: 0;
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
      width: 100%;

      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 3rem;
      visibility: visible;
      padding-left: 20rem;
      color: #69707d;

      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.6rem;
      transition: visibility 1s ease;
      transition: gap, color, font-size, font-weight 2s ease;
    }
    @media screen and (min-width: 1200px) {
      padding-left: 30rem;
      transition: padding-left 1s ease;
    }
    li:hover {
      color: #ff7e1b;
      font-weight: 800;
      @media screen and (min-width: 700px) {
        color: #000;
      }
    }
  }
  .cartDiv {
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
    }
  }
`;
