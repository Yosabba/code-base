import React, { useEffect, useState } from "react";
import GameDetail from "../../components/GameDetail";
//Redux
import { useSelector } from "react-redux";
//Components
import Game from "../../components/Game";
//Styling and Animation
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../../animations";

import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const Home = () => {
  const [mobileWindowSize, setMobileWindowSize] = useState(false);
  const [desktopWindowSize, setDesktopWindowSize] = useState(false);
  const allPuzzleGames = [];

  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //FETCH GAMES

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Get that data back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  const handleResize = () => {
    if (window.innerWidth > 480) {
      setMobileWindowSize(false);
      setDesktopWindowSize(true);
    } else if (window.innerWidth < 480) {
      setDesktopWindowSize(false);
      setMobileWindowSize(true);
    }
  };

  const getAllGamePlatforms = (game) => {
    for (let i = 0; i < game.length; i++) {
      for (let j = 0; j < game[i].genres.length; j++) {
        if (game[i].genres[j].slug === "puzzle") {
          allPuzzleGames.push(game[i]);
        }
      }
    }
  };

  getAllGamePlatforms(popular);
  getAllGamePlatforms(newGames);
  getAllGamePlatforms(upcoming);

  return (
    <motion.main
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="laptop:ml-72 mobile:p-0 "
    >
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>

        {searched.length ? (
          <div className="searched">
            <h1 className="text-5xl mobile:text-4xl ml-[1.5rem] py-8">
              Searched Games
            </h1>
            <section className="grid grid-cols-auto-fit gap-x-[3rem] gap-y-[2rem]">
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                  platforms={game.parent_platforms}
                  genres={game.genres}
                />
              ))}
            </section>
          </div>
        ) : null}

        <h1 className="text-5xl ml-2 mobile:text-4xl text py-8 font-medium">
          Puzzle
        </h1>
        {mobileWindowSize ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper py-8 w-96"
          >
            {allPuzzleGames.map((game) => (
              <SwiperSlide>
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                  genres={game.genres}
                  platforms={game.parent_platforms}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}

        {desktopWindowSize ? (
          <section className="grid grid-cols-auto-fit gap-x-[3rem] gap-y-[2rem]">
            {allPuzzleGames.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
                genres={game.genres}
                platforms={game.parent_platforms}
                rating={game.ratings_count}
              />
            ))}
          </section>
        ) : null}
      </AnimateSharedLayout>
    </motion.main>
  );
};

export default Home;
