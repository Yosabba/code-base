import React, { useEffect, useState } from "react";
import GameDetail from "../components/GameDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
//Styling and Animation
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";

import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const Home = () => {
  const [mobileWindowSize, setMobileWindowSize] = useState(false);
  const [desktopWindowSize, setDesktopWindowSize] = useState(false);
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //FETCH GAMES
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
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

  return (
    <motion.main
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="mobile:p-0 mx-60 "
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

        <h1 className="text-5xl mobile:text-4xl py-8">Upcoming Games</h1>
        {mobileWindowSize ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper w-96"
          >
            {upcoming.map((game) => (
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
            {upcoming.map((game) => (
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

        <h1 className="text-5xl mobile:text-4xl ml-[1.5rem] py-8">
          Popular Games
        </h1>
        {desktopWindowSize ? (
          <section className="grid grid-cols-auto-fit gap-x-[3rem] gap-y-[2rem]">
            {popular.map((game) => (
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

        {mobileWindowSize ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper w-96"
          >
            {popular.map((game) => (
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

        <h1 className="text-5xl mobile:text-4xl ml-[1.5rem] py-8">New Games</h1>
        {desktopWindowSize ? (
          <section className="grid grid-cols-auto-fit gap-x-[3rem] gap-y-[2rem]">
            {newGames.map((game) => (
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

        {mobileWindowSize ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper w-96"
          >
            {newGames.map((game) => (
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
      </AnimateSharedLayout>
    </motion.main>
  );
};

export default Home;
