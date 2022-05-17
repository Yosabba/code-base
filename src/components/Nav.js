import React, { useState, useEffect } from "react";
//Animation
import logo from "../img/console.svg";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");
  const [mobileWindowSize, setMobileWindowSize] = useState(false);
  const [desktopWindowSize, setDesktopWindowSize] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 480) {
      setMobileWindowSize(false);
      setDesktopWindowSize(true);
    } else if (window.innerWidth < 480) {
      setDesktopWindowSize(false);
      setMobileWindowSize(true);
    }
  };

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
      className="ml-56 mobile:ml-0 mobile:fixed desktop:relative mobile:w-full z-10 pb-16"
    >
      {/* Header */}
      <div className="navbar bg-base-100 flex justify-between">
        <div className="flex-none">
          {desktopWindowSize ? null : (
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
          )}
        </div>
        <div className="my-0 mx-auto">
          <img
            onClick={clearSearched}
            src={logo}
            alt="logo"
            className="w-16 cursor-pointer"
          />
          <Link to="/" className="btn btn-ghost hover:bg-transparent">
            {mobileWindowSize ? null : (
              <h1 className="btn btn-ghost normal-case text-xl hover:bg-transparent">
                Game Base
              </h1>
            )}
          </Link>
        </div>
        {/* {mobileWindowSize ? null : (
          <form className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search Games"
                className="input input-bordered w-48 focus:outline-[#88888800]"
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
        )} */}
        <form className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search Games"
              className="input input-bordered rounded-2xl desktop:w-48 desktop:text-lg mobile:input-md mobile:w-32 focus:outline-[#88888800] mobile:text-xs"
              value={textInput}
              onChange={inputHandler}
            />
            <button
              onClick={submitSearch}
              className="btn desktop:btn-square mobile:btn-circle mobile:w-8"
            >
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
      </div>

      {/* drawer */}
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
        </div>
        <div className="drawer-side touch-pan-y">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu scrollbar mobile:w-72 mobile:top-18 bg-base-100 w-0 laptop:top-18 laptop:left-0 h-full fixed overflow-y-scroll">
            <ul>
              <h3 className="text-2xl ml-2 my-2 font-semibold">Platforms</h3>

              <li>
                <Link to="/pc">PC</Link>
              </li>
              <li>
                <Link to="/playstation">PlayStation</Link>
              </li>
              <li>
                <Link to="/xbox">Xbox</Link>
              </li>
              <li>
                <Link to="/nintendo">Nintendo</Link>
              </li>
              <li>
                <Link to="/ios">iOS</Link>
              </li>
              <li>
                <Link to="/web">Web</Link>
              </li>
              <h3 className="text-2xl ml-2 my-2 font-semibold">Genres</h3>
              <li>
                <Link to="/">Action</Link>
              </li>
              <li>
                <Link to="/">RPG</Link>
              </li>
              <li>
                <Link to="/">Strategy</Link>
              </li>
              <li>
                <Link to="/">Shooter</Link>
              </li>
              <li>
                <Link to="/">Adventure</Link>
              </li>
              <li>
                <Link to="/">Puzzle</Link>
              </li>
              <li>
                <Link to="/">Racing</Link>
              </li>
              <li>
                <Link to="/">Sports</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Nav;
