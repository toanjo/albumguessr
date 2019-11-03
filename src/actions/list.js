export const LIST_ALBUMS = 'LIST_ALBUMS';
export const SET_ALBUMS = 'SET_ALBUMS';
export const RESET_QUIZ = 'RESET_QUIZ';
export const SHOW_ERROR = 'SHOW_ERROR';

export const fetchList = (userName) => ({
    type: LIST_ALBUMS,
    payload: userName
});

export const resetQuiz = () => ({
    type: RESET_QUIZ,
});

export const setAlbums = (data) => ({
    type: SET_ALBUMS,
    payload: data
})

export const showAlert = () => ({
    type: SHOW_ERROR
})