import React, { useState } from "react";
//Animation
import logo from "../img/console.svg";
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
      {/* Header */}
      <div className="navbar bg-base-100 flex justify-between">
        <div className="flex-none">
          <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="my-0 mx-auto">
          <img
            onClick={clearSearched}
            src={logo}
            alt="logo"
            className="w-16 cursor-pointer"
          />
          <a href="#" className="btn btn-ghost normal-case text-xl">
            Game Base
          </a>
        </div>
        {/* <form className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search Games"
              className="input input-bordered w-20 focus:outline-[#88888800]"
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
        </form> */}
      </div>

      {/* drawer */}
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu mobile:w-72 mobile:top-18 bg-base-100 w-0 laptop:top-18 laptop:left-0 fixed h-full rounded-box">
            <ul>
              <li className="menu-title">
                <h1 className="text-8xl">Platforms</h1>
              </li>
              <li>
                <a>PC</a>
              </li>
              <li>
                <a>PlayStation</a>
              </li>
              <li>
                <a>Xbox</a>
              </li>
              <li>
                <a>Nitendo Switch</a>
              </li>
              <li className="menu-title">
                <span>Genres</span>
              </li>
              <li>
                <a>Action</a>
              </li>
              <li>
                <a>RPG</a>
              </li>
              <li>
                <a>Strategy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Nav;
