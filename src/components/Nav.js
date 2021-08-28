import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/controller.svg";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1> Game Base </h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} placeholder="Search a game..." type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: white;
    transition: outline 1s ease-in;
    border-radius: 5px;

    &:focus {
      outline: #716f81 solid 1px;
      border-radius: 5px;
      transition: outline 2s ease-in;
    }
  }
  button {
    font-size: 1.5rem;
    border-radius: 5px;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #3b185f;
    color: white;
    transition: background 1s;

    &:hover {
      transition: background 1s;
      background-color: #716f81;
    }
  }

  @media only screen and (max-width: 480px) {
    input {
      width: 65vw;
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
      margin-top: .3rem;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: .8rem;
  }
`;

export default Nav;
