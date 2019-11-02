import { API_REQUEST, apiError, apiSuccess } from '../actions/api';
import axios from 'axios';

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { body, url, method, feature } = action.payload;

    axios({
      method: method,
      url: url,
      data: body,
    })
      .then(response => dispatch(apiSuccess({ response, feature })))
      .catch(error => dispatch(apiError({ error, feature })));
  }
};
