import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchList } from '../actions/list';

export default function InputArea() {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");

    return (
        <div className="column">
            <div className="field">
            <input placeholder="Username" className="input" type="text" 
            value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="field">
            <button className="button is-primary" onClick={() => dispatch(fetchList(username))}>
                Start Quiz
            </button>
            </div>
        </div>
    );
}
