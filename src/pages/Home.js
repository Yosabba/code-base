import React, { useEffect, useState } from "react";
import GameDetail from "../components/GameDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
//Styling and Animation
import styled from "styled-components";
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
      className="mobile:p-0"
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
            <Games className="grid">
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : null}

        <h1 className="text-5xl mobile:text-4xl ml-[1.5rem] py-8">
          Upcoming Games
        </h1>
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
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}

        {desktopWindowSize ? (
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper mb-12 py-4 cursor-grab"
          >
            {upcoming.map((game) => (
              <SwiperSlide>
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}

        <h1 className="text-5xl mobile:text-4xl ml-[1.5rem] py-8">
          Popular Games
        </h1>
        {desktopWindowSize ? (
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper mb-12 py-4 cursor-grab"
          >
            {popular.map((game) => (
              <SwiperSlide>
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}

        <h1 className="text-5xl mobile:text-4xl ml-[1.5rem] py-8">New Games</h1>
        {desktopWindowSize ? (
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper mb-12 py-4 cursor-grab"
          >
            {newGames.map((game) => (
              <SwiperSlide>
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </AnimateSharedLayout>
    </motion.main>
  );
};


const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
  }
`;

export default Home;
