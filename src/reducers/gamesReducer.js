const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  gameDesc: 0,
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
        gameDesc: action.payload.gameDesc,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    case "GET_DESC":
      return {
        ...state,
        gameDesc: action.payload.gameDesc,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
