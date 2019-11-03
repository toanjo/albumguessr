import { SET_ALBUMS, RESET_QUIZ, SHOW_ERROR } from '../actions/list';
import { MARK_COMPLETED } from '../actions/quiz';

const initState = {
  data: [],
  alert: false
};
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

function setCompleted(list, item) {
  for(var i = 0; i< list.data.length; i++) {
    if(list.data[i].name === item.album.name) {
      list.data[i].completed = true;
      break;
    }
  }
  return list;
}

export const listReducer = (list = initState, action) => {
  switch (action.type) {
    case SET_ALBUMS:
     return { ...list, data: shuffle(treatArray(action.payload.topalbums.album)) }

    case SHOW_ERROR:
      return { ...list, data: [], alert: true }

    case RESET_QUIZ:
      return initState;

    case MARK_COMPLETED:
      setCompleted(list, action.payload);
      return { ...list };
    
    default:
      return { ...list };
  }
};
