// import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("/menumobile-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  width: 100vw;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 5;

  .menu-logo {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  @media (max-width: 576px) {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  .information {
    height: auto;
    color: white;
    position: relative;
  }

  .burger-contact {
    position: absolute;
    bottom: -7rem;
    left: 1rem;
  }

  .burger-opening-hours {
    position: absolute;
    bottom: -7rem;
    right: 1rem;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #ada4a3;
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  return (
    <nav>
      <StyledMenu open={open}>
        <img className="menu-logo" src="/menu-logo.svg"></img>
        <a href="/#home" onClick={() => setOpen(!open)}>
          Hem
        </a>
        <a href="/#about" onClick={() => setOpen(!open)}>
          Om oss
        </a>
        <a href="/#menu" onClick={() => setOpen(!open)}>
          Meny
        </a>
        <a href="/#contact" onClick={() => setOpen(!open)}>
          Boka Event
        </a>
        <Link href="/location">
          <a>Hitta hit</a>
        </Link>
        <div className="information">
          <p className="burger-contact">
            Kontakta oss <br></br> 0708-840717 <br></br>{" "}
            gundlagardscafe@gmail.com
          </p>
          <p className="burger-opening-hours">
            Öppettider <br></br> Lördag: 11-19 <br></br> Söndag: 10-17
          </p>
        </div>
      </StyledMenu>
    </nav>
  );
};

export default Menu;
