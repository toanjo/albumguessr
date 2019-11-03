import {
    LIST_ALBUMS, setAlbums, showAlert, RESET_QUIZ, resetQuiz
  } from '../actions/list';
  import { API_SUCCESS, API_ERROR, apiRequest } from '../actions/api';
  import { baseURL, api_key } from '../utils/defaults';
  
  export const listMiddleware = () => next => action => {
    next(action);
  
    switch (action.type) {
      case LIST_ALBUMS:
        next(
          apiRequest({
            body: null,
            method: 'GET',
            url: baseURL + '?method=user.gettopalbums&user='+action.payload+'&api_key='+api_key+'&format=json',
            feature: LIST_ALBUMS,
          })
        );
        break;

      case RESET_QUIZ:
        next(resetQuiz());
        break; 

      case `${LIST_ALBUMS} ${API_SUCCESS}`:
        next(setAlbums(action.payload));
        break;

      case `${LIST_ALBUMS} ${API_ERROR}`:
        next(showAlert());
        break;

      default:
        break;
      }
  };
  