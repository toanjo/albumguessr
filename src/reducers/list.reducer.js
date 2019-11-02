import { SET_ALBUMS, RESET_QUIZ } from '../actions/list';

const initState = [];
const url = '#text';

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function treatArray(a) {
  let b = [];
  for( let i=0; i<a.length; i++) {
    b.push({
      name: a[i].name,
      image: a[i].image[3][url],
      completed: false
    })
  }
  return b;
}

export const listReducer = (list = initState, action) => {
  switch (action.type) {
    case SET_ALBUMS:
     return { ...list, data: shuffle(treatArray(action.payload.topalbums.album)) }

    case RESET_QUIZ:
      return {}
    
    default:
      return { ...list };
  }
};
