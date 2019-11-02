import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Question(album) {

  const [input, setInput] = useState(""); 
  const dispatch = useDispatch();

  useEffect(() => {
    if(input.toLowerCase() === album.album.name.toLowerCase()) {
      // dispatch();
    }
  }, [input])

  return (
    <div>
        <img src={album.album.image} alt={album.album.name}/>
        <p className="has-text-weight-semibold">What album is this?</p>
        <input className="input" onChange={(e) => setInput(e.target.value)}/>
    </div>
  );
}
