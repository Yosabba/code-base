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

const Game = ({ name, released, image, id, genres, platforms}) => {
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
      <motion.div
        variants={popup}
        initial="hidden"
        animate="show"
        whileHover={{
          scale: 1.02,
          transition: {
            duration: 0.4,
          },
        }}
        className="card w-80 bg-base-100 shadow-xl mx-8"
      >
        <img src={smallImage(image, 640)} alt="game" />
        <div className="card-body">
          <div className="badge bg-[#F15946] border-[#F15946] ">{`Release Date: ${formatDate(
            released
          )}`}</div>
          <h2 className="card-title text-2xl">{name}</h2>
          <Link
            to={`/game/${id}`}
            onClick={loadDetailHandler}
            className="btn bg-[#0C090D] border-[#0C090D] my-6"
          >
            View
          </Link>
          <div className="card-actions justify-end">
            {platforms.map((data) => (
              <img
                alt={data.platform.name}
                key={data.platform.id}
                src={getPlatform(data.platform.name)}
                className="w-6"
              ></img>
            ))}
          </div>
          <div className="card-actions justify-end">
            {genres.map((element) => (
              <div className="badge badge-outline cursor-pointer">
                {element.name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Game;
