import React from 'react';
import { useDispatch } from 'react-redux';
import { resetQuiz } from '../actions/list';

export default function Header() {

  const dispatch = useDispatch();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" style={{padding:'1em'}}>
        <div className="navbar-brand" style={{cursor:'pointer'}} onClick={() => dispatch(resetQuiz())}>
            <h1 className="title">AlbumGuessr</h1>
        </div>
    </nav>
  );
}
