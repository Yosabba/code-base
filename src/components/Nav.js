import React, { useState } from "react";
//Animation
import logo from "../img/server.png";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";
import { motion } from "framer-motion";

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
    <motion.header
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="ml-56 mobile:ml-0"
    >
      {/* Daisy Header */}
      <div className="navbar my-7 bg-base-100">
        <div className="flex-1">
          <img
            onClick={clearSearched}
            src={logo}
            alt="logo"
            className="w-16 mr-2 cursor-pointer"
          />
          <h1> Game Base </h1>
        </div>
      </div>

      {/* Search form and button */}
      <form className="form-control pb-24">
        <div className="input-group flex items-center justify-center">
          <input
            type="text"
            placeholder="Search Games"
            className="input input-bordered w-80 focus:outline-[#88888800]"
            value={textInput}
            onChange={inputHandler}
          />
          <button onClick={submitSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </motion.header>
  );
};

export default Nav;
