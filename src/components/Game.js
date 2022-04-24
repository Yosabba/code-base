import React, { useEffect } from "react";
//Styling and Animation
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup } from "../animations";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

const Game = ({ name, released, image, id, genres, platforms }) => {
  const stringPathId = id.toString();
  //Load Detail Handler
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation":
        return playstation;
      case "Xbox":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo":
        return nintendo;
      case "Apple Macintosh":
        return apple;
      default:
        return gamepad;
    }
  };

  const formatDate = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return `${month}/${day}/${year}`;
  };

  return (
    <motion.section
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
    >
      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <span className="badge badge-primary items-center text-base">{`Release Date: ${formatDate(
          released
        )}`}</span>
        <div className="card-body items-center text-center ">
          <h2 className="card-title text-md">{name}</h2>

          <motion.img
            layoutId={`image ${stringPathId}`}
            src={smallImage(image, 640)}
            alt={name}
            className="rounded-xl"
          />
          {genres.map(element => <p className="">{element.name}</p>)}

          <div className="card-actions">
            <Link
              to={`/game/${id}`}
              onClick={loadDetailHandler}
              className="btn btn-primary px-8 my-6"
            >
              View
            </Link>
          </div>
        </div>
      </div> */}
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={smallImage(image, 640)} alt="Shoes" />
        </figure>
        <div class="card-body">
          <div class="badge badge-primary">{`Release Date: ${formatDate(
            released
          )}`}</div>
          <h2 className="card-title text-2xl">{name}</h2>
          <Link
            to={`/game/${id}`}
            onClick={loadDetailHandler}
            className="btn btn-primary my-6"
          >
            View
          </Link>
          <div class="card-actions justify-end">
            {platforms.map((data) => (
              <img
                alt={data.platform.name}
                key={data.platform.id}
                src={getPlatform(data.platform.name)}
                className="w-6"
              ></img>
            ))}
          </div>
          <div class="card-actions justify-end">
            {genres.map((element) => (
              <div className="badge badge-outline cursor-pointer">
                {element.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Game;
