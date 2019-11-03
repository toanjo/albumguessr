import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { completeQuestion } from '../actions/quiz';

export default function Question(album) {

  const [input, setInput] = useState(""); 
  const dispatch = useDispatch();

  useEffect(() => {
    if(input.toLowerCase() === album.album.name.toLowerCase()) {
      dispatch(completeQuestion(album));
      setInput("");
    }
  }, [input, dispatch, album])

  return (
    <div>
        <img src={album.album.image} alt={album.album.name}/>
        <p className="has-text-weight-semibold">What album is this?</p>
        <input className="input" onChange={(e) => setInput(e.target.value)} 
        value={album.album.completed ? album.album.artist + '-' + album.album.name : input} disabled={album.album.completed}/>
        {album.album.completed && <span className="icon has-text-success" style={{marginTop:'1em'}}><i className="fas fa-check-square"></i></span>}
    </div>
  );
}
