import React from 'react';
import './App.css';

import { useDispatch, useSelector } from "react-redux";

function App() {

	const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);
  
  const addCash = () => {
    dispatch({type:"ADD_CASH", payload: cash})
  }
  
  const getCash = () => {
    dispatch({type:"GET_CASH", payload: cash})
  }

return (
		<div className="state">
          <div>{cash}</div>
          <div className="flex-auto">
            <button onClick={() => addCash(Number(prompt()))}>Вложить деньги</button>
            <button onClick={() => getCash(Number(prompt()))}>Снять деньги</button>
          </div>
	  </div>
	);
}

export default App;
