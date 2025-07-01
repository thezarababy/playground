import React from 'react'
import { useState } from 'react'

const Home = () => {

const[count,setCount]= useState(9);

const increaseCount=()=>{
  setCount(count +1);
};
  const decreaseCount=()=>{
    setCount(count -1);
  };
  const sqrt=()=>{
    textl
  }

  return (
    <div>
        This is the home page
        <h1>your state value is:{count}</h1>
        <button onClick={increaseCount}> Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={Math.sqrt(count)}>Square root</button>
    </div>
  )
}

export default Home