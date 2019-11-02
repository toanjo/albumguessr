import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from '../actions/list';
import Question from './Question';

export default function QuizArea() {

  const albums = useSelector(state => state.list.data);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  return (
    <>
    <div className="columns">
      <div className="column" style={{display:'flex',alignItems:'center', justifyContent:'flex-end'}}>
        {index > 0 && 
          <span onClick={() => setIndex(index-1)} className="icon is-large" style={{cursor:'pointer'}}>
            <i className="fas fa-caret-left"></i>
          </span>
        }
      </div>
      <div className="column box">
        {albums.length > 0 && <Question album={albums[index]}/>}
      </div>
      <div className="column" style={{display:'flex',alignItems:'center'}}>
        {index < 49 && 
          <span onClick={() => setIndex(index+1)} className="icon is-large" style={{cursor:'pointer'}}>
            <i className="fas fa-caret-right"></i>
          </span>
        }
      </div>
    </div>
      <button className="button" onClick={() => dispatch(resetQuiz())}>End Quiz</button>
    </>
  );
}
