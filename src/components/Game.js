import React, { useEffect } from "react";
//Styling and Animation
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup } from "../animations";

const Game = ({ name, released, image, id }) => {
  useEffect(() => {}, []);
  const stringPathId = id.toString();
  //Load Detail Handler
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
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
      <div className="card w-96 bg-base-100 shadow-xl">
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
      </div>
    </motion.section>
  );
};

export default Game;
