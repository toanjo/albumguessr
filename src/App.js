import React from 'react';
import { useSelector } from 'react-redux';
import QuizArea from './components/QuizArea.js'
import Header from './components/Header.js'
import './App.css';
import InputArea from './components/InputArea';

function App() {

  const state = useSelector(state => state);

  return (
    <div className="App">
      <Header />
      { Object.keys(state.list.data).length > 0 ? 
          <QuizArea /> 
        : 
          <>
            <p>AlbumGuessr takes your <a href="https://www.last.fm/user/to_anjo" target="_blank">last.fm</a> username and tests your knowledge on your favorite albums. 
            Can you match all 50 album covers with their title?</p>
            <InputArea />
          </>
      }
    </div>
  );
}

export default App;
