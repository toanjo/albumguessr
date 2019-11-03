import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList } from '../actions/list';

export default function InputArea() {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");

    const state = useSelector(state => state.list);

    return (
        <div className="column">
            <div className="field">
            {state.alert && <p className="has-text-danger">Could not fetch listening data for this user.</p>}
            <input placeholder="Username" className="input" type="text" style={{width:'360px', textAlign:'center'}}
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
